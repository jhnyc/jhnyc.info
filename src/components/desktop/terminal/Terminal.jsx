import React, { useState, useRef, useEffect } from "react";
import WindowWrapper from "../window/WindowWrapper";
import { GrClose } from "react-icons/gr";
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

  // fetch files structure data
  const [fileStructure, setFileStructure] = React.useState({
    name: "~",
    contents: [],
  });
  const [fileStructureLoading, setFileStructureLoading] = React.useState(true);
  const [fileStructureError, setFileStructureError] = React.useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/d74175eda2ddc2771b5a"
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setFileStructure(actualData);
        setFileStructureError(null);
      } catch (err) {
        setFileStructureError(err.message);
        setFileStructure(null);
      } finally {
        setFileStructureLoading(false);
      }
    };
    getData();
  }, []);

  // fetch command input-output mapping data
  const [commandOutput, setCommandOutput] = React.useState({});
  const [commandOutputLoading, setCommandOutputLoading] = React.useState(true);
  const [commandOutputError, setCommandOutputError] = React.useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/d74175eda2ddc2771b5a"
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setCommandOutput(actualData);
        setCommandOutputError(null);
      } catch (err) {
        setCommandOutputError(err.message);
        setCommandOutput(null);
      } finally {
        setCommandOutputLoading(false);
      }
    };
    getData();
  }, []);

  const changeDirectory = (dir) => {
    if (curDir.length == 0) {
      for (let i = 0; i < fileStructure.contents.length; i++) {
        if (dir === fileStructure.contents[i]["name"]) {
          setCurDir(dir);
          return null;
        }
      }
      return `-bash: cd: ${dir}: No such file or directory`;
    } else if (curDir.length > 0 && dir === "..") {
      setCurDir("");
      return null;
    } else {
      return `-bash: cd: ${dir}: No such file or directory`;
    }
  };

  const listDirectory = () => {
    if (curDir.length == 0) {
      var outputFiles = [];
      for (let i = 0; i < fileStructure.contents.length; i++) {
        outputFiles.push(fileStructure.contents[i].name);
      }
      return outputFiles.length == 0 ? "" : outputFiles.join("\n");
    } else {
      var outputFiles = [];
      for (let i = 0; i < fileStructure.contents.length; i++) {
        if (fileStructure.contents[i].name == curDir) {
          for (let j = 0; j < fileStructure.contents[i].contents.length; j++) {
            outputFiles.push(fileStructure.contents[i].contents[j].name);
          }
          return outputFiles.join("\n");
        }
      }
    }
  };

  const cat = (filename) => {
    if (curDir.length == 0) {
      for (var object of fileStructure.contents) {
        if (object.name == filename) {
          return object.text;
        }
      }
      return `cat: ${filename}: No such file or directory`;
    } else {
      for (var object of fileStructure.contents) {
        if (object.name == curDir) {
          for (var file of object.contents) {
            if (file.name == filename) {
              return file.text;
            }
          }
          return `cat: ${filename}: No such file or directory`;
        }
      }
    }
  };

  const pwd = () => {
    if (curDir.length == 0) {
      return "jhnyc.io/";
    } else {
      return `jhnyc.io/${curDir}`;
    }
  };

  const commandAction = (command) => {
    switch (true) {
      case command.startsWith("cd "):
        return changeDirectory(command.split(" ")[1].trim());
      case command.startsWith("echo "):
        return command.split(" ").slice(1, command.split(" ").length).join(" ");
      case command == "ls":
        return listDirectory();
      case command.startsWith("cat "):
        return cat(command.split(" ")[1].trim());
      case command.trim() == "pwd":
        return pwd();
      case command == "cmatrix":
        setDisplayCMatrix(true);
        return null;
    }
  };

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  const commandKeyHandler = (e) => {
    if (e.keyCode === 37) {
      var newPosition = Math.max(-input.length, inputCursorPosition - 1);
      setInputCursorPosition(newPosition);
    } else if (e.keyCode === 39) {
      var newPosition = Math.min(0, inputCursorPosition + 1);
      setInputCursorPosition(newPosition);
    } else if (e.key == "Enter") {
      setCommandHistory([...commandHistory, { dir: curDir, command: input }]);
      const commandActionOutput = commandAction(input);
      var output =
        commandActionOutput === undefined
          ? commandOutput[input]
            ? commandOutput[input].replaceAll("\n", "</span><br /><span>")
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
        <span>visitor@jhnyc.io: {c.dir.length == 0 ? `~` : c.dir}$</span>
        <span>&nbsp;</span>
        <span>{c.command}</span>
        <br />
        {outputHistory[i] === null ? (
          ""
        ) : (
          <>
            <span
              dangerouslySetInnerHTML={{ __html: outputHistory[i] }}
              className="terminal_output"
            ></span>
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
            <label htmlFor="input">
              visitor@jhnyc.io: {curDir.length == 0 ? `~` : curDir}$
            </label>
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
