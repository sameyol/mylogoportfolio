import "../styles/Intro.css";
import pic from "../assets/myPic.png";
import { FaBriefcase } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello siz">Hello</span>
        <span className="introText">
          I'm <span className="introName">Samuel Eyo</span>
        </span>
        <p className="introPara mb-8">
          I am a skilled Web Developer and Graphics Designer <br /> with
          experience in creating visually appealing <br /> and user friendly
          designs{" "}
        </p>
        
        <a href="mailto:usamueleyo@gmail.com">
          {" "}
          <button className="flex text-2xl items-center rounded-full bg-white text-black px-4 py-2">
            <FaBriefcase /> Hire Me
          </button>
        </a>
      </div>
      <img src={pic} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
