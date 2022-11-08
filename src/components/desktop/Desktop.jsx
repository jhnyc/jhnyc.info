import React, { useState } from "react";
import Folder from "./folder/Folder";
import File from "./file/File";
import WindowWrapper from "./window/WindowWrapper";
import FileViewer from "./window/FileViewer";
import Picture from "./picture/Picture";
import Window from "./window/Window";
import "./desktop.css";

export default function Desktop() {
  const [readmeIsOpen, setReadmeIsOpen] = useState(false);
  const [projectIsOpen, setProjectIsOpen] = useState(false);
  const [untitledIsOpen, setUntitledIsOpen] = useState(false);
  const [photographyIsOpen, setPhotographyIsOpen] = useState(false);
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
        <p>jhnyc.io:~ admin$ cat readme.txt</p>
        <p>
          ----------------------------about me----------------------------------
        </p>
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
      <Picture zindex={windowZIndex[0]} />
      <Window
        window={"file"}
        icon={"document"}
        title={"readme.txt"}
        zIndex={1}
        content={readmeContent()}
      />
      <Window
        window={"folder"}
        title={"projects"}
        color={"#FFC700"}
        zIndex={1}
      />
      <Window
        window={"folder"}
        title={"untitled folder"}
        color={"#534FF7"}
        zIndex={1}
      />
      <Window
        window={"folder"}
        title={"photography"}
        color={"#0DAB58"}
        zIndex={1}
      />
      <File name={"linkedin"} icon={"internet"} />
      <File name={"github"} icon={"internet"} />
      <File name={"email"} icon={"email"} />
    </div>
  );
}
