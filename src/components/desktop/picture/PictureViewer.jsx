import React, { useState } from "react";
import WindowWrapper from "../window/WindowWrapper";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./picture.css";

export default function PictureViewer(props) {
  const [currPicture, setCurrPicture] = useState(0);
  const allPictures = ["profile_pic_1.png", "profile_pic_2.png", "name.png"];
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
        <div className="picture_container">
          <img
            src={require(`../../../assets/pictures/${allPictures[currPicture]}`)}
          />
        </div>
        <div className="button_container">
          <button id="previous" onClick={prevHandler}>
            <GrPrevious size={22} />
          </button>
          <button id="next" onClick={nextHandler}>
            <GrNext size={22} />
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      <WindowWrapper
        title={`${allPictures[currPicture]}`}
        content={pictureContent()}
        closeHandler={props.closeHandler}
      />
    </div>
  );
}
