import React, { useState } from "react";
import Folder from "../folder/Folder";
import FileViewer from "./FileViewer";
import File from "../file/File";
import WindowWrapper from "./WindowWrapper";
import PictureIcon from "../picture/PictureIcon";
import PictureViewer from "../picture/PictureViewer";
import TerminalIcon from "../terminal/TerminalIcon";
import Terminal from "../terminal/Terminal";

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

  const closeHandler = () => {
    setIsOpen(false);
  };

  const renderIcon = (props) => {
    switch (props.window) {
      case "folder":
        return (
          <Folder
            name={props.title}
            color={props.color}
            onClickHandler={OpenHandler}
          />
        );
      case "file":
        return (
          <File
            name={props.title}
            icon={props.icon}
            onClickHandler={OpenHandler}
          />
        );
      case "terminal":
        return <TerminalIcon name={props.title} onClickHandler={OpenHandler} />;
      case "picture":
        return <PictureIcon onClickHandler={OpenHandler} pictures />;
    }
  };

  const renderContent = (props) => {
    switch (props.window) {
      case "folder":
        return (
          <FileViewer
            title={props.title}
            content={props.content}
            closeHandler={closeHandler}
          />
        );
      case "file":
        return (
          <WindowWrapper
            title={props.title}
            content={props.content}
            closeHandler={closeHandler}
          />
        );
      case "terminal":
        return <Terminal closeHandler={closeHandler} title={props.title} />;
      case "picture":
        return <PictureViewer closeHandler={closeHandler} />;
    }
  };

  // !!! TODO: refactor picture component
  // !!! ---------------------------------

  return (
    <div>
      {renderIcon(props)}
      <div
        className="window_container"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          zIndex: zIndex,
        }}
      >
        {renderContent(props)}
      </div>{" "}
    </div>
  );
}
