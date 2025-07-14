import { Card } from '@digdir/designsystemet-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

type GridProps = {
  solutions: string[];
};

export default function Grid({ solutions }: GridProps) {
  return (
    <div className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 mx-auto">
      {solutions.map((title) => {
        const path = `/${slugify(title)}`;

        return (
          <Link to={path} key={title}>
            <Card
              variant="tinted"
              className="h-32 flex items-center justify-center text-center rounded-md border transition-colors duration-200 bg-[var(--ds-color-warning-surface-tinted)] border-[var(--ds-color-warning-border-subtle)] hover:bg-[var(--ds-color-warning-surface-hover)] hover:border-[var(--ds-color-warning-base-default)]"
            >
              <Card.Block>
                <h3 className="text-base font-semibold leading-snug text-center px-4 text-[var(--ds-color-text-default)]">
                  {title}
                </h3>
              </Card.Block>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

