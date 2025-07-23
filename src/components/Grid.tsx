import { Card } from '@digdir/designsystemet-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

type GridProps = {
  solutions: string[];
  basePath: string;
};

export default function Grid({ solutions, basePath }: GridProps) {
  return (
    <div className="grid-solutions">
      {solutions.map((title) => {
        const path = `${basePath}/${slugify(title)}`;

        return (
          <Link to={path} key={title} state={{solutions}}>
            <Card
              variant="tinted"
              className="card-square card-theme card-hover-accent"
            >
              <Card.Block className="px-1">
                <h3 className="text-micro text-theme">
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