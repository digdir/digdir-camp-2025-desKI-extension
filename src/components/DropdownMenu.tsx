import { Dropdown } from '@digdir/designsystemet-react';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { slugify } from '../utils/slugify';
import { useTranslation } from 'react-i18next';
import { SOLUTIONS_NO } from '../data/solutions';
import { KEY } from '../i18n/constants';

function formatSlug(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * DropdownMenu displays translated support solutions in a dropdown.
 * URLs use Norwegian slugs (from SOLUTIONS_NO) for consistency.
 * Only used in the 'servicedesk' route.
 */

export function DropdownMenu() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const source = pathParts[1]; // 'servicedesk'
  const currentSlug = pathParts[2] || '';

  // Get translated solutions (order must match SOLUTIONS_NO)
  const translatedSolutions = t(KEY.solutions_list, {
    returnObjects: true,
  }) as string[];

  // Map Norwegian name -> translated name
  const solutionMap = SOLUTIONS_NO.reduce(
    (acc, noName, index) => {
      acc[noName] = translatedSolutions[index];
      return acc;
    },
    {} as Record<string, string>,
  );

  // Find which Norwegian solution matches the slug
  const norwegianName = SOLUTIONS_NO.find(
    (name) => slugify(name) === currentSlug,
  );

  // Display name: translated if found, fallback to formatted slug
  const currentSolution =
    norwegianName && solutionMap[norwegianName]
      ? solutionMap[norwegianName]
      : formatSlug(currentSlug);

  const handleSelect = (norwegianName: string) => {
    const slug = slugify(norwegianName);
    navigate(`/${source}/${slug}`);
    setOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <Dropdown.TriggerContext>
        <Dropdown.Trigger
          onClick={() => setOpen(!open)}
          className="w-full mt-1 bg-transparent border-none outline-none hover:bg-[var(--ds-color-neutral-surface-hover)] focus:bg-[var(--ds-color-neutral-surface-hover)] active:bg-[var(--ds-color-neutral-surface-hover)] rounded px-4 py-2 flex items-center justify-between gap-2"
        >
          {currentSolution?? (currentSlug ? t(formatSlug(currentSlug)) : 'Velg løsning')}
          <ChevronDownIcon aria-hidden />
        </Dropdown.Trigger>

        <Dropdown open={open} onClose={() => setOpen(false)}>
          <Dropdown.List className="w-full max-h-60 overflow-y-auto shadow-lg rounded-md bg-white z-50">
            {SOLUTIONS_NO.map((solution) => (
              <Dropdown.Button
                key={solution}
                onClick={() => handleSelect(solution)}
                className="px-4 py-2 w-full text-left hover:bg-[var(--ds-color-neutral-surface-hover)]"
              >
                {t(solution)}
              </Dropdown.Button>
            ))}
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>
    </div>
  );
};
