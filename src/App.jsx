import { useState } from 'react';
import './App.css';
import WaitFunction from './components/WaitFunction';
import OddEvenGame from './components/OddEvenGame';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Hi, whats up!</h1> */}
      {/* <WaitFunction /> */}
      <OddEvenGame />
    </>
  );
}

export default App;
