import React, { useState, useEffect } from "react";
import File from "./desktopicons/FileIcon";
import Window from "./window/Window";
import "./desktop.css";
import WordAnimation from "../word_animation/WordAnimation";
import { GrNext } from "react-icons/gr";
import readme from "../../assets/documents/readme.txt";

export default function Desktop() {
  const [color, setColor] = useState(0);
  const [animate, setAnimate] = useState(0);
  const [readmeText, setReadmeText] = useState("");
  const [foldersData, setFoldersData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/44e1bf1c2d438b7038ad"
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setFoldersData(actualData);
        console.log(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setFoldersData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    fetch(readme)
      .then((res) => res.text())
      .then((res) => setReadmeText(res));
  }, []);

  const readmeContent = () => {
    return (
      <div style={{ padding: "1rem" }}>
        <p style={{ whiteSpace: "pre-wrap" }}>{readmeText}</p>
      </div>
    );
  };

  const bgColors = [
    "#84C4F2",
    // "#FFC700",
    "#f7d863",
    // "#534FF7",
    "#a5a4e0",
    "#67b88c",
    "#e3b8bf",
    "#97a8c2",
    "#272A36",
    "#091B33",
  ];

  const colorHandler = () => {
    console.log((color + 1) % bgColors.length);
    setColor(color + 1);
    setAnimate(1);
  };

  return (
    <div
      className="desktop"
      style={{
        backgroundColor:
          bgColors[(color - 1 >= 0 ? color - 1 : 0) % bgColors.length],
      }}
    >
      <button id="changeBg" style={{ zIndex: "20" }} onClick={colorHandler}>
        <GrNext size={35} />
      </button>
      <div
        className="bg"
        style={{ backgroundColor: bgColors[color % bgColors.length] }}
        onAnimationEnd={() => setAnimate(2)}
        animate={animate}
      >
        {" "}
      </div>
      <div className="desktop_container" style={{ zIndex: "1" }}>
        <Window window={"picture"} />
        <Window
          window={"file"}
          icon={"document"}
          title={"readme.txt"}
          content={readmeContent()}
        />
        {/* {loop over foldersData to render folders} */}
        {loading
          ? ""
          : foldersData.map((i) => {
              return (
                <Window
                  window={"folder"}
                  title={i.name}
                  color={i.color ? i.color : "#FFC700"}
                  data={i.contents}
                />
              );
            })}
        <Window window={"terminal"} title={"terminal"} />
        <a href="https://www.linkedin.com/in/johnny-chau/" target="_blank">
          <File name={"linkedin"} icon={"internet"} />
        </a>
        <a href="https://github.com/jhnyc" target="_blank">
          <File name={"github"} icon={"internet"} />
        </a>
        <File name={"email"} icon={"email"} />
        <WordAnimation />
      </div>
    </div>
  );
}
