import React from "react";
import "./terminal.css";

export default function Terminal() {
  return (
    <div className="terminal_container">
      <div className="terminal_header">
        <div className="terminal_header_button"></div>
        <div className="terminal_header_button"></div>
        <div className="terminal_header_button"></div>
      </div>
      <div className="terminal_body">
        <p>Last login: Wed Nov 2 10:15:55</p>
        <p>
          The default interactive shell is now zsh. To update your account to
          use zsh, please run `chsh -s /bin/zsh`. For more details, please visit
          https://support.apple.com/kb/HT208050.
        </p>
        <p>jhnyc.io:~ admin$ sudo apt-get update</p>
        <label htmlFor="input">jhnyc.io:~ admin$</label>
        <input id="input" />
      </div>
    </div>
  );
}
