import React from "react";
import Testimonials from "../Testimonials/Testimonials";

const About = () => {
  return (
    <section className="my-5 container">
      <div className="row">
        <div className="col-md-5 mb-3">
          <img
            className="img-fluid"
            src="https://cdn.discordapp.com/attachments/899907831975792640/899907877454635058/background-04-1920x980.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 mb-2">
          <h4>A Few Words About Us</h4>
          <p>
            Etiam et imperdiet quam. In sit amet finibus lorem, ac ultricies
            enim. Aliquam volutpat enim diam, vitae elementum ipsum tempor sit
            amet. Ut pellentesque sem nulla, in blandit leo viverra a. Phasellus
            et lacus mattis, tincidunt metus sodales, tincidunt urna. Cras felis
            neque, iaculis vitae varius eu, luctus consectetur odio. Phasellus
            non luctus justo, eu fringilla tortor. Aenean ornare sem sit amet
            rhoncus tincidunt. Cras tempor eu enim id pulvinar. Proin at
            imperdiet felis, vel vehicula neque. Nulla quis nisl facilisis ex
            dignissim euismod eu vel neque. Proin accumsan ultricies tincidunt.
            Morbi semper enim a nulla vulputate pellentesque. Sed nulla tellus,
            gravida vel placerat vel, euismod at neque. Maecenas commodo viverra
            efficitur.
          </p>
        </div>
        <Testimonials></Testimonials>
      </div>
    </section>
  );
};

export default About;
