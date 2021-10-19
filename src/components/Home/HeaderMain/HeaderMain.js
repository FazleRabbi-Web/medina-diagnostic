import React from "react";
const HeaderMain = () => {
  return (
    <main>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.discordapp.com/attachments/899735448845418517/899735628646866994/slide-01.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h1>
                Take Care of <br /> Your Health
              </h1>
              <p>
                At Medina, we are dedicated to diagnosing all kinds of diseases.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.discordapp.com/attachments/899735448845418517/899735629397622804/slide-02.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h1>
                Years of <br /> Experience
              </h1>
              <p>
              Since our foundation, we've been delivering diagnostic solutions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.discordapp.com/attachments/899735448845418517/899735630706270248/slide-03.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h1>Qualified Team <br />of Experts</h1>
              <p>
              Our team of diagnosticians is always ready to help you be healthier.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default HeaderMain;
