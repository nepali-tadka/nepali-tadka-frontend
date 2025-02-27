import React from "react";
import { Link } from "react-router";

import Button from "../../components/button/button";
import "./home.css";

const Home = () => {
  return (
    <section>
      <div className="hero_section">
        <div className="hero_content">
          <h1>
            Discover your new
            <br />
            favorite dish with our
          </h1>
          <p>TASTY RECIPES</p>
          <a href="recipepage.html"></a>

          <Link to="/recipes">
            <Button size="large">Explore Recipes</Button>
          </Link>
        </div>
        <img src="/assets/images/hero.png" alt="hero-image" />
      </div>

      <div className="explore_recipe_cards">
        <h1>EXPLORE AUTHENTIC NEPALI FLAVORS</h1>
        <div className="cards_section">
          <div className="card_same">
            <img src="/assets/images/aalosadheko.jpg" />
            <p>HOMELY</p>
          </div>
          <div className="card_same">
            <img src="/assets/images/momo.jpg" />
            <p>AUTHENTIC</p>
          </div>
          <div className="card_same">
            <img src="/assets/images/kheer.jpg" />
            <p>DELICIOUS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
