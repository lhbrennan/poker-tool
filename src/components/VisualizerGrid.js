import React from 'react';
import { styled } from 'styletron-react';

import { VisualizerCell } from './VisualizerCell';
import { LightTheme } from 'baseui';

const Section = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(13, 1fr)',
  gridTemplateRow: 'repeat(13, 1fr)',
  gridColumnGap: '4px',
  gridRowGap: '4px',
  backgroundColor: LightTheme.colors.mono300,
  padding: '6px',
  borderRadius: '8px',
  marginBottom: '20px',

  width: '700px',
  height: '700px',
  // maxWidth: '800px',
  // height: 0,
  // width: '100%',
  // paddingBottom: '100%',
});

export const VisualizerGrid = ({
  hands,
  handStatusMap,
  handleStatusChange,
}) => (
  <Section>
    {hands.flat().map((hand) => (
      <VisualizerCell
        label={hand}
        status={handStatusMap[hand]}
        handleStatusChange={handleStatusChange}
      />
    ))}
  </Section>
);
