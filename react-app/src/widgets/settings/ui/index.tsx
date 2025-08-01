import './index.scss';
import { useLingui } from '@lingui/react/macro';
import { Trans } from '@lingui/react/macro';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CableIcon from '../../../shared/assets/icons/cable-icon';
import HttpIcon from '../../../shared/assets/icons/http-icon';
import LanguageIcon from '../../../shared/assets/icons/language-icon';
import NetworkIntelligenceIcon from '../../../shared/assets/icons/network-intelligence-icon';
import { useElectronTranslation } from '../../../shared/lib/hooks/use-electron-translation';
import { useFormAndValidation } from '../../../shared/lib/hooks/use-form-and-validation';
import { loadCatalog } from '../../../shared/lib/i18n';
import { ProviderType } from '../../../shared/lib/providers';
import {
  getStorageWrite,
  setStorageWrite,
} from '../../../shared/lib/utils/control-local-storage';
import {
  openElement,
  closeElement,
  isElementOpen,
} from '../../../shared/models/element-state-slice';
import {
  selectProviderSettings,
  setProvider,
  updateProviderSettings,
  setTypeUse,
} from '../../../shared/models/provider-settings-slice';
import ButtonWrapperWithBackground from '../../../shared/ui/button-wrapper-with-background';
import ColorPicker from '../../../shared/ui/color-picker';
import SelectorPopup from '../../../shared/ui/selector-popup';
import TextAndIconButton from '../../../shared/ui/text-and-icon-button';

const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE;

export interface PopupSelectorData {
  [key: string]: string;
}

const LANGUAGES: PopupSelectorData = {
  english: 'en',
  русский: 'ru',
};

const PROVIDERS: PopupSelectorData = {
  'Electron IPC': 'Electron IPC',
  Ollama: 'Ollama',
};

interface Settings {
  isOpened: boolean;
}

