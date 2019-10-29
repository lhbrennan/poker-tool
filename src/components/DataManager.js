import React, { useState } from 'react';

import {
  hands,
  pairs,
  broadway,
  suitedConnectors,
  defaultHandStatusMap,
} from '../constants/hands';
import { VisualizerGrid } from './VisualizerGrid';
import { VisualizerToolbar } from './VisualizerToolbar';

export const DataManager = () => {
  const [handStatusMap, setHandStatusMap] = useState(defaultHandStatusMap);

  const handleStatusChange = (hand) => {
    const currStatus = handStatusMap[hand];
    const nextStatus =
      currStatus === 'NO' ? 'YES' : currStatus === 'MAYBE' ? 'NO' : 'MAYBE';

    setHandStatusMap({
      ...handStatusMap,
      [hand]: nextStatus,
    });
  };

  const handleSelectAllPairs = () => {
    setHandStatusMap({
      ...handStatusMap,
      ...pairs.reduce((obj, pair) => {
        obj[pair] = 'YES';
        return obj;
      }, {}),
    });
  };

  const handleSelectAllBroadway = () => {
    setHandStatusMap({
      ...handStatusMap,
      ...broadway.reduce((obj, pair) => {
        obj[pair] = 'YES';
        return obj;
      }, {}),
    });
  };

  const handleSelectAllSuitedConnectors = () => {
    setHandStatusMap({
      ...handStatusMap,
      ...suitedConnectors.reduce((obj, suitedConnector) => {
        obj[suitedConnector] = 'YES';
        return obj;
      }, {}),
    });
  };

  const handleSelectAllSuitedAx = () => {
    setHandStatusMap({
      ...handStatusMap,
      ...hands[0].reduce((obj, suitedConnector) => {
        obj[suitedConnector] = 'YES';
        return obj;
      }, {}),
    });
  };

  const handleSelectAllHands = () => {
    setHandStatusMap(
      hands.flat().reduce((obj, hand) => {
        obj[hand] = 'YES';
        return obj;
      }, {})
    );
  };

  return (
    <section>
      <VisualizerGrid
        hands={hands}
        handStatusMap={handStatusMap}
        handleStatusChange={handleStatusChange}
      />
      <VisualizerToolbar
        selectAllPairs={handleSelectAllPairs}
        selectAllBroadway={handleSelectAllBroadway}
        selectAllSuitedConnectors={handleSelectAllSuitedConnectors}
        selectAllSuitedAx={handleSelectAllSuitedAx}
        selectAllHands={handleSelectAllHands}
      />
    </section>
  );
};
