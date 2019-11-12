export const totalPossibleCombos = 1326;

export const HAND_TYPES = {
  PAIR: 'pair',
  SUITED: 'suited',
  UNSUITED: 'unsuited',
};

export const SUITS = {
  h: 'hearts',
  d: 'diamonds',
  c: 'clubs',
  s: 'spades',
};

export const roundToPrecision = (num, precision) => {
  const adjuster = 1 / precision;
  return Math.round(num * adjuster) / adjuster;
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

export const determineHandType = (hand) => {
  if (hand.charAt(0) === hand.charAt(1)) {
    return HAND_TYPES.PAIR;
  }
  if (hand.charAt(2) === 's') {
    return HAND_TYPES.SUITED;
  }
  return HAND_TYPES.UNSUITED;
};

export const getAllPairCombos = (hand) => {
  const rank = hand.charAt(0);
  return [
    [`${rank}h`, `${rank}s`],
    [`${rank}h`, `${rank}c`],
    [`${rank}h`, `${rank}d`],
    [`${rank}s`, `${rank}d`],
    [`${rank}s`, `${rank}c`],
    [`${rank}d`, `${rank}c`],
  ];
};

export const getAllSuitedCombos = (hand) => {
  const [a, b] = hand.split('');
  return Object.keys(SUITS).map((suit) => [`${a}${suit}`, `${b}${suit}`]);
};

export const getAllUnsuitedCombos = (hand) => {
  const [a, b] = hand.split('');

  return [
    [`${a}h`, `${b}s`],
    [`${a}h`, `${b}c`],
    [`${a}h`, `${b}d`],
    [`${a}s`, `${b}d`],
    [`${a}s`, `${b}c`],
    [`${a}d`, `${b}c`],
    [`${a}s`, `${b}h`],
    [`${a}c`, `${b}h`],
    [`${a}d`, `${b}h`],
    [`${a}d`, `${b}s`],
    [`${a}c`, `${b}s`],
    [`${a}c`, `${b}d`],
  ];
};

export const getAllPossibleCombos = (hand) => {
  const handType = determineHandType(hand);

  if (handType === HAND_TYPES.PAIR) {
    return getAllPairCombos(hand);
  } else if (handType === HAND_TYPES.SUITED) {
    return getAllSuitedCombos(hand);
  } else {
    return getAllUnsuitedCombos(hand);
  }
};

export const hasDuplicates = (array) => new Set(array).size !== array.length;
