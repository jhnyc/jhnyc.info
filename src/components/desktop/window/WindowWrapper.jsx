import React, { useState } from "react";
import "./windowwrapper.css";

export default function WindowWrapper(props) {
  return (
    <div className="window">
      <div className="window_header">
        <div
          className="window_header_button close"
          onClick={props.closeHandler}
        >
          {" "}
        </div>{" "}
        <div className="window_header_button"> </div>{" "}
        <div className="window_header_button"> </div>{" "}
        <div className="window_header_title"> {props.title} </div>{" "}
      </div>{" "}
      <div className="window_body"> {props.content} </div>{" "}
    </div>
  );
}
