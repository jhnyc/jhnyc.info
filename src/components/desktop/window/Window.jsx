import React from "react";
import "./window.css";

export default function Window(props) {
  return (
    <div className="window" style={{ zIndex: props.zindex }}>
      <div className="window_header">
        <div className="window_header_button"> </div>{" "}
        <div className="window_header_button"> </div>{" "}
        <div className="window_header_button"> </div>{" "}
        <div className="window_header_title"> {props.title}</div>{" "}
      </div>{" "}
      <div className="window_body">{props.content}</div>{" "}
    </div>
  );
}
