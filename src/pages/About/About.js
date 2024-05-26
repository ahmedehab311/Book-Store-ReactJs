import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="seaction-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              BookHub is a website aimed at providing an enjoyable and exciting
              reading experience for readers of all ages and interests. We offer
              a wide range of books across various genres and topics, including
              literature, fiction, science, biographies, and more. Explore new
              worlds, embark on adventures, and acquire boundless knowledge with
              BookHub!
            </p>
            <p className="fs-17">
              BookHub is akin to a treasure trove of knowledge and adventure.
              With an extensive collection spanning various genres and subjects,
              it serves as a gateway to endless exploration and discovery.
              Whether you seek captivating fiction, insightful non-fiction, or
              enriching literature, BookHub provides a sanctuary for readers of
              all tastes and preferences. Immerse yourself in its virtual
              shelves, where each book is a portal to new worlds and ideas,
              waiting to be explored and embraced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
