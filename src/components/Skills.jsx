import "../styles/Skills.css";
import {FaCode} from "react-icons/fa"
import {SiTaichigraphics} from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do?</span>
      <span className="skillDesc"> I am a skilled and passionate Web Developer / Graphics Designer with experience in HTML, CSS, JavaScript, React, Node and MongoDB, as well as design software such as Adobe Photoshop and Corel Draw</span>
      <div className="skillBars">
        <div className="skillBar">
            <SiTaichigraphics className="text-9xl mr-4"/>
            <div className="skillBarText">
                <h2>Graphics Design</h2>
                <p>Design is not just a profession for me; it's a passion that fuels my creativity and innovation. Each project I undertake is an opportunity to blend aesthetics and functionality, resulting in eye-catching and impactful design solutions.</p>
            </div>
        </div>
        <div className="skillBar">
            <FaCode className="text-9xl mr-4"/>
            <div className="skillBarText">
                <h2>Web Developer</h2>
                <p>Design, for me, is not merely about making things look beautiful; it's about solving problems. Whether it's crafting a compelling brand identity, designing an intuitive user interface, or creating captivating illustrations, I approach each project with a problem-solving mindset.</p>
            </div>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;
