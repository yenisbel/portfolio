import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavItem,
} from "reactstrap";
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import "./navigation.css";

const Navigation = () => {
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseCollapse = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrolledDownEnough = bodyScrollTop > 75 ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDownEnough]);

  const whiteBackground = scrolledDownEnough
    ? "white-background navbar-border"
    : "";
  const fontColor = scrolledDownEnough ? "blue-font" : "white-font";

  return (
    <Navbar className={whiteBackground} fixed={"top"} expand="md">
      <NavbarBrand href="https://yenisbel.com/" className={fontColor}>
        Yenisbel's Portfolio
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa fa-navicon ${fontColor}`} />
      </NavbarToggler>
      <Collapse isOpen={isOpen} className={`${fontColor}`} navbar>
        <Scrollspy
          items={["about", "projects", "contact"]}
          currentClassName="active"
          className={`${fontColor} ml-auto navbar-nav`}
          navbar
        >
          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#about" className="nav-link">
              About me
            </ScrollchorItem>
          </NavItem>
          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#projects" className="nav-link">
              Projects
            </ScrollchorItem>
          </NavItem>
          <NavItem onClick={handleCloseCollapse}>
            <ScrollchorItem to="#contact" className="nav-link">
              Contact
            </ScrollchorItem>
          </NavItem>
          <NavItem onClick={handleCloseCollapse}>
            <NavLink href="https://docs.google.com/document/d/e/2PACX-1vT69srXo4B2BnMBDy2KW_CHGExlmbRWiTmx2RFz2Q_l4E0aXM5nveRc-IEDgKy-GxUOs_vLwFuS05t7/pub" 
              className="external-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </NavLink>
          </NavItem>  
        </Scrollspy>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
