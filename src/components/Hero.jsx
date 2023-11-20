import React from "react";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn">Catergorey</button>
        </div>
        <div className="shop">
          <p>Also Available on</p>

          <div className="brand-logos">
            <img src="/images/flipkart.png" alt="flipkart-logo"></img>
            <img src="/images/amazon.png" alt="amazon-logo"></img>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-logo"></img>
      </div>
    </main>
  );
};

export default Hero;
