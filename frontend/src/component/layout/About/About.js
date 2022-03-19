import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography>Sandeep Singh</Typography>
              <div className="aboutSectionContainer2">
                  <Typography component="h2">Follow Us</Typography>
                  <a href="https://www.facebook.com/profile.php?id=100013787137959" target="blank">
                    <FacebookIcon className="facebookSvgIcon" />
                  </a>

                  <a href="https://www.instagram.com/royalsingh4352/" target="blank">
                    <InstagramIcon className="instagramSvgIcon" />
                  </a>

                  <a href="https://www.linkedin.com/in/sandeep-singh-595946206/" target="blank">
                    <LinkedInIcon className="linkedinSvgIcon" />
                  </a>
              </div>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkil9d5yw/image/upload/v1646372171/unnamed_svaskx.jpg"
              alt="Founder"
            />
            <Typography>Bharat Pedadiya</Typography>
              <div className="aboutSectionContainer2">
                <Typography component="h2">Follow Us</Typography>
                  <a href="https://m.facebook.com/100013526778020/" target="blank">
                    <FacebookIcon className="facebookSvgIcon" />
                  </a>

                  <a href="https://www.instagram.com/bharat_patel_018/" target="blank">
                    <InstagramIcon className="instagramSvgIcon" />
                  </a>

                  <a href="https://www.linkedin.com/in/bharat-pedhadiya-20a52419b" target="blank">
                    <LinkedInIcon className="linkedinSvgIcon" />
                  </a>
              </div>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkil9d5yw/image/upload/v1646372185/unnamed_amxwjn.jpg"
              alt="Founder"
            />
            <Typography>Darshan Ramani</Typography>
              <div className="aboutSectionContainer2">
                <Typography component="h2">Follow Us</Typography>

                <a href="https://www.facebook.com/darsan.ramani.1/" target="blank">
                  <FacebookIcon className="facebookSvgIcon" />
                </a>

                <a href="https://www.instagram.com/darshanramani01/" target="blank">
                  <InstagramIcon className="instagramSvgIcon" />
                </a>

                <a href="https://www.linkedin.com/in/darshan-ramani-88768921a/" target="blank">
                  <LinkedInIcon className="linkedinSvgIcon" />
                </a>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
