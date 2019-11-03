import React from 'react';
import { styled } from 'styletron-react';

import { VisualizerCell } from './VisualizerCell';

const Outer = styled('section', {
  maxWidth: '700px',
  margin: '0px auto',
});

const Middle = styled('div', {
  paddingTop: '100%',
  overflow: 'hidden',
  position: 'relative',
  maxHeight: '700px',
  maxWidth: '700px',
});

const Inner = styled('div', {
  maxHeight: '700px',
  maxWidth: '700px',
  display: 'grid',
  gridTemplateColumns: 'repeat(13, minmax(30px, 1fr))',
  gridTemplateRows: 'repeat(13, minmax(30px, 1fr))',

  gridColumnGap: '4px',
  gridRowGap: '4px',

  borderRadius: '8px',

  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const VisualizerGrid = ({
  hands,
  handStatusMap,
  handleStatusChange,
}) => (
  <Outer>
    <Middle>
      <Inner>
        {hands.flat().map((hand) => (
          <VisualizerCell
            label={hand}
            status={handStatusMap[hand]}
            handleStatusChange={handleStatusChange}
            key={hand}
          />
        ))}
      </Inner>
    </Middle>
  </Outer>
);
