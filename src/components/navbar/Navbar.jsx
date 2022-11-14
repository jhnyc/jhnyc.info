import React, { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import "./navbar.css";

export default function Navbar() {
  const [darkmode, setDarkMode] = useState(false);

  const changeMode = () => {
    const style = document.querySelector(":root").style;
    if (darkmode) {
      setDarkMode(!darkmode);
      style.removeProperty("--color-fontcolor");
      style.removeProperty("--color-windowbg");
      style.removeProperty("--color-windowheader");
      style.removeProperty("--color-windowheaderbutton");
      style.removeProperty("--color-sidebaralternate");
      style.removeProperty("--color-navbarfontcolor");
      style.removeProperty("--color-navbarbg");
    } else {
      setDarkMode(true);
      style.setProperty("--color-fontcolor", "white");
      style.setProperty("--color-windowbg", "#1C1C1C");
      style.setProperty("--color-windowheader", "#313539");
      style.setProperty("--color-windowheaderbutton", "#858484");
      style.setProperty("--color-sidebaralternate", "#313539");
      style.setProperty("--color-navbarfontcolor", "white");
      style.setProperty("--color-navbarbg", "#272727");
    }
  };

  return (
    <nav className="navbar">
      <p id="icon">jhnyc.io/</p>
      <button id="nightmode" onClick={changeMode}>
        {darkmode ? (
          <MdOutlineDarkMode size={25} color={"white"} />
        ) : (
          <MdDarkMode size={25} color={"#272727"} />
        )}
      </button>
    </nav>
  );
}
