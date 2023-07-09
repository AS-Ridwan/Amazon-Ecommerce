import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import leaf from "../../images/icons8-leaf.png";
import stack from "../../images/icons8-stack-exchange.png";
import star from "../../images/icons8-star.png";

const About = () => {
  return (
    <div className="main-container">
      <div className="main-title">
        <div>
          <h1>LIVE LIFE TO THE FULLEST</h1>
          <p>
            Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka
            dhuddu pochn, semper suscipit, pos
          </p>
        </div>
      </div>
      <div className="side-container">
        <div className="left-side">
          <div className="item item-1">
            <div>
              <img src={leaf} alt="leaf" />
            </div>
            <div>
              <h3>ENVIRONMENT-FRIENDLY</h3>
              <p>
                Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                nulla, sollicitudin ac hendrerit nec, tempor quis nis
              </p>
            </div>
          </div>
          <div className="item item-2">
            <div>
              <img src={stack} alt="stack-exchange" />
            </div>
            <div>
              <h3>EASY EXCHANGE OPTION</h3>
              <p>
                Tempus iaculis urna id volutpat. Mauris cursus mattis molestie a
                iaculis. Etiam non quam lacus suspendisse faucibus interdum
                posuere lorem vitae ultricies leo marques
              </p>
            </div>
          </div>
          <div className="item item-3">
            <div>
              <img src={star} alt="star" />
            </div>
            <div>
              <h3>PERFECT RATING</h3>
              <p>
                Netus et malesuada fames ac turpis egestas maecenas pharetra.
                Eleifend donec pretium vulputate sapien nec sagittis. Nisi vitae
                suscipit tellus mauris anques isum
              </p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="img-container">
            <img src={aboutImg} alt="shoes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
