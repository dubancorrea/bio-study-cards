import './App.css';
import { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // New: Start screen state

  
  const [bioCards, setBioCards] = useState([
    { question: "What is the 'Powerhouse' of the cell?", answer: "Mitochondria", difficulty: "medium" },
    { question: "What process do plants use to make food?", answer: "Photosynthesis", difficulty: "easy" },
    { question: "What is the movement of water across a membrane?", answer: "Osmosis", difficulty: "medium" },
    { question: "What is the basic unit of life?", answer: "The Cell", difficulty: "easy" },
    { question: "What organelle stores DNA?", answer: "Nucleus", difficulty: "easy" },
    { question: "What is the jelly-like substance inside a cell?", answer: "Cytoplasm", difficulty: "easy" },
    { question: "Which organelle makes proteins?", answer: "Ribosomes", difficulty: "hard" },
    { question: "What is a change in a DNA sequence called?", answer: "Mutation", difficulty: "medium" },
    { question: "What are organisms with a nucleus called?", answer: "Eukaryotes", difficulty: "hard" },
    { question: "What is the primary source of energy for Earth?", answer: "The Sun", difficulty: "easy" }
  ]);

  // Shuffle Logic for the cards to show them randomly :))

  const shuffleCards = () => {
    const shuffled = [...bioCards].sort(() => Math.random() - 0.5);
    setBioCards(shuffled);
    setIndex(0);
    setIsFlipped(false);
  };
  // Show previous or next card

  const nextCard = () => {
    setIsFlipped(false);
    setIndex((index + 1) % bioCards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setIndex((index - 1 + bioCards.length) % bioCards.length);
  };

  // 1. Start Screen View
  if (!hasStarted) {
    return (
      <div className="App">
        <div className="header">
          <h1>Bio Master 🧬</h1>
          <p>Ready to master Biology? Test your knowledge with 10 essential cards.</p>
          <button className="nav-btn start-btn" onClick={() => setHasStarted(true)}>Start Session</button>
        </div>
      </div>
    );
  }

  // 2. Main Flashcard View
  return (
    <div className="App">
      <div className="header">
        <h1>Bio Master 🧬</h1>
        <p>Click the card to reveal the answer!</p>
        <h4>Card {index + 1} of {bioCards.length}</h4>
      </div>

      <div className="container">
        {/* We add the difficulty as a class name here */}
        <div className={`card ${isFlipped ? 'flipped' : ''} ${bioCards[index].difficulty}`} onClick={() => setIsFlipped(!isFlipped)}>
          <div className="card-inner">
            <div className="card-front">
              <p>{bioCards[index].question}</p>
            </div>
            <div className="card-back">
              <p>{bioCards[index].answer}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation">
        <button className="nav-btn" onClick={prevCard}>Back</button>
        <button className="nav-btn shuffle" onClick={shuffleCards}>Shuffle 🔀</button>
        <button className="nav-btn" onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;