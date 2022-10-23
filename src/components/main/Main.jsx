import React, { useState } from "react";
import "./main.css";

export default function Main() {
  const [version, setVersion] = useState("v4");

  const changeVersion = (v) => {
    setVersion(v);
  };

  return (
    <div className="main">
      <button className="1" onClick={() => changeVersion("v0")}>
        0
      </button>
      <button className="1" onClick={() => changeVersion("v1")}>
        1
      </button>
      <button className="1" onClick={() => changeVersion("v2")}>
        2
      </button>
      <button className="1" onClick={() => changeVersion("v3")}>
        3
      </button>
      <button className="1" onClick={() => changeVersion("v4")}>
        4
      </button>
      <div className={`block_container`}>
        <div className={`block hat-${version}`}></div>
        <div className={`block face-${version}`}></div>
        <div className={`block neck-${version}`}></div>
        <div className={`block shirt-${version}`}></div>
        <div className={`block macbook-${version}`}></div>
        <div className={`block jeans-${version}`}></div>
        <div className={`block jeans-fold-${version}`}></div>
        <div className={`block leg-${version}`}></div>
        <div className={`block shoe-${version}`}></div>
        <div
          className="outline"
          style={{ opacity: version === "v4" ? "100" : "0" }}
        >
          <div className={`block shoe-outline`}></div>
          <div className={`block shirt-outline1`}></div>
          <div className={`block shirt-outline2`}></div>
          <div className={`block shirt-outline3`}></div>
          <div className={`block shirt-outline4`}></div>
          <div className={`block shirt-outline5`}></div>
          <div className={`block shirt-outline6`}></div>

          <div className={`block leg-outline1`}></div>
          <div className={`block leg-outline2`}></div>
          <div className={`block jeans-outline1`}></div>
          <div className={`block jeans-outline2`}></div>
          <div className={`block hat-outline1`}></div>
          <div className={`block hat-outline2`}></div>
          <div className={`block hat-outline3`}></div>
          <div className={`block hat-outline4`}></div>
          <div className={`block shoe-outline1`}></div>
          <div className={`block shoe-outline2`}></div>
          <div className={`block shoe-outline3`}></div>
          <div className={`block shoe-outline4`}></div>
          <div className={`block shoe-outline5`}></div>
          <div className={`block hat-1`}></div>
          <div className={`block hat-2`}></div>
          <div className={`block hat-3`}></div>
          <div className={`block hair-1`}></div>
          <div className={`block hair-2`}></div>
        </div>
        <div
          className="arm"
          style={{ opacity: version === "v4" ? "100" : "0" }}
        >
          <div className={`block shoulder-outline1`}></div>
          <div className={`block shoulder-outline2`}></div>
          <div className={`block shoulder-outline3`}></div>
          <div className={`block shoulder-outline4`}></div>
          <div className={`block shoulder-outline5`}></div>
          <div className={`block hand-1`}></div>
          <div className={`block hand-2`}></div>
          <div className={`block hand-3`}></div>
          <div className={`block hand-4`}></div>
          <div className={`block hand-5`}></div>
          <div className={`block hand-6`}></div>
          <div className={`block hand-fill-1`}></div>
          <div className={`block hand-fill-2`}></div>
          <div className={`block hand-fill-3`}></div>
        </div>
      </div>
    </div>
  );
}
