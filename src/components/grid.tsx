import { Card } from '@digdir/designsystemet-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

type GridProps = {
  solutions: string[];
};

export default function Grid({ solutions }: GridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl mx-auto px-4 py-10">
      {solutions.map((title) => {
        const path = `/${slugify(title)}`;

        return (
          <Link to={path} key={title}>
            <Card
              variant="tinted"
              className="w-[220px] h-[145px] flex items-center justify-center text-center rounded-md border transition-colors duration-200 bg-[var(--ds-color-warning-surface-tinted)] border-[var(--ds-color-warning-border-subtle)] hover:bg-[var(--ds-color-warning-surface-hover)] hover:border-[var(--ds-color-warning-base-default)]"
            >
              <Card.Block>
                <h3 className="text-[13px] font-semibold leading-snug text-center px-2 text-[var(--ds-color-text-default)]">
                 {title.split(' ').map((word, index) => (
                <span key={index}>
                 {word}
               <br />
                </span>
                 ))}
               </h3>
               
              </Card.Block>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}




