import { useState } from 'react';

function OddEvenGame() {
  const [gNo, setGNo] = useState('');
  const [userInput, setUserInput] = useState('');
  const [showGNo, setShowGNo] = useState(0);
  const [message, setMessage] = useState('');
  const [chooseOptE, setChooseOptE] = useState('');
  const [chooseOptO, setChooseOptO] = useState('');
  const [addUserGener, setAddUserGener] = useState(0);

  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const generateNumber = () => {
    setGNo(generateRandomNumber(0, 100));
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    setMessage('');
  };

  const handleOddChoice = () => {
    handleChoice('odd');
  };

  const handleEvenChoice = () => {
    handleChoice('even');
  };

  const handleChoice = (choice) => {
    if (userInput === '' || gNo === '') {
      setMessage(
        "Please Generate Opponent's Number and Enter your lucky number."
      );
      return;
    }

    const total = parseInt(gNo, 10) + parseInt(userInput, 10);
    setAddUserGener(total);
    setShowGNo(gNo);

    if (choice === 'odd') {
      setChooseOptO('✔');
      setChooseOptE('');
      if (total % 2 === 0) {
        setMessage("Oops, it's Even. You lose!");
      } else {
        setMessage('Hooray, You won!');
      }
    } else {
      setChooseOptE('✔');
      setChooseOptO('');
      if (total % 2 === 0) {
        setMessage('Hooray, You won!');
      } else {
        setMessage("Oops, it's Odd. You lose!");
      }
    }
  };

  const handleRestart = () => {
    setGNo('');
    setUserInput('');
    setShowGNo(0);
    setMessage('');
    setChooseOptE('');
    setChooseOptO('');
    setAddUserGener(0);
  };

  return (
    <div className="outerContainer">
      <div className="container">
      <h1 className="text-3xl mb-4">Odd Even Game!</h1>
      <button onClick={generateNumber} class="super-button">
        <span>Generate Opponent Number</span>
      </button>
      <br />
      <label htmlFor="userInput" className="labl text-2xl m-3">
        Enter Your Number:
      </label>
      <input
        type="number"
        id="userInput"
        value={userInput}
        onChange={handleInputChange}
      />
      <br />
      <div className="btndiv text-2xl">
        <h2>Choose your option and Let's Play!</h2>
        <button className="btn" onClick={handleOddChoice}>
          Odd btn: {chooseOptO}
        </button>
        <button className="btn" onClick={handleEvenChoice}>
          Even btn: {chooseOptE}
        </button>
      </div>
      <p>{message}</p>
      <p>
        Your Number: {userInput} Generated Number: {showGNo}
      </p>
      <p>Result: {addUserGener}</p>

      <button className="btn mt-4" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
    </div>
  );
}

export default OddEvenGame;
