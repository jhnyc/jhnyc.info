import React from "react";
import "./wordanimation.css";

export default function WordAnimation() {
  const singleWord = (color, id) => {
    return (
      <>
        <div className="name_bottom" id={`${id}`}>
          jhnyc.io
        </div>
        <div className="name" id={`${id}`} style={{ color: `${color}` }}>
          jhnyc.io
        </div>
      </>
    );
  };

  return (
    <div className="name_animation_wrapper">
      {singleWord("#534FF7", "f")}
      {singleWord("#FFC700", "e")}
      {singleWord("#0DAB58", "d")}
      {singleWord("#2C92F0", "c")}
      {singleWord("#D2197D", "b")}
      {singleWord("white", "a")}
    </div>
  );
}