function Settings({ isOpened }: Settings) {
  const { values, handleChange, resetForm, setValues } = useFormAndValidation();

  const dispatch = useDispatch();
  const { provider, settings } = useSelector(selectProviderSettings);
  const currentProviderSettings = settings[provider] || {};

  const [languageKey, setLanguageKey] = useState(() => {
    const localeFromStorage = getStorageWrite('locale');

    if (typeof localeFromStorage === 'string' && localeFromStorage !== '') {
      return Object.keys(LANGUAGES).find(
        (key) => LANGUAGES[key] === localeFromStorage
      );
    } else {
      const entry = Object.entries(LANGUAGES).find(
        ([key, val]) => val === defaultLocale
      );

      return entry ? entry[0] : '';
    }
  });

  const [language, setLanguage] = useState(() => {
    const localeFromStorage = getStorageWrite('locale');

    return typeof localeFromStorage === 'string' && localeFromStorage !== ''
      ? localeFromStorage
      : defaultLocale;
  });

  const { t } = useLingui();
  const { translateElectron } = useElectronTranslation();

  const isOpenLanguageSelectorPopup = useSelector((state) =>
    isElementOpen(state, 'languageSelectorPopup')
  );

  const isOpenProviderSelectorPopup = useSelector((state) =>
    isElementOpen(state, 'providerSelectorPopup')
  );

  const handleLanguageChange = useCallback(
    (lang: string) => {
      setLanguage(lang);
      loadCatalog(lang);
      setStorageWrite('locale', lang);
      translateElectron();
    },
    [loadCatalog, translateElectron]
  );

  function handleProviderChange(newProvider: string) {
    dispatch(setProvider(newProvider as ProviderType));
  }

  // When changing inputs, save them in the store
  useEffect(() => {
    if (provider && (values.url !== undefined || values.model !== undefined)) {
      dispatch(updateProviderSettings({ provider, settings: values }));
      dispatch(setTypeUse({ provider, typeUse: 'translation' }));
    }
  }, [values, provider, dispatch]);

  // When changing the provider or initializing, set the values from the store
  useEffect(() => {
    if (provider && settings[provider]) {
      setValues(settings[provider]);
    } else {
      resetForm();
    }
  }, [provider, setValues, resetForm]);

  return (
    <section className={`settings${isOpened ? ' settings_open' : ''}`}>
      <div className='settings__container'>
        <div className='settings__column'>
          <h2 className='settings__title'>
            <Trans>main settings</Trans>
          </h2>
          <ButtonWrapperWithBackground
            onClick={() => dispatch(openElement('languageSelectorPopup'))}>
            <TextAndIconButton
              className='text-and-icon-button'
              text={t`interface language`}
              style={{ marginLeft: '1rem' }}
              isDisabled>
              <LanguageIcon />
            </TextAndIconButton>
            <p className='settings__text'>{languageKey}</p>
          </ButtonWrapperWithBackground>
          <h2 className='settings__title'>
            <Trans>API configuration</Trans>
          </h2>
          <ButtonWrapperWithBackground
            onClick={() => dispatch(openElement('providerSelectorPopup'))}>
            <TextAndIconButton
              className='text-and-icon-button'
              text={t`API provider`}
              style={{ marginLeft: '1rem' }}
              isDisabled>
              <CableIcon />
            </TextAndIconButton>
            <p className='settings__text'>{provider}</p>
          </ButtonWrapperWithBackground>
          {provider === 'Ollama' && (
            <>
              <ButtonWrapperWithBackground>
                <TextAndIconButton
                  className='text-and-icon-button'
                  text={'URL'}
                  style={{ marginLeft: '1rem' }}
                  isDisabled>
                  <HttpIcon />
                </TextAndIconButton>
                <input
                  className='settings__input settings__text'
                  placeholder='http://127.0.0.1:11434'
                  type='url'
                  id='url'
                  name='url'
                  value={values.url || ''}
                  onChange={handleChange}
                />
              </ButtonWrapperWithBackground>
              <ButtonWrapperWithBackground>
                <TextAndIconButton
                  className='text-and-icon-button'
                  text={t`model`}
                  style={{ marginLeft: '1rem' }}
                  isDisabled>
                  <NetworkIntelligenceIcon />
                </TextAndIconButton>
                <input
                  className='settings__input settings__text'
                  placeholder='llama3.1'
                  type='text'
                  id='model'
                  name='model'
                  value={values.model || ''}
                  onChange={handleChange}
                />
              </ButtonWrapperWithBackground>
            </>
          )}
          {provider === 'Electron IPC' && (
            <ButtonWrapperWithBackground isDisabled>
              <TextAndIconButton
                className='text-and-icon-button'
                text={t`model`}
                style={{ marginLeft: '1rem' }}
                isDisabled>
                <NetworkIntelligenceIcon />
              </TextAndIconButton>
              <input
                className='settings__input settings__text'
                type='text'
                id='model'
                name='model'
                value={'opus-mt'}
                onChange={handleChange}
                disabled
              />
            </ButtonWrapperWithBackground>
          )}
        </div>
        <div className='settings__column'>
          <h2 className='settings__title'>
            <Trans>color scheme</Trans>
          </h2>
          <div className='settings__btns-group'>
            <ColorPicker
              text={t`main color`}
              variable='--main'
              color='#6272a4'
            />
            <ColorPicker
              text={t`background color`}
              variable='--background'
              color='#282a36'
            />
            <ColorPicker
              text={t`accent color`}
              variable='--accent'
              color='#bd93f9'
            />
            <ColorPicker
              text={t`foreground color`}
              variable='--foreground'
              color='#f8f8f2'
            />
          </div>
        </div>
      </div>
      <SelectorPopup
        data={LANGUAGES}
        isOpened={isOpenLanguageSelectorPopup}
        setOpened={() => dispatch(closeElement('languageSelectorPopup'))}
        setSelectedKey={setLanguageKey}
        selectedValue={language}
        setSelectedValue={handleLanguageChange}
      />
      <SelectorPopup
        data={PROVIDERS}
        isOpened={isOpenProviderSelectorPopup}
        setOpened={() => dispatch(closeElement('providerSelectorPopup'))}
        setSelectedKey={() => {}}
        selectedValue={provider}
        setSelectedValue={handleProviderChange}
      />
    </section>
  );
}

export default Settings;
