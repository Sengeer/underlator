import { useState, useEffect } from 'react';

interface Progress {
  file: string;
  progress: number;
}

export function useTranslateStatus() {
  const [progressItems, setProgressItems] = useState<Progress>({
    file: '',
    progress: 0,
  });

  const [output, setOutput] = useState('');

  useEffect(() => {
    window.electron.onStatus((message) => {
      switch (message.status) {
        case 'progress':
          if (message.data) setProgressItems(message.data);
          break;
        case 'update':
          if (message.output) setOutput((prev) => prev + message.output);
          break;
        case 'complete':
          if (message.output) setOutput(message.output);
          setProgressItems({ file: '', progress: 0 });
          break;
        case 'error':
          console.error(message.error);
          break;
      }
    });
  }, []);

  return {
    progressItems,
    output,
  };
}
