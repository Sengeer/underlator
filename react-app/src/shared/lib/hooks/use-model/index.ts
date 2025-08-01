import { useState, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveProviderSettings } from '../../../models/provider-settings-slice';
import { getTranslationProvider } from '../../providers';

type Status = 'idle' | 'process' | 'success' | 'error';

interface Chunk {
  idx: number;
  text: string;
}

const defaultParams = {
  responseMode: 'stringStream',
};

export function useModel() {
  const abortControllerRef = useRef<AbortController | null>(null);

  const [progressItems, setProgressItems] = useState<Progress>({
    file: '',
    progress: 0,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [generatedResponse, setGeneratedResponse] = useState<
    string | Record<number, string>
  >('');
  const [error, setError] = useState<string | null>(null);

  const [translateLanguage, setTranslateLanguage] = useState<'en-ru' | 'ru-en'>(
    'en-ru'
  );
  function toggleTranslateLanguage() {
    setTranslateLanguage((prev) => (prev === 'en-ru' ? 'ru-en' : 'en-ru'));
  }

  const providerSettings = useSelector(selectActiveProviderSettings);

  const handleChunk = useCallback(
    (chunk: Chunk, params: Params) => {
      // Check validity of chunk
      if (!chunk || typeof chunk.text !== 'string') {
        console.warn('Invalid chunk received:', chunk);
        return;
      }

      if (
        providerSettings.provider === 'Electron IPC' &&
        params.responseMode === 'stringChunk'
      ) {
        setGeneratedResponse(chunk.text);
      } else if (params.responseMode === 'arrayStream') {
        setGeneratedResponse((prev) => {
          if (typeof prev === 'string') return { 0: prev + chunk.text };

          return {
            ...prev,
            [chunk.idx]: (prev[chunk.idx] || '') + chunk.text,
          };
        });
      } else {
        setGeneratedResponse((prev) =>
          typeof prev === 'string' ? prev + chunk.text : ''
        );
      }
    },
    [providerSettings]
  );

  const handleProgress = useCallback((progress: Progress) => {
    setProgressItems(progress);
  }, []);

  async function generate(texts: string[], params: Params = defaultParams) {
    setStatus('process');
    setGeneratedResponse(params.responseMode === 'arrayStream' ? {} : '');
    setError(null);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    function wrappedHandleChunk(chunk: { idx: number; text: string }) {
      handleChunk(chunk, params);
    }

    try {
      const provider = getTranslationProvider(providerSettings.provider);
      const finalResult = await provider.generate({
        ...providerSettings.settings,
        text: texts,
        translateLanguage,
        onChunk: wrappedHandleChunk,
        onProgress: handleProgress,
        signal: controller.signal,
        params: params,
      });

      // If the provider does not stream, but returns the full result
      if (finalResult) {
        if (params.responseMode === 'arrayStream')
          setGeneratedResponse(finalResult);
        else setGeneratedResponse(Object.values(finalResult).join(' '));
      }
      setStatus('success');
    } catch (e) {
      const err = e as Error;
      console.error(err.message);
      setError(err.message);
      setStatus('error');
    } finally {
      abortControllerRef.current = null;
    }
  }

  function reset() {
    setStatus('idle');
    setGeneratedResponse('');
    setError(null);
  }

  function stop() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }

  return {
    status,
    progressItems,
    generatedResponse,
    translateLanguage,
    toggleTranslateLanguage,
    error,
    generate,
    reset,
    stop,
  };
}
