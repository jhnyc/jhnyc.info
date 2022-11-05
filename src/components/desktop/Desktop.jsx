import React, { useState } from "react";
import Folder from "./folder/Folder";
import File from "./file/File";
import Window from "./window/Window";
import FileViewer from "./window/FileViewer";

export default function Desktop() {
  const [readmeIsOpen, setReadmeIsOpen] = useState(false);
  const [projectIsOpen, setProjectIsOpen] = useState(false);
  const [untitledIsOpen, setUntitledIsOpen] = useState(false);
  const [photographyIsOpen, setPhotographyIsOpen] = useState(false);

  const OpenHandler = (setStateFunc) => {
    setStateFunc(true);
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
      <File
        name={"readme.txt"}
        icon={"document"}
        onClickHandler={() => OpenHandler(setReadmeIsOpen)}
      />
      <div
        className="readme window_container"
        style={{ visibility: readmeIsOpen ? "visible" : "hidden" }}
      >
        {" "}
        <Window title={"readme.txt"} content={readmeContent()} />
      </div>
      <Folder
        name={"projects"}
        color={"#FFC700"}
        onClickHandler={() => OpenHandler(setProjectIsOpen)}
      />
      <div
        className="project window_container"
        style={{ visibility: projectIsOpen ? "visible" : "hidden" }}
      >
        {" "}
        {/* <Window title={"projects/"} content={projectContent()} /> */}
        <FileViewer title={"projects/"} />
      </div>
      <Folder
        name={"untitled folder"}
        color={"#534FF7"}
        onClickHandler={() => OpenHandler(setUntitledIsOpen)}
      />
      <div
        className="untitled window_container"
        style={{ visibility: untitledIsOpen ? "visible" : "hidden" }}
      >
        {" "}
        <Window title={"untitled folder/"} />
      </div>
      <Folder
        name={"photography"}
        color={"#0DAB58"}
        onClickHandler={() => OpenHandler(setPhotographyIsOpen)}
      />
      <div
        className="photogrpahy window_container"
        style={{ visibility: photographyIsOpen ? "visible" : "hidden" }}
      >
        {" "}
        <Window title={"photography/"} />
      </div>
      <File name={"linkedin"} icon={"internet"} />
      <File name={"github"} icon={"internet"} />
      <File name={"email"} icon={"email"} />
    </div>
  );
}
