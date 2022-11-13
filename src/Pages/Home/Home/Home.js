import React from "react";
import AppointmentSection from "../AppointmentSection/AppointmentSection";
import InfoCards from "../Cards/InfoCards";
import ContactForm from "../ContactForm/ContactForm";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <InfoCards></InfoCards>
      <Services></Services>
      <Intro></Intro>
      <AppointmentSection></AppointmentSection>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </>
  );
};

export default Home;
