import React from 'react';
import { Slider } from 'baseui/slider';
import { Button, SIZE, KIND } from 'baseui/button';
import { styled } from 'styletron-react';

import { calcNumHandCombos, totalPossibleCombos } from '../utils';
import { sixMaxRankings } from '../constants/handRankings';

const calcSliderRange = (start, end, handRankings) => {
  console.log('handRankings', handRankings)
  let numCombos = 0;
  let startIdx = 0;
  let endIdx = null;

  for (let i = 0; i < handRankings.length; i++) {
    const hand = handRankings[i];
    numCombos += calcNumHandCombos(hand);
    if ((numCombos / totalPossibleCombos) * 100 > start) {
      startIdx = i;
      break;
    }
  }

  for (let i = startIdx; i < handRankings.length; i++) {
    const hand = handRankings[i];
    numCombos += calcNumHandCombos(hand);
    if ((numCombos / totalPossibleCombos) * 100 > end) {
      endIdx = i;
      break;
    }
  }
  console.log('result', handRankings.slice(startIdx, endIdx + 1))
  return handRankings.slice(startIdx, endIdx + 1);
};

const Section = styled('section', {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '700px',
  margin: '0px auto',
});

const RangeSlider = ({ setRange }) => {
  const [value, setValue] = React.useState([0, 25]);
  return (
    <Section>
      <Slider
        value={value}
        onChange={({ value }) => value && setValue(value)}
      />
      <div style={{ height: '60%' }}>
        <Button
          size={SIZE.compact}
          kind={KIND.minimal}
          onClick={() => setRange(calcSliderRange(...value, sixMaxRankings))}
        >
          Set Range
        </Button>
      </div>
    </Section>
  );
};

export { RangeSlider };
