import React from "react";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";
import Services from "../services/services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container my-3 py-3">
        <h1 className="text-center">
          What Makes Us <span className="text-info">Different</span>{" "}
        </h1>
        <div className="text-center row">
          <div className="mt-3 col-lg-4 col-sm-6">
            <img
              src="https://cdn.discordapp.com/attachments/899735448845418517/899735716710469732/icon-pills-xl.png"
              alt=""
            />
            <h4>Qualified Specialists</h4>
            <p className="text-secondary">
              We hire the best specialists to deliver top-notch diagnostic
              services for you.
            </p>
          </div>
          <div className="mt-3 col-lg-4 col-sm-6">
            <img
              src="https://cdn.discordapp.com/attachments/899735448845418517/899735712897859604/icon-doctor-xl.png"
              alt=""
            />
            <h4>Modern Equipment</h4>
            <p className="text-secondary">
              We use the first-class medical equipment for timely diagnostics of
              various diseases.
            </p>
          </div>
          <div className="mt-3 col-lg-4 col-sm-6">
            <img
              src="https://cdn.discordapp.com/attachments/899735448845418517/899735714340700200/icon-medical-car-xl.png"
              alt=""
            />
            <h4>Emergency Diagnostics</h4>
            <p className="text-secondary">
              Our emergency diagnostics services help you get the most accurate
              diagnosis in a minimal time.
            </p>
          </div>
        </div>
      </div>
      <Services></Services>
      <Contacts />
      <Testimonials />
    </div>
  );
};

export default Home;
