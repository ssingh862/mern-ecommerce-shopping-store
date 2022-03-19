import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <>
          <div className="contactContainer">
            <h3>Sandeep Singh</h3><br></br>
            <p>Phone No.:- 9067876459 </p>
            <a className="mailBtn" href="mailto:sandeep1916518@gmail.com">
              <Button>Gmail: sandeep1916518@gmail.com</Button>
            </a>
          </div>
          <div className="contactContainer">
            <h3>Bharat Pedhadiya</h3><br></br>
            <p>Phone No.:- 7405397233 </p>
            <a className="mailBtn" href="mailto:bpedhadiya192@rku.ac.in">
              <Button>Gmail: bpedhadiya192@rku.ac.in</Button>
            </a>
        </div>
        <div className="contactContainer">
          <h3>Darshan Ramani</h3><br></br>
          <p>Phone No.:- 9512689146</p>
          <a className="mailBtn" href="mailto:dramani318@rku.ac.in">
            <Button>Gmail: dramani318@rku.ac.in</Button>
          </a>
        </div>
  </>
  );
};

export default Contact;
