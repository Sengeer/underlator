/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_LOCALE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
