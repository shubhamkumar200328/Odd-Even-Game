import React, { useState, useEffect } from 'react';

function WaitFunction() {
  const [oddFunResult, setOddFunResult] = useState(null);
  const [letsPlayClicked, setLetsPlayClicked] = useState(false);

  // Function to simulate an asynchronous operation (OddFun)
  const oddFun = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = Math.floor(Math.random() * 100);
        console.log('OddFun complete');
        resolve(result);
      }, 1000);
    });
  };

  // Function to simulate another operation that depends on OddFun
  const letsPlay = async () => {
    // Call OddFun and wait for the result
    const result = await oddFun();
    setOddFunResult(result);

    // Perform other actions related to letsPlay
    console.log('letsPlay complete');
  };

  // Effect to trigger letsPlay when letsPlayClicked changes
  useEffect(() => {
    if (letsPlayClicked) {
      letsPlay();
      // Reset letsPlayClicked to false after letsPlay is triggered
      setLetsPlayClicked(false);
    }
  }, [letsPlayClicked]);

  return (
    <div>
      <button onClick={letsPlay}>Click me to run letsPlay</button>
      <br />
      <br />
      <button onClick={async () => setLetsPlayClicked(true)}>
        Click me to run OddFun and then letsPlay
      </button>
      <p>
        OddFun Result:{' '}
        {oddFunResult !== null ? oddFunResult : 'Not yet calculated'}
      </p>
    </div>
  );
}

export default WaitFunction;
