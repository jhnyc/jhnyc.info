import React, { useState } from "react";
import File from "./desktopicons/FileIcon";
import Window from "./window/Window";
import "./desktop.css";
import WordAnimation from "../word_animation/WordAnimation";
import projectsData from "../../assets/documents/projects.json";
import { GrNext } from "react-icons/gr";

export default function Desktop() {
  const [color, setColor] = useState(0);
  const [animate, setAnimate] = useState(0);

  const readmeContent = () => {
    return (
      <div style={{ padding: "1rem" }}>
        {/* <p>
          ----------------------------------------------------------------------
        </p> */}
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_)&nbsp;/_&nbsp;&nbsp;____&nbsp;&nbsp;__&nbsp;&nbsp;_______&nbsp;&nbsp;(_)___&nbsp;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;__&nbsp;\/&nbsp;__&nbsp;\/&nbsp;/&nbsp;/&nbsp;/&nbsp;___/&nbsp;/&nbsp;/&nbsp;__&nbsp;\
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/_/&nbsp;/&nbsp;/___&nbsp;/&nbsp;/&nbsp;/_/&nbsp;/
          <br />
          &nbsp;__/&nbsp;/_/&nbsp;/_/_/&nbsp;/_/\__,&nbsp;/\___(_)_/\____/&nbsp;
          <br />
          /___/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/____/
          <br />
        </p>
        <br />
        <p>--------------------------------------------------------------</p>
        <br />
        <p>Name: Johnny Chau</p>
        <br />
        <p>Location: San Francisco &lt; Hong Kong </p>
        <br />
        <p>Currently: </p>
        <p>&emsp; - Student @ USF MS Data Science</p>
        <p>&emsp; - ML Intern @ Atlassian</p>
        <br />
        <p>Previously: </p>
        <p>&emsp; - BBA Accounting & Finance @ HKU</p>
        <p>&emsp; - Consultant @ EY</p>
        <br />
        <p>
          Description: Data scientist/machine learning engineer by training,
          front end dev by curiosity.
        </p>
        <br />
        <p>
          Tech Stack: As long as the problem at hand is interesting enough, I'll
          find a way to hack things together. But my no.1 go-to is definitely
          Python.
        </p>
      </div>
    );
  };

  const bgColors = [
    "#84C4F2",
    // "#FFC700",
    "#f7d863",
    // "#534FF7",
    "#a5a4e0",
    "#67b88c",
    "#e3b8bf",
    "#97a8c2",
    "#263145",
    "#091B33",
  ];

  const colorHandler = () => {
    console.log((color + 1) % bgColors.length);
    setColor(color + 1);
    setAnimate(1);
  };

  return (
    <div
      className="desktop"
      style={{
        backgroundColor:
          bgColors[(color - 1 >= 0 ? color - 1 : 0) % bgColors.length],
      }}
    >
      <button id="changeBg" style={{ zIndex: "20" }} onClick={colorHandler}>
        <GrNext size={35} />
      </button>
      <div
        className="bg"
        style={{ backgroundColor: bgColors[color % bgColors.length] }}
        onAnimationEnd={() => setAnimate(2)}
        animate={animate}
      >
        {" "}
      </div>
      <div className="desktop_container" style={{ zIndex: "1" }}>
        <Window window={"picture"} />
        <Window
          window={"file"}
          icon={"document"}
          title={"readme.txt"}
          content={readmeContent()}
        />
        <Window
          window={"folder"}
          title={"projects"}
          color={"#FFC700"}
          data={projectsData}
        />
        <Window window={"folder"} title={"untitled folder"} color={"#534FF7"} />
        <Window window={"folder"} title={"photography"} color={"#0DAB58"} />
        <Window window={"terminal"} title={"terminal"} />
        <a href="https://www.linkedin.com/in/johnny-chau/" target="_blank">
          <File name={"linkedin"} icon={"internet"} />
        </a>
        <a href="https://github.com/jhnyc" target="_blank">
          <File name={"github"} icon={"internet"} />
        </a>
        <File name={"email"} icon={"email"} />
        <WordAnimation />
      </div>
    </div>
  );
}
