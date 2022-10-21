import React, { useState } from "react";
import "./main.css";

export default function Main() {
  const [active, setActive] = useState(false);
  const activate = () => {
    setActive(!active);
  };
  return (
    <div className="main">
      <div className={active ? "block hat active" : "block hat"}></div>
      <div className={active ? "block face active" : "block face"}></div>
      <div className={active ? "block neck active" : "block neck"}></div>
      <div
        className={active ? "block shirt active" : "block shirt"}
        onClick={activate}
      ></div>
      <div className={active ? "block macbook active" : "block macbook"}></div>
      <div className={active ? "block jeans active" : "block jeans"}></div>
      <div
        className={active ? "block jeans-fold active" : "block jeans-fold"}
      ></div>
      <div className={active ? "block leg active" : "block leg"}></div>
      <div className={active ? "block shoe active" : "block shoe"}></div>
      <div
        className={active ? "block shoe-outline active" : "block shoe-outline"}
      ></div>
    </div>
  );
}
