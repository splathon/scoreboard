import React from 'react';

const App = ({ matching, results }) => (
  <div>
    {JSON.stringify(matching)}
    {JSON.stringify(results)}
    <img src="./images/stages/manta.png" />
  </div>
);

export default App;
