import React, { useState } from "react";
import WindowWrapper from "../window/WindowWrapper";
import CmdOutput from "./CmdOutput";
import "./terminal.css";

export default function Terminal(props) {
  const [commandHistory, setCommandHistory] = useState([]);
  const [outputHistory, setOutputHistory] = useState([]);
  const [input, setInput] = useState("");

  const enterCommand = (e) => {
    if (e.key == "Enter") {
      setCommandHistory([...commandHistory, input]);
      const output = CmdOutput[input]
        ? CmdOutput[input].replaceAll("\n", "</span><br /><span>")
        : `-bash: ${input.split(" ")[0]}: command not found`;
      setOutputHistory([...outputHistory, output]);
      setInput("");
    }
  };

  const inputHandler = (input) => {
    setInput(input);
  };

  const renderOutput = () => {
    return commandHistory.map((c, i) => (
      <>
        <span>jhnyc.io:~ admin$</span>
        <span>&nbsp;</span>
        <span>{c}</span>
        <br />
        <span dangerouslySetInnerHTML={{ __html: outputHistory[i] }}></span>
        <br />
      </>
    ));
  };

  const renderTerminal = () => {
    return (
      <div className="terminal_body">
        <p>Last login: Wed Nov 2 10:15:55</p>
        <p className={`intro1 ${props.startUp}`}>
          The default interactive shell is now zsh. To update your account to
          use zsh, please run `chsh -s /bin/zsh`. For more details, please visit
          https://support.apple.com/kb/HT208050.
        </p>

        {renderOutput()}
        <div className={`input ${props.startUp}`}>
          <label htmlFor="input">jhnyc.io:~ admin$</label>
          <input
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={enterCommand}
            autocomplete="off"
            style={{ width: `${input.length}ch` }}
          />
        </div>
      </div>
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
