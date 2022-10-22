import React, { useState } from "react";
import "./main.css";

export default function Main() {
  const [active, setActive] = useState(false);
  const [version, setVersion] = useState("v4");
  const activate = () => {
    setActive(!active);
  };

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
        <div
          className={
            active ? `block hat-${version} active` : `block hat-${version}`
          }
        ></div>
        <div
          className={
            active ? `block face-${version} active` : `block face-${version}`
          }
        ></div>
        <div
          className={
            active ? `block neck-${version} active` : `block neck-${version}`
          }
        ></div>
        <div
          className={
            active ? `block shirt-${version} active` : `block shirt-${version}`
          }
          onClick={activate}
        ></div>
        <div
          className={
            active
              ? `block macbook-${version} active`
              : `block macbook-${version}`
          }
        ></div>
        <div
          className={
            active ? `block jeans-${version} active` : `block jeans-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block jeans-fold-${version} active`
              : `block jeans-fold-${version}`
          }
        ></div>
        <div
          className={
            active ? `block leg-${version} active` : `block leg-${version}`
          }
        ></div>
        <div
          className={
            active ? `block shoe-${version} active` : `block shoe-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shoe-outline-${version} active`
              : `block shoe-outline-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shirt-outline1-${version} active`
              : `block shirt-outline1-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shirt-outline2-${version} active`
              : `block shirt-outline2-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shirt-outline3-${version} active`
              : `block shirt-outline3-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shirt-outline4-${version} active`
              : `block shirt-outline4-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shirt-outline5-${version} active`
              : `block shirt-outline5-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shoulder-outline1-${version} active`
              : `block shoulder-outline1-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shoulder-outline2-${version} active`
              : `block shoulder-outline2-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shoulder-outline3-${version} active`
              : `block shoulder-outline3-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shoulder-outline4-${version} active`
              : `block shoulder-outline4-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block shoulder-outline5-${version} active`
              : `block shoulder-outline5-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block leg-outline1-${version} active`
              : `block leg-outline1-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block leg-outline2-${version} active`
              : `block leg-outline2-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block jeans-outline1-${version} active`
              : `block jeans-outline1-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block jeans-outline2-${version} active`
              : `block jeans-outline2-${version}`
          }
        ></div>
      </div>
    </div>
  );
}
