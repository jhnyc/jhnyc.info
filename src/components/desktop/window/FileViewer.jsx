import React, { useState } from "react";
import WindowWrapper from "./WindowWrapper";
import FileIcon from "../../../assets/file_icon.svg";
import "./fileviewer.css";

export default function FileViewer(props) {
  const [selectedFile, setSelectedFile] = useState(0);

  const dummy_data = [
    {
      document: "test.txt",
      info: {
        name: "test",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        link: "www.example.com",
      },
    },
    {
      document: "aiojdeaslkdm.txt",
      info: {
        name: "test",
        description: "sadfjsunghruihrojoiepowkdeopk",
        link: "www.example.com",
      },
    },
    {
      document: "addfsgs.txt",
      info: {
        name: "test",
        description: "siduheiojref.",
        link: "www.example.com",
      },
    },
    {
      document: "test.txt",
      info: {
        name: "test",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        link: "www.example.com",
      },
    },
    {
      document: "test.txt",
      info: {
        name: "test",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        link: "www.example.com",
      },
    },
    {
      document: "test.txt",
      info: {
        name: "test",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        link: "www.example.com",
      },
    },
  ];

  const data = props.data ? props.data : dummy_data;

  const selectHandler = (ix) => {
    setSelectedFile(ix);
  };

  const Viewer = () => {
    return (
      <div className="document-viewer">
        <div className="window_sidebar">
          <div className="window_subheader">Documents</div>
          <div className="window_sidebar-file-container">
            {data.map((element, ix) => {
              return (
                <div
                  className="window_sidebar-file"
                  style={
                    selectedFile == ix
                      ? { backgroundColor: "#0b8ce9", color: "#FFF" }
                      : {}
                  }
                  onClick={() => selectHandler(ix)}
                >
                  <img src={FileIcon} alt="File Icon" />
                  {element.document}
                </div>
              );
            })}
          </div>
        </div>
        <div className="window_info">
          <div className="window_subheader">Info</div>
          <div className="window_info-container">
            {Object.entries(data[selectedFile].info).map((element) => {
              if (element[0] == "Image") {
                return (
                  <div className="project_image">
                    {" "}
                    <img
                      src={require(`../../../assets/projects_images/${element[1]}`)}
                    />
                  </div>
                );
              } else {
                return (
                  <p>
                    {element[0]}: {element[1]}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <WindowWrapper
        title={props.title}
        content={Viewer()}
        closeHandler={props.closeHandler}
      />
    </div>
  );
}
