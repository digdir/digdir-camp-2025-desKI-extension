import { Card } from '@digdir/designsystemet-react';

/**
 * Displays the initial landing page where users choose a solution to get help with.
 * Clicking a card routes to the chatbot page with the selected solution.
 */
export function GridMenu() {
  return (
    <div >
      <div>
       
        <h2 >
          Hei, hvilken løsning vil du ha hjelp med i dag?
        </h2>
      </div>
      <div >
            <Card variant="tinted">
              <h3 >Løsning 1</h3>
              <p >
                Beskrivelse av løsning 1.
              </p>
            </Card>
      </div>
    </div>
  );
}
