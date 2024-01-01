import "../styles/Contact.css";
import React, { useRef } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gr94ss",
        "template_e818ocw",
        form.current,
        "TpvlaKT84Cl8XwaWK"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactPage">
      <div id="contact" className="flex flex-col items-center justify-center">
        <h1 className="contactPageTitle text-4xl mb-4">Contact Me</h1>
        <span className="contactDesc text-center">
          Please fill out the form below to discuss any work opportunities
        </span>
        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" required />
        </form> */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contactForm flex flex-col items-center justify-center w-11/12"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="name text-base w-full m-2 py-2 px-4 text-white border-none rounded-lg "
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="email text-base w-full m-2 py-2 px-4 text-white border-none rounded-lg "
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="msg text-base w-full m-2 py-2 px-4 text-white border-none rounded-lg "
            rows="5"
            required
          ></textarea>
          <input type="submit" value="Send" className="submitBtn bg-white border-none rounded-lg m-8 py-3 px-12 text-black cursor-pointer" />
          
          <div className="links flex flex-wrap justify-evenly">
            <a
              href="https://web.facebook.com/princesammy.eyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/+2348165293571"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://sameyol.t.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.instagram.com/sameyol4real/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="mailto:usamueleyo@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+2348165293571">
              <FaPhoneAlt />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
