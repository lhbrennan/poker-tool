import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import { DataManager } from './components/DataManager';

const engine = new Styletron();

function App() {
  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          {/* <header className="App-header">This is the Header</header> */}
          <DataManager />
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
