import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="title">Counter App</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
