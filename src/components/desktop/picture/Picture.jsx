import React, { useState } from "react";
import Window from "../window/WindowWrapper";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./picture.css";

export default function Picture(props) {
  const [pictureIsOpen, setPictureIsOpen] = useState(false);
  const [currPicture, setCurrPicture] = useState(0);

  const allPictures = ["1.png", "2.png"];

  const OpenHandler = () => {
    setPictureIsOpen(true);
  };

  const prevHandler = () => {
    currPicture == 0
      ? setCurrPicture(allPictures.length - 1)
      : setCurrPicture(currPicture - 1);
  };
  const nextHandler = () => {
    currPicture == allPictures.length - 1
      ? setCurrPicture(0)
      : setCurrPicture(currPicture + 1);
  };

  const pictureContent = () => {
    return (
      <>
        <img
          src={require(`../../../assets/pictures/${allPictures[currPicture]}`)}
        />
        <button id="previous_pic" onClick={prevHandler}>
          <GrPrevious />
        </button>
        <button id="next_pic" onClick={nextHandler}>
          <GrNext />
        </button>
      </>
    );
  };

  return (
    <>
      <div className="picture">
        <div className="icon" onClick={OpenHandler}>
          <img
            src={require(`../../../assets/pictures/${allPictures[currPicture]}`)}
          />
        </div>
        <p className="file_name">profile_pic.png</p>
        <div className="picture_buttons">
          <button id="previous_pic" onClick={prevHandler}>
            <GrPrevious />
          </button>
          <button id="next_pic" onClick={nextHandler}>
            <GrNext />
          </button>
        </div>
      </div>
      <div
        className="pic window_container"
        style={{
          visibility: pictureIsOpen ? "visible" : "hidden",
          zIndex: props.zindex,
        }}
      >
        {" "}
        <Window title={"profile_pic.png"} content={pictureContent()} />
      </div>
    </>
  );
}
