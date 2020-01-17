import React from 'react';
import './App.css';

import { useAPI } from './hooks/useAPI';
import Display from './components/Display';
import PlayerHeader from './components/playerHeader';

function App() {
  const [data] = useAPI();
  return (
    <div className="App">
      <PlayerHeader />
      <Display data={data} />
    </div>
  );
}

export default App;
