import React from "react";
import "./about-me.css";
import Img from "gatsby-image";


const AboutMe = ({ profileImg}) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Profile image"
              alt="Profile"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h4>My expectations...</h4>
            <p>
              As a developer my main goal is improve the life quality of people on a daily basis. Working in those applications that help to build a better tomorrow for youth.
              I always say to my kiddos even if you don’t want to become a programmer for a living, it’s still worth your time to learn how to program, 
              if computers are at all a part of your life, then learning to program is going to improve your life!
            </p>
            <h4>I'm working on...</h4>
            <p>
              Recently{" "}
              made this redesign of my portfolio with Gatsby, using evenings to go over some Algorithms and Data Structures.
              I am volunteering in education youth community using Google CS First, mentoring others to success in technology.
              Attending to more meetups of WWCode, and workshops for empowered minorities in Tech. 
            
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
