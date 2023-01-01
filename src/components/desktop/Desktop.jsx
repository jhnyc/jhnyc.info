import React, { useState, useEffect } from "react";
import File from "./desktopicons/FileIcon";
import Window from "./window/Window";
import "./desktop.css";
import WordAnimation from "../word_animation/WordAnimation";
import { GrNext } from "react-icons/gr";

export default function Desktop() {
  const [color, setColor] = useState(0);
  const [animate, setAnimate] = useState(0);
  const [foldersData, setFoldersData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [readme, setReadme] = React.useState("");
  const [readmeLoading, setReadmeLoading] = React.useState(true);
  const [readMeError, setReadmeError] = React.useState(null);

  // fetch readme content
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.npoint.io/06e31b267b975ffe0133`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setReadme(actualData.readme);
        setReadmeError(null);
      } catch (err) {
        setReadmeError(err.message);
        setReadme(null);
      } finally {
        setReadmeLoading(false);
      }
    };
    getData();
  }, []);

  // fetch folders & content
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

  const readmeContent = () => {
    return (
      <div style={{ padding: "1rem" }}>
        <p style={{ whiteSpace: "pre-wrap" }}>{readme}</p>
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
        <File
          name={"linkedin"}
          icon={"internet"}
          link={"https://www.linkedin.com/in/johnny-chau/"}
        />
        <File
          name={"github"}
          icon={"internet"}
          link={"https://github.com/jhnyc"}
        />
        <File name={"email"} icon={"email"} link={"mailto:jhnyckc@gmail.com"} />
        <button id="changeBg" onClick={colorHandler}>
          <GrNext size={35} />
        </button>
        <WordAnimation />
      </div>
    </div>
  );
}
