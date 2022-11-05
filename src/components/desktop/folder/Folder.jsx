import React from "react";
import "./folder.css";

export default function Folder(props) {
  return (
    <div className="folder" onClick={props.onClickHandler}>
      <div className="icon">
        <svg
          width="140"
          height="140"
          viewBox="0 0 232 203"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_66_2)">
            <path
              d="M78.1685 36.0404H230V201H2V2H61.8329L76.3389 34.8483L76.8653 36.0404H78.1685Z"
              fill={`${props.color}`}
              stroke="black"
              stroke-width="4"
            />
          </g>
          <defs>
            <clipPath id="clip0_66_2">
              <rect width="232" height="203" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="folder_name">{props.name}</p>
    </div>
  );
}
