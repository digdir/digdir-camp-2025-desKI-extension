import { Card } from '@digdir/designsystemet-react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slugify';
import './Grid.css';

type GridProps = {
  solutions: string[];
  basePath: string;
};

export default function Grid({ solutions, basePath }: GridProps) {
  return (
    <div className="grid-container">
      {solutions.map((title) => {
        const path = `${basePath}/${slugify(title)}`;

        return (
          <Link to={path} key={title} state={{ solutions }}>
            <Card variant="tinted" className="solutionCard btn-theme">
              <Card.Block className="grid-card-block">
                <h3 className="grid-card-title">{title}</h3>
              </Card.Block>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
