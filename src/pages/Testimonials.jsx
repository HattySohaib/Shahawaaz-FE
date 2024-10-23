import React from "react";
import "./Testimonials.css";
function Testimonials() {
  return (
    <div className="testimonials">
      <h3 className="section-title">Testimonials from my clients.</h3>
      <div className="testimonial">
        <p className="testimonial-msg">
          Sahabaj's writings have a wonderful fluency. His pieces on
          Relationship and Lifestyle are a must read. The research that he puts
          into developing a piece is reflected well in the piece.
        </p>
        <h4 className="testimonial-provider">Rupal Bohra</h4>
        <p className="testimonial-org">Gigglyhub</p>
      </div>
      <div className="testimonial">
        <p className="testimonial-msg">
          Sahabaj is a great copywriter. His copies possess a momentum that
          hooks the readers. His other superpower is storytelling.
        </p>
        <h4 className="testimonial-provider">Sudip Mehra</h4>
        <p className="testimonial-org">Adnator</p>
      </div>
    </div>
  );
}

export default Testimonials;
