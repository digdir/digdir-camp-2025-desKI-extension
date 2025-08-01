import { Card } from '@digdir/designsystemet-react';
import './SolutionCard.css';

type Props = {
  title: string;
};

export function SolutionCard({ title }: Props) {
  return (
    <Card variant="tinted" className="solution-card">
      <Card.Block className="solution-card-block">
        <h3 className="solution-card-title">
          {title}
        </h3>
      </Card.Block>
    </Card>
  );
}
