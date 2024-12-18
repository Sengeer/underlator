import { useEffect, useState } from 'react';
import LanguageSelector from '../../shared/ui/language-selector';
import ProgressBar from '../../shared/ui/progress-bar';

function TextTranslator() {
  // Model loading
  const [progressItems, setProgressItems] = useState([]);

  // Inputs and outputs
  const [input, setInput] = useState('I like to translate.');
  const [sourceLanguage, setSourceLanguage] = useState('eng_Latn');
  const [targetLanguage, setTargetLanguage] = useState('rus_Cyrl');
  const [output, setOutput] = useState('');

  useEffect(() => {
    window.electron.onStatus((message) => {
      switch (message.status) {
        case 'progress':
          setProgressItems(() => [message.data]);
          break;
        case 'update':
          setOutput(message.output);
          break;
        case 'complete':
          setOutput(message.output[0].translation_text);
          setProgressItems([]);
          break;
        case 'error':
          console.error(message.error);
          break;
      }
    });
  }, []);

  const translate = async () => {
    try {
      await window.electron.run({
        text: input,
        src_lang: sourceLanguage,
        tgt_lang: targetLanguage,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='language-container'>
          <LanguageSelector
            type={'Source'}
            defaultLanguage={'eng_Latn'}
            onChange={(x) => setSourceLanguage(x.target.value)}
          />
          <LanguageSelector
            type={'Target'}
            defaultLanguage={'rus_Cyrl'}
            onChange={(x) => setTargetLanguage(x.target.value)}
          />
        </div>

        <div className='textbox-container'>
          <textarea
            value={input}
            rows={3}
            onChange={(e) => setInput(e.target.value)}></textarea>
          <textarea value={output} rows={3} readOnly></textarea>
        </div>
      </div>

      <button onClick={translate}>Translate</button>

      <div className='progress-bars-container'>
        {progressItems.map((data) => (
          <div key={data.file}>
            <ProgressBar text={data.file} percentage={data.progress} />
          </div>
        ))}
      </div>
    </>
  );
}

export default TextTranslator;
