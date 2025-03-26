import { useLingui } from '@lingui/react/macro';
import BackspaceIcon from '../../../shared/assets/icons/backspace-icon';
import CheckIcon from '../../../shared/assets/icons/check-icon';
import CopyIcon from '../../../shared/assets/icons/copy-icon';
import GlobeIcon from '../../../shared/assets/icons/globe-icon';
import GlobeUkIcon from '../../../shared/assets/icons/globe-uk-icon';
import SyncIcon from '../../../shared/assets/icons/sync-icon';
import TranslateIcon from '../../../shared/assets/icons/translate-icon';
import { useCopying } from '../../../shared/lib/hooks/use-copying';
import { useTranslate } from '../../../shared/lib/hooks/use-translate';
import { useTranslateStatus } from '../../../shared/lib/hooks/use-translate-status';
import useWindowSize from '../../../shared/lib/hooks/use-window-size';
import AnimatingWrapper from '../../../shared/ui/animating-wrapper';
import DecorativeTextAndIconButton from '../../../shared/ui/decorative-text-and-icon-button';
import IconButton from '../../../shared/ui/icon-button';
import Loader from '../../../shared/ui/loader';
import TextAndIconButton from '../../../shared/ui/text-and-icon-button';
import './index.scss';

interface TextTranslator {
  isOpened: boolean;
}

function TextTranslator({ isOpened }: TextTranslator) {
  const { progressItems, output } = useTranslateStatus();

  const { isCopied, handleCopy } = useCopying();

  const { t } = useLingui();

  const { input, setInput, translate } = useTranslate();

  const handleClear = () => {
    setInput('');
  };

  const { width } = useWindowSize();

  const hasSizeS = width <= 768;

  return (
    <section
      className={`text-translator${isOpened ? ' text-translator_open' : ''}`}>
      <div className='text-translator__textarea-wrapper'>
        <textarea
          className='text-translator__textarea'
          value={input}
          rows={1}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
          onClick={handleClear}
          isDisabled={input === ''}>
          <BackspaceIcon />
        </IconButton>
      </div>
      <div className='text-translator__textarea-wrapper'>
        <textarea
          className='text-translator__textarea'
          value={output}
          rows={1}
          readOnly
        />
        <IconButton
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
          onClick={() => handleCopy(output)}
          isDisabled={output === '' || isCopied}>
          <AnimatingWrapper isShow={isCopied}>
            <CheckIcon />
          </AnimatingWrapper>
          <AnimatingWrapper isShow={!isCopied}>
            <CopyIcon />
          </AnimatingWrapper>
        </IconButton>
      </div>
      <TextAndIconButton
        text={progressItems.file === '' ? t`translate` : progressItems.file}
        style={{
          margin: '0 auto 1rem',
          width: 'min-content',
          alignSelf: 'center',
        }}
        isDisabled={progressItems.file !== ''}
        onClick={translate}>
        {progressItems.file !== '' ? <Loader /> : <TranslateIcon />}
      </TextAndIconButton>
    </section>
  );
}

export default TextTranslator;
