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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(_)&nbsp;/_&nbsp;&nbsp;____&nbsp;&nbsp;__&nbsp;&nbsp;_______&nbsp;&nbsp;(_)___&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;__&nbsp;\/&nbsp;__&nbsp;\/&nbsp;/&nbsp;/&nbsp;/&nbsp;___/&nbsp;/&nbsp;/&nbsp;__&nbsp;\
          &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/_/&nbsp;/&nbsp;/___&nbsp;/&nbsp;/&nbsp;/_/&nbsp;/
          &nbsp;__/&nbsp;/_/&nbsp;/_/_/&nbsp;/_/\__,&nbsp;/\___(_)_/\____/&nbsp;
          /___/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/____/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <br />
        <p>--------------------------------------------------------------</p>
        <br />
        <p>Name: Johnny Chau</p>
        <br />
        <p>Location: Hong Kong --> San Francisco</p>
        <br />
        <p>Horoscope: I don’t believe in horoscopy.</p>
        <br />
        <p>Current: </p>
        <p>&emsp; - Student @ USF MS Data Science</p>
        <p>&emsp; - ML Intern @ Atlassian</p>
        <br />
        <p>
          Description: Data scientist/machine learning engineer by trade, front
          end dev at heart. I studied accounting for my bachelor's, it's the
          biggest mistake I've made.
        </p>
      </div>
    );
  };

  const bgColors = ["#84C4F2", "#FFC700", "#534FF7", "F5F5F5"];

  const colorHandler = () => {
    setColor(color + 1);
    setAnimate(1);
  };

  return (
    <div
      className="desktop"
      style={{ backgroundColor: bgColors[(color - 1) % bgColors.length] }}
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
        <File name={"linkedin"} icon={"internet"} />
        <File name={"github"} icon={"internet"} />
        <File name={"email"} icon={"email"} />
        <WordAnimation />
      </div>
    </div>
  );
}
