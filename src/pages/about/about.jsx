import React from "react";

import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="hero">
        <h1>Welcome to Nepali Tadka</h1>
        <p>
          Nepali tadka is a unique place where you can discover the heart and
          soul of Nepali culture through its food, history, and traditions. We
          invite you to explore the flavors and aromas that make Nepali cuisine
          so special.
        </p>
      </section>

      <section className="about">
        <div className="about__card">
          <h2>Our Mission</h2>
          <p>
            Our aim is to bring the flavors of Nepal to your kitchen. We are
            committed to celebrating Nepal's culinary heritage and sharing it
            with the world. Through our recipes and resources, we hope to
            inspire you to explore the rich and diverse flavors of Nepali
            cuisine.
          </p>
        </div>
        <div className="about__card">
          <h2>Why We Started</h2>
          <p>
            Nepali tadka is often overshadowed, but it holds a deep connection
            to our culture, history, and traditions. We started this platform to
            shine a spotlight on Nepali cuisine and provide a space for people
            to learn, explore, and recreate these delicious dishes.
          </p>
        </div>
        <div className="about__card">
          <h2>What You'll Find Here</h2>
          <p>
            On our website, you'll find a variety of Nepali recipes, ranging
            from traditional staples to contemporary creations. We also offer
            information about Nepali culture, history, and traditions, as well
            as a community section where you can share your experiences and
            connect with others who share your passion for Nepali cuisine.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
