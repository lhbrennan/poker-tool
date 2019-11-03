import React from 'react';
import { LightTheme } from 'baseui';

const Header = (props: PropsT) => (
  <section
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '24px',
      marginBottom: '10px',
      backgroundColor: LightTheme.colors.primary,
      color: LightTheme.colors.mono100,
    }}
  >
    Poker Hand Range Equity Calculator
  </section>
);

export { Header };
