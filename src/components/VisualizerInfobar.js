import React from 'react';
import { styled } from 'styletron-react';

const totalPossibleCombos = 1326;

const round_to_precision = (x, precision) => {
  const y = +x + (precision === undefined ? 0.5 : precision / 2);
  return y - (y % (precision === undefined ? 1 : +precision));
};

const Section = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '700px',
});

const calcNumHandCombos = (hand) => {
  // handle pairs (6 combos)
  if (hand.charAt(0) === hand.charAt(1)) {
    return 6;
  }
  // handle suited cards (4 combos)
  if (hand.charAt(2) === 's') {
    return 4;
  }
  // handle unsuited cards (12 combos)
  return 12;
};

const calcTotalNumSelectionCombos = (handStatusMap) =>
  Object.entries(handStatusMap).reduce(
    (count, hand) => {
      const [label, status] = hand;
      if (status === 'YES') {
        count[0] = count[0] + calcNumHandCombos(label);
      } else if (status === 'MAYBE') {
        count[1] = count[1] + calcNumHandCombos(label);
      }
      return count;
    },
    [0, 0]
  );

export const VisualizerInfobar = ({ handStatusMap }) => {
  const [yesCombos, maybeCombos] = calcTotalNumSelectionCombos(handStatusMap);

  return (
    <Section>
      <div>{`'Yes' combos: ${yesCombos} : ${round_to_precision(
        (yesCombos / totalPossibleCombos) * 100,
        0.01
      )}%`}</div>
      <div>{`'Maybe' combos: ${maybeCombos} : ${round_to_precision(
        (maybeCombos / totalPossibleCombos) * 100,
        0.01
      )}%`}</div>
    </Section>
  );
};
