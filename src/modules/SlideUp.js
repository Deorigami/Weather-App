import React, { useState } from "react";
import "./SlideUp.css";

const SlideUp = ({ apiKey, country }) => {
  const [slideUp, setSlideUp] = useState(false);

  const handleClick = (e) => setSlideUp(!slideUp);
  return (
    <div className={slideUp ? "slider slides" : "slider"} onClick={handleClick}>
      <h3>FORECAST</h3>
    </div>
  );
};

export default SlideUp;
