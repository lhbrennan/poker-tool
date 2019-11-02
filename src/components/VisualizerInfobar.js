import React from 'react';
import { styled } from 'styletron-react';

const totalPossibleCombos = 1326;

/**
 * @param {number} num
 * @param {number} precision
 */
const roundToPrecision = (num, precision) => {
  const adjuster = 1 / precision;
  return Math.round(num * adjuster) / adjuster;
};

const Section = styled('section', {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  maxWidth: '700px',
  margin: '0 auto',
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

  const yesComboPercent = roundToPrecision(
    (yesCombos / totalPossibleCombos) * 100,
    0.01
  );

  const maybeComboPercent = roundToPrecision(
    (maybeCombos / totalPossibleCombos) * 100,
    0.01
  );

  return (
    <Section>
      <div>{`'Yes' combos: ${yesCombos}/${totalPossibleCombos} (${yesComboPercent}%)`}</div>
      <div>{`'Maybe' combos: ${maybeCombos}/${totalPossibleCombos} (${maybeComboPercent}%)`}</div>
    </Section>
  );
};
