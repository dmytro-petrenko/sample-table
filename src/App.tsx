import React, { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';

export type TStatus = {
  complete: boolean;
  incomplete: boolean;
  error: boolean;
};

function App() {
  const [statusComplete, setStatusComplete] = useState(true);
  const [statusIncomplete, setStatusIncomplete] = useState(false);
  const [statusError, setStatusError] = useState(false);

  return (
    <div className="container">
      <Header
        statusComplete={statusComplete}
        statusIncomplete={statusIncomplete}
        statusError={statusError}
        statusCompleteHandler={(val) => setStatusComplete(val)}
        statusIncompleteHandler={(val) => setStatusIncomplete(val)}
        statusErrorHandler={(val) => setStatusError(val)}
      />
      <Table
        statusComplete={statusComplete}
        statusIncomplete={statusIncomplete}
        statusError={statusError}
      />
    </div>
  );
}

export default App;
