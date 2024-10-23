import React from "react";

const Home2 = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">
          Content Marketing for Solar Power Businesses
        </h1>
        <p className="header-subtitle">
          We help Solar Companies get customers through their website. You want
          some? Customers?
        </p>
        <h2 className="cta-text">
          Sign up for a non-salesy discussion of your strategies.
        </h2>
        <form className="sign-up-form">
          {/* Insert form fields */}
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
          />
          <button type="submit" className="cta-button">
            Sign Up
          </button>
        </form>
        <p className="no-spam">We won’t spam, promise.</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2 className="section-title">Who are we?</h2>
        <p className="content">
          Solar Power marketing people that help with Content creation, Content
          marketing, and Website development. We help you get recognized in the
          localities of your choice and bring you in front of people who search
          for your services. We help you make recurring sales from a one-time
          investment.
        </p>
        <h3 className="cta-text">
          Let’s talk about what you need most right now.
        </h3>
        <button className="cta-button">Get More Marketing Ideas</button>
      </section>

      {/* Featured Blogs */}
      <section className="blogs">
        <h2 className="section-title">Featured Blogs</h2>
        <ul className="blog-list">
          <li>Featured Blog 1</li>
          <li>Featured Blog 2</li>
          <li>Featured Blog 3</li>
        </ul>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2 className="section-title">
          Why would You and Us make a great team?
        </h2>
        <ul className="content-list">
          <li>
            Designed for Solar Power Companies that haven't figured out Content
            Marketing.
          </li>
          <li>
            Prioritize your Quarterly/Annual Business Goals and customize
            strategies accordingly.
          </li>
          <li>Sales Focused approach to boost cash flow.</li>
          <li>Respond to every query and keep you updated. YOU before US.</li>
          <li>
            We take care of the marketing part while you focus on your business.
          </li>
          <li>Reasonable pricing, no fluff!</li>
        </ul>
        <button className="cta-button">
          Schedule your FREE Solar Marketing Consultation Call
        </button>
      </section>

      {/* Service Cards */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="cards-container">
          <div className="card">
            <h3 className="card-title">
              Ranking on Local Search for Local Solar Queries
            </h3>
            <p className="card-description">
              SEO/Local SEO for Solar Power Companies
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">
              Appearing for Search Queries related to your product
            </h3>
            <p className="card-description">Solar Power Content Creation</p>
          </div>
          <div className="card">
            <h3 className="card-title">
              End-to-end, done-for-you Content Marketing
            </h3>
            <p className="card-description">
              Get the benefits of owning a content marketing team without the
              hassle.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Show your expertise and knowledge</h3>
            <p className="card-description">
              Create content around your products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Marketing Guide */}
      <section className="marketing-guide">
        <h2 className="section-title">
          Does Content Marketing for Solar Power Businesses actually work?
        </h2>
        <p className="content">
          YES, it does. If you are a local solar company, we recommend Local SEO
          for Solar Power Businesses. If you are an Ecom solar business, we
          recommend the Ecom Marketing Guide.
        </p>
        <button className="cta-button">
          Get your Solar Marketing Guide PDF for FREE!
        </button>
        <button className="cta-button">Get Solar Marketing Tactics</button>
      </section>

      {/* Marketing Analysis */}
      <section className="analysis">
        <h2 className="section-title">Get a Zero-Cost Marketing Analysis</h2>
        <p className="content">Customized for your Solar Power Business.</p>
        <button className="cta-button">Start Your Marketing Analysis!</button>
      </section>

      {/* Get Customers */}
      <section className="get-customers">
        <h2 className="section-title">
          Book your time for us to figure out how we can bring consistent
          customers for you.
        </h2>
        <button className="cta-button">Get Customers</button>
      </section>

      {/* Still Have Questions */}
      <section className="faq">
        <h2 className="section-title">Still have unanswered questions?</h2>
        <p className="content">
          Mail me your question and I’ll send the best answer from my end.
        </p>
      </section>
    </div>
  );
};

export default Home2;
