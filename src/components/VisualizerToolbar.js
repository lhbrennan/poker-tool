import React from 'react';
import { Button, KIND, SIZE } from 'baseui/button';
import { styled } from 'styletron-react';

const Section = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '700px',
});

export const VisualizerToolbar = ({
  selectAllPairs,
  selectAllBroadway,
  selectAllSuitedConnectors,
  selectAllSuitedAx,
  selectAllHands,
  resetAllHands,
}) => (
  <Section>
    <Button onClick={selectAllPairs} kind={KIND.secondary} size={SIZE.compact}>
      All Pairs
    </Button>
    <Button
      onClick={selectAllBroadway}
      kind={KIND.secondary}
      size={SIZE.compact}
    >
      All Broadway
    </Button>
    <Button
      onClick={selectAllSuitedConnectors}
      kind={KIND.secondary}
      size={SIZE.compact}
    >
      All Suited Connectors
    </Button>
    <Button
      onClick={selectAllSuitedAx}
      kind={KIND.secondary}
      size={SIZE.compact}
    >
      All Suited AX
    </Button>
    <Button onClick={selectAllHands} kind={KIND.secondary} size={SIZE.compact}>
      All Hands
    </Button>
    <Button onClick={resetAllHands} kind={KIND.secondary} size={SIZE.compact}>
      Reset
    </Button>
  </Section>
);
