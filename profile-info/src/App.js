import React from 'react';
import ComponentDetail from'./ComponentDetail'

function App() {
  return (
    <div className="App">
    <div className="ui container">
        <h1>Users</h1>
        <ComponentDetail author="raj" />
        <ComponentDetail author="paji" />
        <ComponentDetail author="rahul" />
        <ComponentDetail author="nageshwar" />
    </div>
    
    </div>
  );
}

export default App;
