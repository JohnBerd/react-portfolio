import React from "react";
import "./cube.css";
import zIndex from "@material-ui/core/styles/zIndex";

export default function ({visible = true}) {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        backgroundColor: '#FFF',
        zIndex: 5000,
      }}
      className={visible ? "visible" : "hidden"}
    >
      <svg id="loading" viewbox="0 0 100 80">
        <defs>
          <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FE6B8B" />
            <stop offset="100%" stop-color="#FF8E53" />
          </linearGradient>

          <clipPath id="rects" width="100%">
            <rect
              class="rect"
              id="rect1"
              x="0"
              y="0"
              width="30"
              height="30"
              rx="2"
              ry="2"
            />
            <rect
              class="rect"
              id="rect2"
              x="0"
              y="0"
              width="30"
              height="30"
              rx="2"
              ry="2"
            />
            <rect
              class="rect"
              id="rect3"
              x="0"
              y="0"
              width="30"
              height="30"
              rx="2"
              ry="2"
            />
            <rect
              class="rect"
              id="rect4"
              x="0"
              y="0"
              width="30"
              height="30"
              rx="2"
              ry="2"
            />
            <rect
              class="rect"
              id="rect5"
              x="0"
              y="0"
              width="30"
              height="30"
              rx="2"
              ry="2"
            />
            <rect
              class="rect"
              id="rect6"
              x="0"
              y="0"
              width="30"
              height="30"
              rx="2"
              ry="2"
            />
            <rect
              class="rect"
              id="rect7"
              x="0"
              y="0"
              width="30"
              height="30"
              rx="2"
              ry="2"
            />
          </clipPath>
        </defs>
        <rect
          id="container"
          transform="translate(50) scale(0.707, 0.707) rotate(45)"
          x="0"
          y="0"
          width="100"
          height="100"
          fill="url(#gradient)"
          clip-path="url(#rects)"
        ></rect>
      </svg>
    </div>
  );
}
