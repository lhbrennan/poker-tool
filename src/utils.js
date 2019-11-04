export const totalPossibleCombos = 1326;

export const HAND_TYPES = {
  PAIR: 'pair',
  SUITED: 'suited',
  UNSUITED: 'unsuited',
};

export const calcNumHandCombos = (hand) => {
  const handType = determineHandType(hand);

  if (handType === HAND_TYPES.PAIR) {
    return 6;
  }
  if (handType === HAND_TYPES.SUITED) {
    return 4;
  }
  return 12;
};

/**
 * @param {string} hand
 * @returns {'pair' | 'suited' | 'unsuited'} type of hand
 */
export const determineHandType = (hand) => {
  if (hand.charAt(0) === hand.charAt(1)) {
    return HAND_TYPES.PAIR;
  }
  if (hand.charAt(2) === 's') {
    return HAND_TYPES.SUITED;
  }
  return HAND_TYPES.UNSUITED;
};
