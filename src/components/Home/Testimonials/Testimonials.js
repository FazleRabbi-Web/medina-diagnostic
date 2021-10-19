import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("./testimonials.json")
      .then((res) => res.json())
      .then((reviews) => {
        setTestimonials(reviews);
      });
  }, []);

  return (
    <section className="my-5 bg-light" id="testimonials">
      <div className="container">
        <h1 className="text-center">
          Patient's<span style={{ color: "#2684b5" }}> Testimonials</span>
        </h1>
        <div className="row">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial}></TestimonialCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
