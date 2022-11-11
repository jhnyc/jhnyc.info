import React, { useState } from "react";
import Folder from "../folder/Folder";
import FileViewer from "./FileViewer";
import File from "../desktopicons/FileIcon";
import WindowWrapper from "./WindowWrapper";
import PictureIcon from "../desktopicons/PictureIcon";
import PictureViewer from "../picture/PictureViewer";
import TerminalIcon from "../desktopicons/TerminalIcon";
import Terminal from "../terminal/Terminal";

export default function Window(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const [terminalStartUp, setTerminalStartUp] = useState(false);
  const [startDragXY, setStartDragXY] = useState([0, 0]);
  const [translateXY, setTranslateXY] = useState([0, 0]);
  const [prevTranslateXY, setPrevTranslateXY] = useState([0, 0]);

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
    setStartDragXY([e.clientX, e.clientY]);
    setPrevTranslateXY([translateXY[0], translateXY[1]]);
  };

  const DragHandler = (e) => {
    e.preventDefault();
    if (e.clientX != 0 && e.clientY != 0) {
      setTranslateXY([
        prevTranslateXY[0] + e.clientX - startDragXY[0],
        prevTranslateXY[1] + e.clientY - startDragXY[1],
      ]);
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
        return <PictureIcon onClickHandler={OpenHandler} />;
    }
  };

  const renderContent = (props) => {
    switch (props.window) {
      case "folder":
        return (
          <FileViewer
            title={props.title + "/"}
            content={props.content}
            closeHandler={closeHandler}
            data={props.data}
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
            title={props.title}
            closeHandler={closeHandler}
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
