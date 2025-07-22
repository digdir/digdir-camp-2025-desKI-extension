import { Card } from '@digdir/designsystemet-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

type GridProps = {
  solutions: string[];
  basePath: string;
};

export default function Grid({ solutions, basePath }: GridProps) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 w-full px-1 py-2 scale-[0.80] origin-top">
      {solutions.map((title) => {
        const path = `${basePath}/${slugify(title)}`;

        return (
          <Link to={path} key={title} state={{solutions}}>
            <Card
              variant="tinted"
              className="w-full aspect-square flex items-center justify-center text-center rounded-md border transition-colors duration-200
                btn-theme
                dark:hover:border-[var(--ds-color-brand3-border-subtle)]"
            >
              <Card.Block className="px-1">
                <h3 className="text-[11px] font-medium leading-snug text-center text-[var(--ds-color-text-default)] break-words hyphens-auto">
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





