import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./desktopicons.css";

export default function PictureIcon(props) {
  const [currPicture, setCurrPicture] = useState(0);
  const allPictures = ["profile_pic_1.png", "profile_pic_2.png"];
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

  return (
    <div className="picture">
      <div className="icon" onClick={props.onClickHandler}>
        <img
          src={require(`../../../assets/pictures/${allPictures[currPicture]}`)}
        />{" "}
      </div>{" "}
      <p className="file_name"> profile_pic.png </p>{" "}
      <div className="picture_buttons">
        <button id="previous_pic" onClick={prevHandler}>
          <GrPrevious />
        </button>{" "}
        <button id="next_pic" onClick={nextHandler}>
          <GrNext />
        </button>{" "}
      </div>{" "}
    </div>
  );
}
