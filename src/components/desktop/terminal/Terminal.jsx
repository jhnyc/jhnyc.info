import React, { useState, useRef, useEffect } from "react";
import WindowWrapper from "../window/WindowWrapper";
import { GrClose } from "react-icons/gr";
import CmdOutput from "./CmdOutput";
import "./terminal.css";
import Cmatrix from "./cmatrix/Cmatrix";

export default function Terminal(props) {
  const [commandHistory, setCommandHistory] = useState([]);
  const [outputHistory, setOutputHistory] = useState([]);
  const [input, setInput] = useState("");
  const [curDir, setCurDir] = useState("");
  const [width, setWidth] = useState(720);
  const [height, setHeight] = useState(500);
  const [date, setDate] = useState(new Date());
  const [displayCMatrix, setDisplayCMatrix] = useState(false);
  const [inputCursorPosition, setInputCursorPosition] = useState(0);
  const inputRef = useRef(null);
  const ref = useRef(null);
  const allDir = ["projects", "photography"];

  const commandAction = (command) => {
    switch (true) {
      case command.startsWith("cd ") && allDir.includes(command.split(" ")[1]):
        setCurDir(command.split(" ")[1]);
        break;
      case command.startsWith("echo "):
        return command.split(" ").slice(1, command.split(" ").length).join(" ");
      case command == "ls":
        console.log("ls");
        break;
      case command == "cmatrix":
        setDisplayCMatrix(true);
        return null;
    }
  };

  const cursorLeftRight = (event) => {
    console.log(event);
  };

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
    console.log(ref);
  }, []);

  const commandKeyHandler = (e) => {
    if (e.keyCode === 37) {
      var newPosition = Math.max(-input.length, inputCursorPosition - 1);
      setInputCursorPosition(newPosition);
    } else if (e.keyCode === 39) {
      var newPosition = Math.min(0, inputCursorPosition + 1);
      setInputCursorPosition(newPosition);
    } else if (e.key == "Enter") {
      setCommandHistory([...commandHistory, input]);
      const commandActionOutput = commandAction(input);
      var output =
        commandActionOutput === undefined
          ? CmdOutput[input]
            ? CmdOutput[input].replaceAll("\n", "</span><br /><span>")
            : `-bash: ${input.split(" ")[0]}: command not found`
          : commandActionOutput;
      setOutputHistory([...outputHistory, output]);
      setInput("");
      // reset cursor position
      setInputCursorPosition(0);
    }
  };

  const renderOutput = () => {
    return commandHistory.map((c, i) => (
      <div>
        <span>visitor@jhnyc.io:~$</span>
        <span>&nbsp;</span>
        <span>{c}</span>
        <br />
        {outputHistory[i] === null ? (
          ""
        ) : (
          <>
            <span dangerouslySetInnerHTML={{ __html: outputHistory[i] }}></span>
            <br />
          </>
        )}
      </div>
    ));
  };

  const renderTerminal = () => {
    return (
      <>
        <div
          className="terminal_body"
          ref={ref}
          onClick={() => inputRef.current.focus()}
        >
          <p>
            Last login: {date.toDateString().slice(0, -5)}{" "}
            {date.toTimeString().slice(0, 8)}
          </p>
          <p className={`intro1 ${props.startUp}`}>
            The default interactive shell is now zsh. To update your account to
            use zsh, please run `chsh -s /bin/zsh`. For more details, please
            visit https://support.apple.com/kb/HT208050.
          </p>

          {renderOutput()}
          <div className={`input ${props.startUp}`}>
            <label htmlFor="input">visitor@jhnyc.io:~$</label>
            <input
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={commandKeyHandler}
              autoFocus
              autocomplete="off"
              style={{ width: `${input.length}ch` }}
              ref={inputRef}
            />
            <b
              id="input_cursor"
              style={{
                width: "10px",
                height: "24px",
                backgroundColor: "var(--color-fontcolor)",
                color: "transparent",
                transform: `translate(${inputCursorPosition * 10}px, 0px)`,
              }}
            >
              █
            </b>
          </div>
        </div>
        <div
          className="cmatrix_container"
          style={{
            display: displayCMatrix ? "inline" : "none",
            width: width,
            height: height,
          }}
        >
          <button onClick={() => setDisplayCMatrix(false)}>
            <GrClose />
          </button>
          <Cmatrix row={Math.floor(width / 31)} col={Math.floor(height / 13)} />
        </div>
      </>
    );
  };

  return (
    <div>
      <WindowWrapper
        title={props.title}
        content={renderTerminal()}
        closeHandler={props.closeHandler}
      />
    </div>
  );
}
