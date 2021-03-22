/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// core components
import Home from "./demos/Home.js"
import Projects from "./demos/Projects.js"
import AboutUs from "./demos/AboutUs.js"
import Contact from "./demos/Contact.js"
import SimpleFooter from "components/Footers/SimpleFooter.js";
//import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import * as Scroll from 'react-scroll';

var Link = Scroll.Link;
var Element = Scroll.Element;
var scroll = Scroll.animateScroll;

class New extends React.Component {
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    /*this.setState({homelo: document.querySelector("#home").offsetTop,
    projectlo: document.querySelector("#project").offsetTop, 
    aboutlo: document.querySelector("#about").offsetTop});*/
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };
  
  render() {

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img src={require("assets/img/brand/BEYOND_trans3.png")} alt="..."/>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}>
                <Nav className="ml-lg-auto " navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={()=> scroll.scrollTo(0,0)}>
                    Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink  href="#pablo" onClick={()=> scroll.scrollTo(650,0)}>About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  href="#pablo" onClick={()=> scroll.scrollTo(1280,0)}>Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  href="#pablo" onClick={()=> scroll.scrollTo(2350,0)}>Contact</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank">
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">Instagram</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/BEYOND-Ewha-Yonsei"
                      id="tooltip112445449"
                      target="_blank">
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
        <main ref="main">
        <Element name="Container1">
          <Home />
        </Element>
        <Element name="Container2">
        <AboutUs/>
        </Element>
        <Element name="Container3">
          <Projects />
        </Element>
        <Element name="Container4">
          <Contact />
        </Element>
        </main>
        <SimpleFooter/>
      </>
    );
  }
}

export default New;