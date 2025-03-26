import { useState } from 'react';

export function useTranslate() {
  const [input, setInput] = useState('');

  const translate = async (text: string) => {
    try {
      await window.electron.run([{ role: 'user', content: input }]);
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
