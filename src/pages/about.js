import React from "react";
import Footer from "../Components/footer";
import Metadata from "../Components/metadata";
import "../Components/about.scss";
import MenuListComposition from "../Components/top";
import { Link } from "gatsby";
import { Fab, makeStyles, Tooltip } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ContactForm from "../Components/ContactForm";

const useStyles = makeStyles({
  contactInfo: {
    display: "flex",
    padding: 0,
  },
  contact: {
    width: "50%",
    padding: "20px",
    boxSizing: "border-box",
    "& button": {
      margin: "20px 0",
    },
  },
  section: {
    // backgroundColor: '#191c1d',
    // color: 'white',
    overflow: "hidden",
    "& h2,h3,h4": {
      margin: "0",
    },
  },
  header: {
    display: "flex",
    gap: "1em",
    justifyContent: "center",
    padding: "0",
    margin: "20px 0",
    "& h2": {
      fontSize: "3em",
      margin: "0",
    },
  },
});

export const About = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <MenuListComposition />
      <Metadata />
      <div
        // id="aboutSite"
        style={{
          textAlign: "center",
          display: "block",
          minHeight: "100vh",
          flexWrap: "wrap",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <div style={{ padding:'10px',width:'100%', boxSizing:'border-box' }}>
          <div style={{ marginTop: "20px", padding:'10px', boxSizing:'border-box' }}></div>
          <div
            className="textContainer aboutContainer "
            style={{
              // width: "clamp(300px,100%,33.3%)",
              margin: "0 auto",
              flexGrow: "2",
            }}
          >
            <div>
              <h2>Hey, I'm Matthew</h2>
              <div
                style={{
                  display: "flex",
                  gap: "1em",
                  justifyContent: "center",
                }}
              >
                <Tooltip title="LinkedIn profile">
                  <a
                    href="https://www.linkedin.com/in/matthew-pudney/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Fab size="small">
                      <LinkedInIcon />
                    </Fab>
                  </a>
                </Tooltip>
                <Tooltip title="Github profile">
                  <a
                    href="https://github.com/Pudderz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Fab size="small">
                      <GitHubIcon />
                    </Fab>
                  </a>
                </Tooltip>
              </div>
              <hr />
              <p style={{ textAlign: "center" }}>
                I'm a front-end web developer based in UK, looking for a
                full-time role.
              </p>
              <div style={{ padding: "10px" }}></div>
              <p>
                I love learning the massive scope of computer science which I
                find incredibly rewarding and exciting as there's always
                something more you can learn and improve on.
              </p>
              <div style={{ padding: "10px" }} ></div>

              <p>
                I'm currently looking for an opportunity to work on a JavaScript
                framework and hope to learn and move to a full-stack position in
                the future.
              </p>

              <div>
                <h2>About Blog</h2>
                <p>
                  This is a Blog site made with Gatsby using a contentful CMS.
                  For More info into and about the code, take a look at the Github repo.
                </p>
                <a href="https://github.com/Pudderz/gatsbyHeadlessCMS">https://github.com/Pudderz/gatsbyHeadlessCMS</a>
               
              </div>
            </div>
          </div>
        </div>

        <div
          className={`textContainer ${classes.contactInfo}  `}
          id="contactInfo"
          style={{ margin: "0 auto", display:'flex', flexWrap:'wrap',width: '100%',gap:'20px', padding:'10px', boxSizing:'border-box' }}
        >
          <div id="contact" className={"aboutContainer "} style={{minWidth:'300px',flexGrow:'2', width:'600px', margin:'0'}} >
            <h2>Get in touch</h2>

            <p>
              Thank you for checking out my portfolio and if you'd like to learn
              more about what makes me tick or if you have knowledge of any
              exciting opportunities feel free to reach out.
            </p>
            <p>To get in touch, contact via my email: mpudney2@gmail.com</p>
            <p>Or by this contact form:</p>
          </div>

          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
