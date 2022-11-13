import React from "react";
import chair from "../../../assets/images/chair.png";
import heroBg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
const Hero = () => {
  const heroTitle = "Your New Smile Starts Here";
  const heroDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the";
  return (
    <section className="my-5">
      <div
        className="hero"
        style={{
          background: `url(${heroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">{heroTitle}</h1>
            <p className="py-6">{heroDescription}</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
