import React, { useState } from "react";
import Window from "../window/Window";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./picture.css";

export default function Picture() {
  const [pictureIsOpen, setPictureIsOpen] = useState(false);

  const OpenHandler = () => {
    setPictureIsOpen(true);
  };

  const pictureContent = () => {
    return (
      <>
        <img src={require("../../../assets/pictures/1.png")} />
        <button id="previous_pic">
          <GrPrevious />
        </button>
        <button id="next_pic">
          <GrNext />
        </button>
      </>
    );
  };

  return (
    <>
      <div className="picture">
        <div className="icon" onClick={OpenHandler}>
          <img src={require("../../../assets/pictures/1.png")} />
        </div>
        <p className="file_name">profile_pic.png</p>
        <div className="picture_buttons">
          <button id="previous_pic">
            <GrPrevious />
          </button>
          <button id="next_pic">
            <GrNext />
          </button>
        </div>
      </div>
      <div
        className="readme window_container"
        style={{ visibility: pictureIsOpen ? "visible" : "hidden" }}
      >
        {" "}
        <Window title={"profile_pic.png"} content={pictureContent()} />
      </div>
    </>
  );
}
