import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProviderType } from '../../lib/providers';
import {
  getStorageWrite,
  setStorageWrite,
} from '../../lib/utils/control-local-storage';

interface ProviderSettings {
  [key: string]: any;
}

export interface ProviderSettingsState {
  provider: ProviderType;
  settings: {
    [providerName in ProviderType]?: ProviderSettings;
  };
}

interface State {
  providerSettings: ProviderSettingsState;
}

// Function for retrieving the initial state from localStorage
function getInitialState(): ProviderSettingsState {
  const savedState = getStorageWrite('providerSettings');
  const defaultState: ProviderSettingsState = {
    provider: 'Electron IPC',
    settings: {
      'Electron IPC': {},
      Ollama: {
        url: 'http://127.0.0.1:11434',
        model: 'gemma:2b',
        typeUse: 'instruction',
        prompt: '',
      },
    },
  };

  return savedState ? JSON.parse(savedState) : defaultState;
}

const initialState: ProviderSettingsState = getInitialState();

export const providerSettingsSlice = createSlice({
  name: 'providerSettings',
  initialState,
  reducers: {
    // A redirector for installing an active provider
    setProvider(state, action: PayloadAction<ProviderType>) {
      state.provider = action.payload;
      setStorageWrite('providerSettings', JSON.stringify(state));
    },
    // Reducer for updating the settings of a specific provider
    updateProviderSettings(
      state,
      action: PayloadAction<{
        provider: ProviderType;
        settings: ProviderSettings;
      }>
    ) {
      const { provider, settings } = action.payload;
      if (!state.settings[provider]) {
        state.settings[provider] = {};
      }
      state.settings[provider] = { ...state.settings[provider], ...settings };
      setStorageWrite('providerSettings', JSON.stringify(state));
    },
    setTypeUse(
      state,
      action: PayloadAction<{ provider: ProviderType; typeUse: string }>
    ) {
      const { provider, typeUse } = action.payload;
      if (state.settings[provider]) {
        state.settings[provider]!.typeUse = typeUse;
        setStorageWrite('providerSettings', JSON.stringify(state));
      }
    },
    setPrompt(
      state,
      action: PayloadAction<{ provider: ProviderType; prompt: string }>
    ) {
      const { provider, prompt } = action.payload;
      if (state.settings[provider]) {
        state.settings[provider]!.prompt = prompt;
        setStorageWrite('providerSettings', JSON.stringify(state));
      }
    },
  },
});

export const { setProvider, updateProviderSettings, setTypeUse, setPrompt } =
  providerSettingsSlice.actions;

export const selectProviderSettings = (state: State) => state.providerSettings;

export const selectActiveProviderSettings = (state: State) => {
  const { provider, settings } = state.providerSettings;
  return { provider, settings: settings[provider] || {} };
};

export default providerSettingsSlice.reducer;
