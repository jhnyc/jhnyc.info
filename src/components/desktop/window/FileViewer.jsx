import React from "react";
import Window from "./Window";

export default function FileViewer(props) {
  const Viewer = () => {
    return (
      <div className="window document-viewer">
        <div className="window_sidebar">
          <div className="window_sidebar-subheader">Documents</div>
          <div className="window_sidebar-file-container">
            <div className="window_sidebar-file">test123</div>
            <div className="window_sidebar-file">absd123</div>
            <div className="window_sidebar-file">to be sds</div>
          </div>
        </div>
        <div className="window_info">
          <div className="window_sidebar-subheader">Info</div>
          <div className="window_sidebar-info-container"></div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Window title={props.title} content={Viewer()} />
    </div>
  );
}
