import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4><br></br>
        <h3>Darshan Ramani</h3>
        <a href="https://www.instagram.com/darshanramani01/">Instagram</a>
        <a href="https://www.linkedin.com/in/darshan-ramani-88768921a/">linkedIn</a>
        <a href="https://www.facebook.com/darsan.ramani.1/">Facebook</a>
      </div>
      <div className="rightFooter"><br></br><br></br>
        <h3>Bharat Petadiya</h3>
        <a href="https://www.instagram.com/bharat_patel_018/">Instagram</a>
        <a href="https://www.linkedin.com/in/bharat-pedhadiya-20a52419b">linkedIn</a>
        <a href="https://m.facebook.com/100013526778020/">Facebook</a>
      </div>
      <div className="rightFooter"><br></br><br></br>
        <h3>Sandeep Singh</h3>
        <a href="https://www.instagram.com/royalsingh4352/">Instagram</a>
        <a href="https://www.linkedin.com/in/sandeep-singh-595946206/">linkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=100013787137959">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
