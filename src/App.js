import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { DarkTheme, BaseProvider } from 'baseui';
// import { customTheme } from './theme';

import { DataManager } from './components/DataManager';

const engine = new Styletron();

function App() {
  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={DarkTheme}>
          <DataManager />
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
