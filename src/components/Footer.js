import React from "react";
import Logo from "../assets/img/logo.svg";
import Twitter from "../assets/icon/twitter.svg";
import Instagram from "../assets/icon/instagram.svg";
import Facebook from "../assets/icon/facebook.svg";
import { Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="grey_dark_bg">
      <Container>
        <div className="footer">
          <div className="summary col-md-4">
            <div className="logo">
              <img src={Logo} alt="logo" />
              Lasles<span>vpn</span>
            </div>
            <p className="summary-text">
              <span>LaslesVPN</span> is a private virtual network that <br />
              has unique features and has high security.
            </p>
            <div className="socials">
              <div>
                <Nav.Link href="#">
                  <img src={Facebook} className="img-fluid" alt="" />
                </Nav.Link>
              </div>
              <div>
                <Nav.Link href="#">
                  <img src={Twitter} className="img-fluid" alt="" />
                </Nav.Link>
              </div>
              <div>
                <Nav.Link href="#">
                  <img src={Instagram} className="img-fluid" alt="" />
                </Nav.Link>
              </div>
            </div>
            <div className="cr">
              ©2020Lasles<span>VPN</span>
            </div>
          </div>
          <div className="sub-links col">
            <div className="listing">
              <p>Product</p>
              <ul>
                <li>
                  <Nav.Link href="#">Download </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Pricing</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Locations</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Server</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Countries</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Blog</Nav.Link>
                </li>
              </ul>
            </div>
            <div className="listing">
              <p>Engage</p>

              <ul>
                <li>
                  <Nav.Link href="#">LaslesVPN ? </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">FAQ</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Tutorials</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">About Us</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Privacy Policy</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Terms of Service</Nav.Link>
                </li>
              </ul>
            </div>
            <div className="listing">
              <p>Earn Money</p>
              <ul>
                <li>
                  <Nav.Link href="#">Affiliate</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">Become Partner</Nav.Link>
                </li>
              </ul>
            </div>
            <div className="cr">
              ©2020Lasles<span>VPN</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
