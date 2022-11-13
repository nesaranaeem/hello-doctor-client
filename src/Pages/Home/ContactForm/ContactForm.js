import React from "react";
import contactBG from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
const ContactForm = () => {
  return (
    <section>
      <form
        className="hidden lg:grid  grid-cols-1 gap-5 justify-items-center py-10"
        style={{
          background: `url(${contactBG})`,
        }}
      >
        <h4 className="text-lg text-primary font-bold">Contact Us</h4>
        <h1 className=" text-white text-4xl font-bold">
          Stay connected with us
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-accent w-full max-w-xs"
          placeholder="Your message"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </section>
  );
};

export default ContactForm;
