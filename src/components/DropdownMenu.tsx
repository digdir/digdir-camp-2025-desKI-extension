import { Dropdown } from '@digdir/designsystemet-react';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { slugify } from '../utils/slugify';

interface DropDownMenuProps {
  solutions: string[];
}

export const DropDownMenu = ({ solutions }: DropDownMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Hent siste del av URL-en
  const currentSlug = location.pathname.split('/').filter(Boolean).slice(-1)[0] ?? '';

  // Finn løsning som matcher slug-en
  const selected = useMemo(() => {
    return solutions.find((solution) => slugify(solution) === currentSlug);
  }, [currentSlug, solutions]);

  const handleSelect = (solution: string) => {
    const slug = slugify(solution);
    navigate(`/${slug}`);
    setOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
  <Dropdown.TriggerContext>
    <Dropdown.Trigger
      onClick={() => setOpen(!open)}
      className="w-full mt-2 bg-transparent border-none outline-none hover:bg-[var(--ds-color-neutral-surface-hover)] focus:bg-[var(--ds-color-neutral-surface-hover)] active:bg-[var(--ds-color-neutral-surface-hover)] rounded px-3 py-2 flex items-center justify-between gap-2"
    >
      {selected ?? 'Velg løsning'}
      <ChevronDownIcon aria-hidden />
    </Dropdown.Trigger>

    <Dropdown open={open} onClose={() => setOpen(false)}>
      <Dropdown.List className="w-full max-h-60 overflow-y-auto shadow-lg rounded-md bg-white z-50">
        {solutions.map((solution) => (
          <Dropdown.Button
            key={solution}
            onClick={() => handleSelect(solution)}
            className="px-4 py-2 w-full text-left hover:bg-[var(--ds-color-neutral-surface-hover)]"
          >
            {solution}
          </Dropdown.Button>
        ))}
      </Dropdown.List>
    </Dropdown>
  </Dropdown.TriggerContext>
</div>


  );
};


