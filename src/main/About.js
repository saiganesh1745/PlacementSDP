import React, { useState } from 'react';
// import './FlipCard.css'; // Import CSS file for styling

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div  className="img1"  >
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          {/* Front of the card */}
          <div className="flip-card-front">
            <h2>Our Policies</h2>
            <button onClick={handleFlip} className='button3'>Flip</button>
          </div>
          {/* Back of the card */}
          <div className="flip-card-back">
            <h2>Hello User</h2>
            <p>You Should work hard and motivate your self, acheive it at 100% rate.!!!</p>
            <button onClick={handleFlip} className='button2' >Flip Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
