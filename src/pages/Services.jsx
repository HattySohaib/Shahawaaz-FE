import React from "react";
import "./Services.css";

function Services() {
  const calendlyLink = "https://calendly.com/sahabaj/30min";

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Complete Digital <br /> Marketing Done For You
        </h1>
        <p>We Provide, As We Promise.</p>
      </section>

      {/* Turn Your Website Section */}
      <section className="turn-your-website">
        <h2>Turn Your Website Into an Automated Sales Machine.</h2>
        <p>
          We will do it for you. But first, take a tour of the basics with us.
        </p>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
          <button className="service-cta">
            Book a Free (time-limited) Consultation Call Now!
          </button>
        </a>
      </section>

      {/* We Help With Section */}
      <section className="we-help-with">
        <h2>We Help With</h2>
        <ul>
          <li>
            Market Research (Your audience; How to place your product, where)
          </li>
          <li>Content Marketing Strategies</li>
          <li>Content Creation</li>
          <li>Search Engine Optimization/SEO</li>
          <li>Website Lead Generation Automation</li>
        </ul>
        <p>Go behind-the-scenes of our services.</p>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
          <button className="service-cta">
            Claim Your Slot for a Discovery Call NOW!
          </button>
        </a>
      </section>

      {/* Industries We Thrive In Section */}
      <section className="industries">
        <h2>The Industries We Thrive In</h2>
        <ul>
          <li>Sustainability and Environmentalism</li>
          <li>Electric Vehicles</li>
          <li>Solar Power</li>
          <li>Lifestyle</li>
          <li>Travel</li>
        </ul>
        <p>
          Get our niche marketing recommendations for your business. Join the
          list of businesses benefitted from this program.
        </p>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
          <button className="service-cta">JOIN THE LIST.</button>
        </a>
      </section>

      {/* A Sneak Peek Into Our Process Section */}
      <section className="process">
        <h2>A Sneak Peek Into Our Process</h2>
        <p>
          You and us sit on a discovery call. In this call, you tell us about
          your business goals; quarterly, half yearly and annually. After our
          conversation, we do a basic market research for you and your
          product/service. With the use of the research, we formulate a content
          strategy for the quarter. And before implementing the strategy, we
          implement the basic SEO for crawling and indexing. After a while of
          content and SEO, we measure the progress. Depending on the nature of
          the report, we Plan for the Next Quarter.
        </p>
        <p>Want to get down to the nitty-gritty details?</p>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
          <button className="service-cta">Book the Immediate Slot!</button>
        </a>
      </section>

      {/* The Results You Can Expect Section */}
      <section className="results">
        <h2>The Results You Can Expect</h2>
        <ul>
          <li>Ranking for target keywords</li>
          <li>Growth in traffic volume</li>
          <li>Increased brand awareness among qualified search traffic</li>
          <li>Increased target conversions</li>
          <li>Increased sales</li>
          <li>Higher ROI.</li>
        </ul>
        <p>Sounds like your business goals?</p>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
          <button className="service-cta">Catch the Markétingmon NOW!</button>
        </a>
      </section>
    </div>
  );
}

export default Services;
