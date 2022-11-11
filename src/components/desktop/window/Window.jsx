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
  const [terminalStartUp, setTerminalStartUp] = useState(false);
  const [XY, setXY] = useState([0, 0]);
  const [translateXY, setTranslateXY] = useState([0, 0]);

  const OpenHandler = () => {
    var currMaxZIndex = Math.max(
      ...[...document.querySelectorAll(".window_container")].map(
        (e) => e.style.zIndex
      )
    );
    setZIndex(currMaxZIndex + 1);
    setIsOpen(true);
  };

  const TerminalOpenHandler = () => {
    var currMaxZIndex = Math.max(
      ...[...document.querySelectorAll(".window_container")].map(
        (e) => e.style.zIndex
      )
    );
    setZIndex(currMaxZIndex + 1);
    setIsOpen(true);
    setTerminalStartUp(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const DragStartHandler = (e) => {
    var img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer.setDragImage(img, 0, 0);
    setXY([e.clientX, e.clientY]);
  };

  const DragHandler = (e) => {
    e.preventDefault();
    if (e.clientX != 0 && e.clientY != 0) {
      setTranslateXY([e.clientX - XY[0], e.clientY - XY[1]]);
    }
  };

  const bringWindowFront = () => {
    var currMaxZIndex = Math.max(
      ...[...document.querySelectorAll(".window_container")].map(
        (e) => e.style.zIndex
      )
    );
    setZIndex(currMaxZIndex + 1);
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
        return (
          <TerminalIcon
            name={props.title}
            onClickHandler={TerminalOpenHandler}
          />
        );
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
        return (
          <Terminal
            closeHandler={closeHandler}
            title={props.title}
            startUp={terminalStartUp}
          />
        );
      case "picture":
        return <PictureViewer closeHandler={closeHandler} />;
    }
  };
  return (
    <div>
      {renderIcon(props)}
      <div
        className="window_container"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          zIndex: zIndex,
          transform: `translate(${translateXY[0]}px,${translateXY[1]}px)`,
        }}
        onClick={bringWindowFront}
      >
        <div
          className="dragbar"
          draggable
          onDragStart={(e) => DragStartHandler(e)}
          onDrag={(e) => DragHandler(e)}
          OnDropEnd={(e) => e.preventDefault()}
        ></div>
        {renderContent(props)}
      </div>{" "}
    </div>
  );
}
