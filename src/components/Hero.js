import React from "react";
import Logo from "../assets/img/logo.svg";
import User from "../assets/icon/users.svg";
import Server from "../assets/icon/server.svg";
import Location from "../assets/icon/location.svg";
import HeroImage from "../assets/img/Hero-Illustration.svg";
import OfferImage from "../assets/img/Offer-Illustration.svg";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
const Hero = () => {
  return (
    <div>
      <Navbar expand="lg" className="el_cozy">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="logo" />
            Lasles<span>vpn</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#testimonial">Testimonials</Nav.Link>
              <Nav.Link href="#help">Help</Nav.Link>
            </Nav>
            <div className="sign-up-buttons">
              <Button variant="outline-primary">Sign In</Button>
              <Button variant="outline-secondary" className="sign-up">
                Sign Up
              </Button>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className="hero-section py-5">
          <div className="text-description pe-lg-3">
            <p className="fs-1">
              Want anything to be <br /> easy with <span>LaslesVPN.</span>
            </p>
            <p className="fs-5 mt-3">
              Provide a network for all your needs with ease and fun using
              <span> LaslesVPN</span> discover interesting features from us.
            </p>
            <Button variant="outline-primary" className="mt-3">
              Get Started
            </Button>
          </div>
          <div className="hero-illustration col-md-5">
            <img src={HeroImage} className="img-fluid" alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="hero-summary py-5">
          <div className="rey-card col">
            <div className="card-image">
              <div>
                <img src={User} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="card-text">
              <p className="number">90+</p>
              <p className="text">Users</p>
            </div>
          </div>
          <div className="rey-card col">
            <div className="card-image">
              <div>
                <img src={Location} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="card-text">
              <p className="number">30+</p>
              <p className="text">Locations</p>
            </div>
          </div>
          <div className="rey-card col">
            <div className="card-image">
              <div>
                <img src={Server} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="card-text">
              <p className="number">50+</p>
              <p className="text">Servers</p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="offer">
          <div className="offer-illustration col-md-7">
            <img src={OfferImage} className="img-fluid" alt="" />
          </div>
          <div className="offer-text px-md-2">
            <p className="fs-1">
              We Provide Many <br /> Features You Can Use
            </p>
            <p className="fs-5 mt-3">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul>
              <li>Powerfull online protection.</li>
              <li>Internet without borders.</li>
              <li>Supercharged VPN</li>
              <li>No specific time limits.</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
