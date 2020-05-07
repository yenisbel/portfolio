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
      <div className="container">
      <div className="scroller">
      <div className="inner">
        <span>Hi, I'm</span>
        <span>Yenisbel Valle</span>
        <span>I'm a software engineer.</span>
        <span>My goal is to <a href="https://github.com/yenisbel" className="blue">build</a> <a a href="https://github.com/yenisbel" className="blueb">web-apps</a>.</span>
      </div>
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
