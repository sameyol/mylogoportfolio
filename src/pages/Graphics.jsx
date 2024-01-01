import React from "react";
import Navbar from "../components/Navbar";
import { logo, items } from "../assets/data";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Graphics = () => {
  return (
    <section>
      <nav className="flex flex-col md:flex-row justify-evenly items-center m-3">
        <h2>SAM EYO</h2>
        <Link to="/" className="text-xl px-4 py-2 rounded-3xl my-3">
          Home
        </Link>
        <a
          href="tel:+2348165293571"
          className="flex items-center justify-center  bg-white px-4 py-2 rounded-3xl text-black "
        >
          <FaPhoneAlt className="mr-1" />
          Contact Me
        </a>
      </nav>
      <div className="graphics flex flex-col items-center justify-center m-3 md:mx-12 ">
        <h2 className="text-2xl md:text-4xl text-justify mb-8" am>
          Welcome to my portfolio, where I take you on a visual journey through
          the world of design. I'm Sam Eyo, and I invite you to explore a
          collection of my creative endeavors that span various aspects of
          graphic design.
        </h2>
        <p className="text-lg text-justify pb-4">
          Take your time to explore the sections of my portfolio to get a
          glimpse of my design style and the thought processes that went into
          each project. Each piece of work presented here is a testament to my
          dedication and love for the craft.
        </p>
        <p className="text-lg text-justify pb-4">
          Many of these projects were brought to life through collaboration with
          clients who shared their visions with me. Working closely with them, I
          aimed to not only meet but exceed their expectations, making their
          ideas a visual reality
        </p>
      </div>
      <div className="graphicsWorks">
        <div className="logo">
          <h1 className="text-3xl my-12 text-center">LOGO</h1>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4">
            {logo.map((item) => (
              <img className="worksImg" key={item.id} src={item.image} alt="" />
            ))}
          </div>
        </div>
        {/* <div className="graphicsWork">
          <h1 className="text-3xl my-12 text-center">Other Works</h1>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <img className="worksImg" key={item.id} src={item.image} alt="" />
            ))}
          </div>
        </div> */}
      </div>
      <Contact />
      <Footer />
    </section>
  );
};

export default Graphics;
