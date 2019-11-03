export const totalPossibleCombos = 1326;

export const calcNumHandCombos = (hand) => {
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
