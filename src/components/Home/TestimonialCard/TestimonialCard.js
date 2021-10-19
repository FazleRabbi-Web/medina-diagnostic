import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = (props) => {
  const { name, designation, description, img } = props.testimonial;

  return (
    <div className="mb-3 col-lg-4 col-sm-6">
      <div className="card shadow-lg w-100 h-100 text-center rounded">
        <div className="card-body">
          <img src={img} alt="" />
          <h5 className="card-title">{name}</h5>
          <small className="text-secondary">{designation}</small>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <div
            style={{ color: "#2684b5" }}
            className="d-flex align-items-center justify-content-center "
          >
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
