import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { pokerTheme } from './theme';

import { DataManager } from './components/DataManager';

const engine = new Styletron();

function App() {
  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={pokerTheme}>
          <DataManager />
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
