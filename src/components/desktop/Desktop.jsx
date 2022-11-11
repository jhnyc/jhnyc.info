import React, { useState } from "react";
import File from "./desktopicons/FileIcon";
import Window from "./window/Window";
import "./desktop.css";
import WordAnimation from "../word_animation/WordAnimation";
import projectsData from "../../assets/documents/projects.json";

export default function Desktop() {
  const [windowZIndex, setWindowZIndex] = useState([0, 0, 0, 0, 0]);

  const OpenHandler = (setStateFunc, index) => {
    setStateFunc(true);
    setWindowZIndex(
      windowZIndex.map((v, ix) =>
        ix == index ? Math.max(...windowZIndex) + 1 : v
      )
    );
  };

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
        <p>From: Hong Kong</p>
        <br />
        <p>Horoscope: I don’t believe in horoscopy.</p>
        <br />
        <p>Current: </p>
        <p>&emsp; - Student @ USF Master of Science in Data Science</p>
        <p>&emsp; - ML Intern @ Atlassian</p>
        <br />
        <p>
          Description: Lorem ipsum, or lipsum as it is sometimes known, is dummy
          text used in laying out print, graphic or web designs. The passage is
          attributed to an unknown typesetter in the 15th century who is thought
          to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
          use in a type specimen book.{" "}
        </p>
      </div>
    );
  };

  return (
    <div className="desktop">
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
  );
}
