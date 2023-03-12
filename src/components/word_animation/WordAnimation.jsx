import React, { useState } from "react";
import "./wordanimation.css";

export default function WordAnimation() {
  const [skipAnimation, setSkipAnimation] = useState("");

  const skipAnimationHandler = () => {
    setSkipAnimation("skip");
  };

  const singleWord = (color, id) => {
    return (
      <>
        <div className="name_bottom" id={`${id}`}>
          jhnyc.info
        </div>
        <div
          className={`name ${id}`}
          id={`${id}`}
          style={{ color: `${color}` }}
        >
          <text id="j">j</text>
          <text id="h">h</text>
          <text id="n">n</text>
          <text id="y">y</text>
          <text id="c">c</text>
          <text id="d">.</text>
          <text id="i">i</text>
          <text id="o">n</text>
          <text id="o">f</text>
          <text id="o">o</text>
        </div>
      </>
    );
  };

  return (
    <div className={`name_animation_wrapper ${skipAnimation}`}>
      <div className="backdrop b3"></div>
      <div className="backdrop b2"></div>
      <div className="backdrop b1"></div>
      {singleWord("#534FF7", "sixth")}
      {singleWord("#FFC700", "fifth")}
      {singleWord("#0DAB58", "forth")}
      {singleWord("#2C92F0", "third")}
      {singleWord("#D2197D", "second")}
      {singleWord("#534FF7", "first")}
      <button id="skip_animation" onClick={skipAnimationHandler}>
        skip fancy animation >>>
      </button>
    </div>
  );
}
