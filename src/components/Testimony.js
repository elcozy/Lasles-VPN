import React from "react";
import { Button, Container } from "react-bootstrap";

const Testimony = () => {
  return (
    <div className="grey_bg_half">
      <Container>
        <div className="subscribe">
          <div className="sub-text">
            <p className="fsz-1">
              Subscribe Now for <br /> Get Special Features!
            </p>
            <p className="fsz-3">Let's subscribe with us and find the fun.</p>
          </div>
          <div className="sub-button">
            <Button variant="outline-primary" className="mt-3">
              Subscribe Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimony;
