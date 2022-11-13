import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
const Intro = () => {
  const introTitle = "Exceptional Dental Care, on Your Terms";
  const introDescription =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page";
  return (
    <section>
      <div className="hero bg-base-200 mt-14">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{introTitle}</h1>
            <p className="py-6">{introDescription}</p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
