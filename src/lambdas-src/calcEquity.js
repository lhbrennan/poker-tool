const PokerEvaluator = require('poker-evaluator');
const cards = require('../constants/cards').cards;

function calcEquityByMonteCarloSimulation(
  hand, // AhJc
  range, // [[As,9h], [Kc, Ks]...]
  board, // [2d, 9d, 4s],
  numTrials // 5000
) {
  let wins = 0;

  for (let i = 0; i < numTrials; i++) {
    const completeBoard = generateRandomBoard(board, hand);
    const equity = calcEquityOnCompleteBoard(hand, range, completeBoard);
    wins += equity;
  }

  return wins / numTrials;
}

function generateRandomBoard(initialBoard, deadCards) {
  const finalBoard = [...initialBoard];

  const availableCards = [...cards].filter(
    (card) => ![...initialBoard, ...deadCards].includes(card)
  );

  for (let i = initialBoard.length; i < 5; i++) {
    const selectedCardIdx = pickRandomArrayElement(availableCards);
    const selectedCard = availableCards.splice(selectedCardIdx, 1)[0];
    finalBoard.push(selectedCard);
  }

  return finalBoard;
}

function calcEquityOnCompleteBoard(hand, range, board) {
  let wins = 0;
  let ties = 0;

  range.forEach((villianHand) => {
    const outcome = determineIfHeroWins(
      [...hand, ...board],
      [...villianHand, ...board]
    );
    if (outcome === 'win') {
      wins++;
    } else if (outcome === 'tie') {
      ties++;
    }
  });

  return wins / (range.length - ties);
}

function determineIfHeroWins(heroHand, villianHand) {
  const evalHand1 = PokerEvaluator.evalHand(heroHand);
  const evalHand2 = PokerEvaluator.evalHand(villianHand);

  if (evalHand1.handType > evalHand2.handType) {
    return 'win';
  }
  if (evalHand1.handType < evalHand2.handType) {
    return 'lose';
  }
  if (evalHand1.handRank > evalHand2.handRank) {
    return 'win';
  }
  if (evalHand1.handRank < evalHand2.handRank) {
    return 'lose';
  }

  return 'tie';
}

function pickRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//----- For Netlify Serverless ----

// available from '/.netlify/functions/calcEquity'
function handler(event, context, callback) {
  // const { heroHand, villianRange, board, numTrials } = event.body;
  // const equity = calcEquityByMonteCarloSimulation(
  //   heroHand,
  //   villianRange,
  //   board,
  //   numTrials
  // );
  // callback(null, { statusCode: 200, body: `"${equity}"` });
  callback(null, { statusCode: 200, body: 'Hello World' });
}

module.exports = {
  calcEquityByMonteCarloSimulation,
  generateRandomBoard,
  calcEquityOnCompleteBoard,
  determineIfHeroWins,
  pickRandomArrayElement,
  handler,
};
