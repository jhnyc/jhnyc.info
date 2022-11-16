import React, { useState } from "react";
import "./cmatrix.css";
import { shuffle } from "lodash";

export default function Cmatrix(props) {
  const renderSingleColumn = (delay = 1, nChar = 40) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyz`1234567890-=~!@#$%^&*()_+[]{}|;',./:<>?".split(
        ""
      );
    return (
      <div className="randomtext">
        {shuffle(chars)
          .slice(0, nChar)
          .map((char, ix) => (
            <text
              style={{
                animationDuration: `1s, 1s`,
                animationDelay: `${delay + 0.05 * ix}s, ${
                  delay + 0.05 * ix + 1
                }s`,
                animationName: `react-fade-in,react-fade-out`,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in, ease-out",
              }}
            >
              {char}
            </text>
          ))}
      </div>
    );
  };

  const renderCmatrix = (row, col) => {
    const arr = new Array(col);
    return (
      <>{arr.fill("").map((i) => renderSingleColumn(Math.random(), row))}</>
    );
  };

  return (
    <div className="cmatrix">
      <div className="randomtext">{renderCmatrix(props.row, props.col)}</div>
    </div>
  );
}
