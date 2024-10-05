import React, { useState } from "react";
import { Card } from "@mui/material";
import "./CardComponent.css"; // CSS animasyonu ve stil için

const CardComponent = ({ frontText, backText, frontImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); // Kartın tıklanmasıyla flip durumunu değiştir
  };

  return (
    <div className={`card-container ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      {/* Ön Yüz - Resim ve Yazı */}
      <div className="card-face card-front">
        <Card sx={{ maxWidth: 345, textAlign: "center", cursor: "pointer", height: '400px', position: 'relative' }}>
          <img src={frontImage} alt="Front" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          
          {/* Resmin önünde duran yazı */}
          <div className="overlay">
            <h5 className="overlay-text">{frontText}</h5>
          </div>
        </Card>
      </div>

      {/* Arka Yüz - Sadece Yazı */}
      <div className="card-face card-back">
        <Card sx={{ maxWidth: 345, textAlign: "center", cursor: "pointer", backgroundColor: "#162e4e", height: '400px' }}>
          <div style={{ padding: '20px' }}>
            <h5 style={{color:"white",}}>{backText}</h5>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;
