import React from "react";
import "./desktopicons.css";

export default function File(props) {
  return (
    <div className="terminal" onClick={props.onClickHandler}>
      <div className="icon">
        <svg
          width="140"
          height="140"
          viewBox="0 0 238 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="232"
            height="203"
            fill="white"
            stroke="black"
            stroke-width="5"
          />
          <rect
            x="13"
            y="12"
            width="211"
            height="185"
            fill="#272727"
            stroke="black"
            stroke-width="5"
          />
          <rect
            x="13"
            y="12"
            width="211"
            height="185"
            fill="#272727"
            stroke="black"
            stroke-width="5"
          />
          <path
            d="M70.1802 53.1023L38.1632 69.4091V63.0455L62.7228 51.2131L62.524 51.6108V50.6165L62.7228 51.0142L38.1632 39.1818V32.8182L70.1802 49.125V53.1023ZM108.965 71V76.4688H77.1467V71H108.965Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="file_name">{props.name}</p>
    </div>
  );
}
