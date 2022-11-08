import React from "react";
import "./wordanimation.css";

export default function WordAnimation() {
  const singleWord = (color, id) => {
    return (
      <>
        <div className="name_bottom" id={`${id}`}>
          jhnyc.io
        </div>
        <div
          className={`name ${id}`}
          id={`${id}`}
          style={{ color: `${color}` }}
        >
          {/* jhnyc.io */}
          <text id="j">j</text>
          <text id="h">h</text>
          <text id="n">n</text>
          <text id="y">y</text>
          <text id="c">c</text>
          <text id="d">.</text>
          <text id="i">i</text>
          <text id="o">o</text>
        </div>
      </>
    );
  };

  return (
    <div className="name_animation_wrapper">
      {singleWord("#534FF7", "sixth")}
      {singleWord("#FFC700", "fifth")}
      {singleWord("#0DAB58", "forth")}
      {singleWord("#2C92F0", "third")}
      {singleWord("#D2197D", "second")}
      {singleWord("#84C3F2", "first")}
    </div>
  );
}
