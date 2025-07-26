import { Button, Dropdown, Tooltip } from '@digdir/designsystemet-react';
import { EarthIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KEY } from '../i18n/constants';
import { LOCALSTORAGE_KEY } from '../i18n/i18n';
import { LANGUAGES, type Language } from '../i18n/types';

const languageLabels: Record<Language, string> = {
  nb: 'Bokmål',
  nn: 'Nynorsk',
  en: 'English',
  ns: 'Davvisámegiella',
};

export default function LanguageDropdown() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const switchLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(LOCALSTORAGE_KEY, lang);
    setOpen(false);
  };

  return (
    <Dropdown.TriggerContext>
      <Tooltip content={t(KEY.language_switch)} placement="left">
        <div>
          <Dropdown.Trigger
            className={"bg-transparent text-[color:var(--ds-color-main-text)] p-0 text-lg hover:bg-[color:var(--ds-color-neutral-surface-hover)] hover:text-[color:var(--ds-color-main-text)] focus:outline-none border-none outline-none"}
            onClick={() => setOpen(!open)}
            aria-label={t(KEY.language_switch)}
          >
            <EarthIcon />
          </Dropdown.Trigger>
        </div>
      </Tooltip>
      <Dropdown open={open} onClose={() => setOpen(false)}>
        <Dropdown.List>
          {(Object.values(LANGUAGES) as Language[]).map((lang) => (
            <Dropdown.Button
              key={lang}
              onClick={() => switchLanguage(lang)}
              className={"hover:bg-[var(--ds-color-neutral-surface-hover)]"}
            >
              {languageLabels[lang]}
            </Dropdown.Button>
          ))}
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
}
