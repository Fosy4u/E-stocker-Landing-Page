import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Modal from "../elements/Modal";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./partials/particlesConfig";
import Slide from "./partials/Slide";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [hover, setHover] = useState();
  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <Particles
          style={{
            height: "100vh",
            position: "absolute",
            left: " 0",
            right: 0,
            margin: 0,
            padding: 0,
            zIndex: 0,
          }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              E-Stocker Solution for{" "}
              <span className="text-color-primary">Business</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Relax! and let our solution interwoven with Artificial Intelligence run the business for you, increasing
                sales, tracking every product from procurement to sales,
                providing data insights, analysis, notifications,   e-commerce,  live-cam, social media, and  more juicy evolving features while saving
                you time to network, live and open more businesses.
              </p>
              <div className="reveal-from-bottom mt-3" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="#"
                    onMouseEnter={() => setHover("sign up")}
                    onMouseLeave={() => setHover()}
                    className={hover === "sign up" && "text-color-primary"}
                  >
                    Sign Up
                  </Button>

                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="#"
                    onMouseEnter={() => setHover("demo")}
                    onMouseLeave={() => setHover()}
                    className={hover === "demo" && "text-color-primary"}
                  >
                    Free Demo & Training
                  </Button>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="#"
                    onMouseEnter={() => setHover("sign in")}
                    onMouseLeave={() => setHover()}
                    className={hover === "sign in" && "text-color-primary"}
                  >
                    Sign In
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <Slide />
            {/* <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={400}
                height={300}
              />
            </a> */}
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
