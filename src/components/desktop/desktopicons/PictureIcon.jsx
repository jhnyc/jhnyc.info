import React, { useState } from "react";
import "./desktopicons.css";

export default function PictureIcon(props) {
  const [currPicture, setCurrPicture] = useState(0);
  const allPictures = ["profile_pic_1.png", "profile_pic_2.png"];

  return (
    <div className="picture">
      <div className="icon" onClick={props.onClickHandler}>
        <img
          src={require(`../../../assets/pictures/${allPictures[currPicture]}`)}
        />{" "}
      </div>{" "}
      <p className="file_name"> profile_pic.png </p>{" "}
    </div>
  );
}
