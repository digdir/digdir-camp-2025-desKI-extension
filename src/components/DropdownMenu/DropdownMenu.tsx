import { Dropdown } from '@digdir/designsystemet-react';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { slugify } from '../../utils/slugify';
import './DropdownMenu.css';

interface DropDownMenuProps {
  solutions: string[];
}

function formatSlug(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const DropDownMenu = ({ solutions }: DropDownMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const basePath = pathParts[0] ?? '';
  const currentSlug = (pathParts[1] ?? '').toLowerCase();

  const selected = useMemo(() => {
    return solutions.find((solution) => slugify(solution) === currentSlug);
  }, [currentSlug, solutions]);

  const handleSelect = (solution: string) => {
    const slug = slugify(solution);
    navigate(`/${basePath}/${slug}`, {
      state: { solutions },
    });
    setOpen(false);
  };

  return (
    <div className="dropdown-container">
      <Dropdown.TriggerContext>
        <Dropdown.Trigger
          onClick={() => setOpen(!open)}
          className="dropdown-trigger"
        >
          {selected ?? (currentSlug ? formatSlug(currentSlug) : 'Velg løsning')}
          <ChevronDownIcon aria-hidden />
        </Dropdown.Trigger>

        <Dropdown open={open} onClose={() => setOpen(false)}>
          <Dropdown.List className="dropdown-list">
            {solutions.map((solution) => (
              <Dropdown.Button
                key={solution}
                onClick={() => handleSelect(solution)}
                className="dropdown-button"
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
