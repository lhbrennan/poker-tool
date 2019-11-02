import React from 'react';
import { LightTheme } from 'baseui';

const Header = (props: PropsT) => (
  <section
    style={{
      height: '30px',
      marginBottom: '20px',
      backgroundColor: LightTheme.colors.mono500,
    }}
  ></section>
);

export { Header };
