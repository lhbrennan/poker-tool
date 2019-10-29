import React from 'react';
import { Button, KIND } from 'baseui/button';
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
}) => (
  <Section>
    <Button onClick={selectAllPairs} kind={KIND.secondary}>
      All Pairs
    </Button>
    <Button onClick={selectAllBroadway} kind={KIND.secondary}>
      All Broadway
    </Button>
    <Button onClick={selectAllSuitedConnectors} kind={KIND.secondary}>
      All Suited Connectors
    </Button>
    <Button onClick={selectAllSuitedAx} kind={KIND.secondary}>
      All Suited AX
    </Button>
    <Button onClick={selectAllHands} kind={KIND.secondary}>
      All Hands
    </Button>
  </Section>
);
