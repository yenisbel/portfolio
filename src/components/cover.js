import React from "react";
import Scrollchor from "react-scrollchor";
import Img from "gatsby-image";
import "./cover.css";
// import indexStyles from "./index.module.scss"

const Cover = ({ coverImg }) => (
  <div id="#top" className="cover animated">
    <Img
      title="Cover image"
      alt="Front"
      sizes={coverImg.sizes}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <div className="overlay" />
    <div className="center">
      <div class="container">
        <div class="text-with-animation">can</div>
        <div class="subtext-with-animation">
          <span>take</span> <span>it</span>
        </div>
      </div>
    </div>
    <div className="arrow animated bounceInDown">
      <Scrollchor to="#about" className="btn" animate={{ duration: 500 }}>
        <i className="fa fa-chevron-down" />
      </Scrollchor>
    </div>
  </div>
);

export default Cover;
