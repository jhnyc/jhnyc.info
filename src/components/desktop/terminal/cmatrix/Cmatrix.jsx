import React, { useState, useMemo } from "react";
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

  const renderCmatrix = useMemo(() => {
    const arr = new Array(props.col);
    return (
      <>
        {arr.fill("").map((i) => renderSingleColumn(Math.random(), props.row))}
      </>
    );
  }, [props.row, props.col]);

  return (
    <div className="cmatrix">
      <div className="randomtext">{renderCmatrix}</div>
    </div>
  );
}
