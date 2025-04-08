import { useState } from 'react';

export function useTranslate() {
  const [input, setInput] = useState('');

  const translate = async () => {
    try {
      await window.electron.run(
        [
          {
            role: 'system',
            content: 'You are a translator, send only the translation itself.',
          },
          { role: 'user', content: input },
        ],
        { status: 'progress' }
      );
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    input,
    setInput,
    translate,
  };
}
