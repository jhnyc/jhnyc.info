import React, { useState } from "react";
import Folder from "../folder/Folder";
import FileViewer from "./FileViewer";
import File from "../file/File";
import WindowWrapper from "./WindowWrapper";

export default function Window(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  const OpenHandler = () => {
    var currMaxZIndex = Math.max(
      ...[...document.querySelectorAll(".window_container")].map(
        (e) => e.style.zIndex
      )
    );
    setZIndex(currMaxZIndex + 1);
    setIsOpen(true);
  };

  return (
    <>
      {" "}
      {props.window == "folder" ? (
        <Folder
          name={props.title}
          color={props.color}
          onClickHandler={OpenHandler}
        />
      ) : (
        <File
          name={props.title}
          icon={props.icon}
          onClickHandler={OpenHandler}
        />
      )}{" "}
      <div
        className="window_container"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          zIndex: zIndex,
        }}
      >
        {props.window == "folder" ? (
          <FileViewer title={props.title} content={props.content} />
        ) : (
          <WindowWrapper title={props.title} content={props.content} />
        )}{" "}
      </div>{" "}
    </>
  );
}
