// prettier-ignore
export const hands = [
  'AA', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s','A4s', 'A3s', 'A2s',
  'AK', 'KK', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s','K4s', 'K3s', 'K2s',
  'AQ', 'KQ','QQ', 'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s','Q4s', 'Q3s', 'Q2s',
  'AJ', 'KJ','QJ', 'JJ', 'JTs', 'J9s', 'J8s', 'J7s', 'J6s', 'J5s','J4s', 'J3s', 'J2s',
  'AT', 'KT','QT', 'JT', 'TT', 'T9s', 'T8s', 'T7s', 'T6s', 'T5s','T4s', 'T3s', 'T2s',
  'A9', 'K9','Q9', 'J9', 'T9', '99', '98s', '97s', '96s', '95s','94s', '93s', '92s',
  'A8', 'K8','Q8', 'J8', 'T8', '98', '88', '87s', '86s', '85s','84s', '83s', '82s',
  'A7', 'K7','Q7', 'J7', 'T7', '97', '87', '77', '76s', '75s','74s', '73s', '72s',
  'A6', 'K6','Q6', 'J6', 'T6', '96', '86', '76', '66', '65s','64s', '63s', '62s',
  'A5', 'K5','Q5', 'J5', 'T5', '95', '85', '75', '65', '55','54s', '53s', '52s',
  'A4', 'K4','Q4', 'J4', 'T4', '94', '84', '74', '64', '54','44', '43s', '42s',
  'A3', 'K3','Q3', 'J3', 'T3', '93', '83', '73', '63', '53','43', '33', '32s',
  'A2', 'K2','Q2', 'J2', 'T2', '92', '82', '72', '62', '52','42', '32', '22',
];

export const pairs = [
  'AA',
  'KK',
  'QQ',
  'JJ',
  'TT',
  99,
  88,
  77,
  66,
  55,
  44,
  33,
  22,
];

export const suitedConnectors = [
  'AKs',
  'KQs',
  'QJs',
  'JTs',
  'T9s',
  '98s',
  '87s',
  '76s',
  '65s',
  '54s',
  '43s',
  '32s',
];

export const broadway = [
  'AA',
  'AKs',
  'AQs',
  'AJs',
  'ATs',
  'AK',
  'KK',
  'KQs',
  'KJs',
  'KTs',
  'AQ',
  'KQ',
  'QQ',
  'QJs',
  'QTs',
  'AJ',
  'KJ',
  'QJ',
  'JJ',
  'JTs',
  'AT',
  'KT',
  'QT',
  'JT',
  'TT',
];

export const defaultHandStatusMap = {
  AA: 'NO',
  AKs: 'NO',
  AQs: 'NO',
  AJs: 'NO',
  ATs: 'NO',
  A9s: 'NO',
  A8s: 'NO',
  A7s: 'NO',
  A6s: 'NO',
  A5s: 'NO',
  A4s: 'NO',
  A3s: 'NO',
  A2s: 'NO',
  AK: 'NO',
  KK: 'NO',
  KQs: 'NO',
  KJs: 'NO',
  KTs: 'NO',
  K9s: 'NO',
  K8s: 'NO',
  K7s: 'NO',
  K6s: 'NO',
  K5s: 'NO',
  K4s: 'NO',
  K3s: 'NO',
  K2s: 'NO',
  AQ: 'NO',
  KQ: 'NO',
  QQ: 'NO',
  QJs: 'NO',
  QTs: 'NO',
  Q9s: 'NO',
  Q8s: 'NO',
  Q7s: 'NO',
  Q6s: 'NO',
  Q5s: 'NO',
  Q4s: 'NO',
  Q3s: 'NO',
  Q2s: 'NO',
  AJ: 'NO',
  KJ: 'NO',
  QJ: 'NO',
  JJ: 'NO',
  JTs: 'NO',
  J9s: 'NO',
  J8s: 'NO',
  J7s: 'NO',
  J6s: 'NO',
  J5s: 'NO',
  J4s: 'NO',
  J3s: 'NO',
  J2s: 'NO',
  AT: 'NO',
  KT: 'NO',
  QT: 'NO',
  JT: 'NO',
  TT: 'NO',
  T9s: 'NO',
  T8s: 'NO',
  T7s: 'NO',
  T6s: 'NO',
  T5s: 'NO',
  T4s: 'NO',
  T3s: 'NO',
  T2s: 'NO',
  A9: 'NO',
  K9: 'NO',
  Q9: 'NO',
  J9: 'NO',
  T9: 'NO',
  '99': 'NO',
  '98s': 'NO',
  '97s': 'NO',
  '96s': 'NO',
  '95s': 'NO',
  '94s': 'NO',
  '93s': 'NO',
  '92s': 'NO',
  A8: 'NO',
  K8: 'NO',
  Q8: 'NO',
  J8: 'NO',
  T8: 'NO',
  '98': 'NO',
  '88': 'NO',
  '87s': 'NO',
  '86s': 'NO',
  '85s': 'NO',
  '84s': 'NO',
  '83s': 'NO',
  '82s': 'NO',
  A7: 'NO',
  K7: 'NO',
  Q7: 'NO',
  J7: 'NO',
  T7: 'NO',
  '97': 'NO',
  '87': 'NO',
  '77': 'NO',
  '76s': 'NO',
  '75s': 'NO',
  '74s': 'NO',
  '73s': 'NO',
  '72s': 'NO',
  A6: 'NO',
  K6: 'NO',
  Q6: 'NO',
  J6: 'NO',
  T6: 'NO',
  '96': 'NO',
  '86': 'NO',
  '76': 'NO',
  '66': 'NO',
  '65s': 'NO',
  '64s': 'NO',
  '63s': 'NO',
  '62s': 'NO',
  A5: 'NO',
  K5: 'NO',
  Q5: 'NO',
  J5: 'NO',
  T5: 'NO',
  '95': 'NO',
  '85': 'NO',
  '75': 'NO',
  '65': 'NO',
  '55': 'NO',
  '54s': 'NO',
  '53s': 'NO',
  '52s': 'NO',
  A4: 'NO',
  K4: 'NO',
  Q4: 'NO',
  J4: 'NO',
  T4: 'NO',
  '94': 'NO',
  '84': 'NO',
  '74': 'NO',
  '64': 'NO',
  '54': 'NO',
  '44': 'NO',
  '43s': 'NO',
  '42s': 'NO',
  A3: 'NO',
  K3: 'NO',
  Q3: 'NO',
  J3: 'NO',
  T3: 'NO',
  '93': 'NO',
  '83': 'NO',
  '73': 'NO',
  '63': 'NO',
  '53': 'NO',
  '43': 'NO',
  '33': 'NO',
  '32s': 'NO',
  A2: 'NO',
  K2: 'NO',
  Q2: 'NO',
  J2: 'NO',
  T2: 'NO',
  '92': 'NO',
  '82': 'NO',
  '72': 'NO',
  '62': 'NO',
  '52': 'NO',
  '42': 'NO',
  '32': 'NO',
  '22': 'NO',
};
