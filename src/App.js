import { Navbar, Desktop } from "./components";
import { useEffect } from "react";
import "./App.css";
import macbook from "./assets/pictures/macbook.png";
import TrackIP from "./components/TrackIP";

function App() {
  useEffect(() => {
    var app = document.querySelector(".App");
    var macbook = document.querySelector("#macbook_screen");
    var screenWidth = app.offsetWidth;
    var screenHeight = app.offsetHeight;
    var macbookHeight = macbook.getBoundingClientRect().height;

    document
      .querySelector(":root")
      .style.setProperty(
        "--scaleX",
        (macbookHeight * 1.238 * 0.79) / screenWidth
      );
    document
      .querySelector(":root")
      .style.setProperty("--scaleY", (macbookHeight * 0.6) / screenHeight);
  }, []);

  return (
    <>
      <TrackIP />
      <div className="App">
        <Navbar />
        <Desktop />
      </div>
      <div className="macbook">
        <img id="macbook_screen" src={macbook} alt="macbook" />
      </div>
    </>
  );
}

export default App;
