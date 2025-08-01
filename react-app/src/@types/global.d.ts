interface Params {
  responseMode: 'arrayStream' | 'stringChunk' | 'stringStream' | string;
  instruction?: string;
  think?: false;
}

interface Progress {
  file: string;
  progress: number;
}

interface Icon {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

interface Message {
  status: string;
  data?: Progress;
  output?: string | any[];
  error?: unknown;
}

interface Window {
  electron: {
    onStatus: (callback: (message: Message) => void) => () => void;
    run: (message: any) => void;
    updateTranslations: (message: any) => void;
  };
}
