import React, { useState } from "react";
import "./main.css";

export default function Main() {
  const [active, setActive] = useState(false);
  const [version, setVersion] = useState("v4");
  const activate = () => {
    setActive(!active);
  };

  const changeVersion = (v) => {
    setVersion(v);
  };

  return (
    <div className="main">
      <button className="1" onClick={() => changeVersion("v0")}>
        0
      </button>
      <button className="1" onClick={() => changeVersion("v1")}>
        1
      </button>
      <button className="1" onClick={() => changeVersion("v2")}>
        2
      </button>
      <button className="1" onClick={() => changeVersion("v3")}>
        3
      </button>
      <button className="1" onClick={() => changeVersion("v4")}>
        4
      </button>
      <div className={`block_container`}>
        <div
          className={
            active ? `block hat-${version} active` : `block hat-${version}`
          }
        ></div>
        <div
          className={
            active ? `block face-${version} active` : `block face-${version}`
          }
        ></div>
        <div
          className={
            active ? `block neck-${version} active` : `block neck-${version}`
          }
        ></div>
        <div
          className={
            active ? `block shirt-${version} active` : `block shirt-${version}`
          }
          onClick={activate}
        ></div>
        <div
          className={
            active
              ? `block macbook-${version} active`
              : `block macbook-${version}`
          }
        ></div>
        <div
          className={
            active ? `block jeans-${version} active` : `block jeans-${version}`
          }
        ></div>
        <div
          className={
            active
              ? `block jeans-fold-${version} active`
              : `block jeans-fold-${version}`
          }
        ></div>
        <div
          className={
            active ? `block leg-${version} active` : `block leg-${version}`
          }
        ></div>
        <div
          className={
            active ? `block shoe-${version} active` : `block shoe-${version}`
          }
        ></div>
        <div
          className="outline"
          style={{ opacity: version === "v4" ? "100" : "0" }}
        >
          <div
            className={
              active ? `block shoe-outline active` : `block shoe-outline`
            }
          ></div>
          <div
            className={
              active ? `block shirt-outline1 active` : `block shirt-outline1`
            }
          ></div>
          <div
            className={
              active ? `block shirt-outline2 active` : `block shirt-outline2`
            }
          ></div>
          <div
            className={
              active ? `block shirt-outline3 active` : `block shirt-outline3`
            }
          ></div>
          <div
            className={
              active ? `block shirt-outline4 active` : `block shirt-outline4`
            }
          ></div>
          <div
            className={
              active ? `block shirt-outline5 active` : `block shirt-outline5`
            }
          ></div>
          <div
            className={
              active ? `block shirt-outline6 active` : `block shirt-outline6`
            }
          ></div>

          <div
            className={
              active ? `block leg-outline1 active` : `block leg-outline1`
            }
          ></div>
          <div
            className={
              active ? `block leg-outline2 active` : `block leg-outline2`
            }
          ></div>
          <div
            className={
              active ? `block jeans-outline1 active` : `block jeans-outline1`
            }
          ></div>
          <div
            className={
              active ? `block jeans-outline2 active` : `block jeans-outline2`
            }
          ></div>
          <div
            className={
              active ? `block hat-outline1 active` : `block hat-outline1`
            }
          ></div>
          <div
            className={
              active ? `block hat-outline2 active` : `block hat-outline2`
            }
          ></div>
          <div
            className={
              active ? `block hat-outline3 active` : `block hat-outline3`
            }
          ></div>
          <div
            className={
              active ? `block hat-outline4 active` : `block hat-outline4`
            }
          ></div>
          <div
            className={
              active ? `block shoe-outline1 active` : `block shoe-outline1`
            }
          ></div>
          <div
            className={
              active ? `block shoe-outline2 active` : `block shoe-outline2`
            }
          ></div>
          <div
            className={
              active ? `block shoe-outline3 active` : `block shoe-outline3`
            }
          ></div>
          <div
            className={
              active ? `block shoe-outline4 active` : `block shoe-outline4`
            }
          ></div>
          <div
            className={
              active ? `block shoe-outline5 active` : `block shoe-outline5`
            }
          ></div>
          <div className={active ? `block hat-1 active` : `block hat-1`}></div>
          <div className={active ? `block hat-2 active` : `block hat-2`}></div>
          <div className={active ? `block hat-3 active` : `block hat-3`}></div>
          <div
            className={active ? `block hair-1 active` : `block hair-1`}
          ></div>
          <div
            className={active ? `block hair-2 active` : `block hair-2`}
          ></div>
        </div>
        <div
          className="arm"
          style={{ opacity: version === "v4" ? "100" : "0" }}
        >
          <div
            className={
              active
                ? `block shoulder-outline1 active`
                : `block shoulder-outline1`
            }
          ></div>
          <div
            className={
              active
                ? `block shoulder-outline2 active`
                : `block shoulder-outline2`
            }
          ></div>
          <div
            className={
              active
                ? `block shoulder-outline3 active`
                : `block shoulder-outline3`
            }
          ></div>
          <div
            className={
              active
                ? `block shoulder-outline4 active`
                : `block shoulder-outline4`
            }
          ></div>
          <div
            className={
              active
                ? `block shoulder-outline5 active`
                : `block shoulder-outline5`
            }
          ></div>
          <div
            className={active ? `block hand-1 active` : `block hand-1`}
          ></div>
          <div
            className={active ? `block hand-2 active` : `block hand-2`}
          ></div>
          <div
            className={active ? `block hand-3 active` : `block hand-3`}
          ></div>
          <div
            className={active ? `block hand-4 active` : `block hand-4`}
          ></div>
          <div
            className={active ? `block hand-5 active` : `block hand-5`}
          ></div>
          <div
            className={active ? `block hand-6 active` : `block hand-6`}
          ></div>
          <div
            className={
              active ? `block hand-fill-1 active` : `block hand-fill-1`
            }
          ></div>
          <div
            className={
              active ? `block hand-fill-2 active` : `block hand-fill-2`
            }
          ></div>
          <div
            className={
              active ? `block hand-fill-3 active` : `block hand-fill-3`
            }
          ></div>
        </div>
      </div>
    </div>
  );
}
