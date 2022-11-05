import React from "react";
import Folder from "./folder/Folder";
import File from "./file/File";

export default function Desktop() {
  return (
    <div>
      <File name={"readme.txt"} icon={"document"} />
      <Folder name={"projects"} color={"#FFC700"} />
      <Folder name={"untitled folder"} color={"#534FF7"} />
      <Folder name={"photography"} color={"#0DAB58"} />
      <File name={"linkedin"} icon={"internet"} />
      <File name={"github"} icon={"internet"} />
      <File name={"email"} icon={"email"} />
    </div>
  );
}
