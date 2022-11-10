import React, { useState } from "react";
import WindowWrapper from "../window/WindowWrapper";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function PictureViewer(props) {
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
    <div>
      <WindowWrapper
        title={`${allPictures[currPicture]}`}
        content={pictureContent()}
        closeHandler={props.closeHandler}
      />
    </div>
  );
}
