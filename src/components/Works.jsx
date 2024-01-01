import "../styles/Works.css"
import { Link } from "react-router-dom";
import img1 from "../assets/MyDesigns/img.jpg"
import img3 from "../assets/MyDesigns/img24.jpg"
import img4 from "../assets/MyDesigns/img11.jpg"
import img5 from "../assets/MyDesigns/img38.jpg"
import img6 from "../assets/MyDesigns/img31.jpg"
import img7 from "../assets/MyDesigns/img17.jpg"
import img8 from "../assets/MyDesigns/img25.jpg"
import img9 from "../assets/MyDesigns/img47.jpg"
import img2 from "../assets/MyDesigns/img1.png"

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc mb-8">
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experiences to help business achieve their goals and create a strong online presence.
        </span>
        <div className="worksImgs">
            <img src={img1} alt="" className="worksImg" />
            <img src={img2} alt="" className="worksImg" />
            <img src={img3} alt="" className="worksImg" />
            <img src={img4} alt="" className="worksImg" />
            <img src={img5} alt="" className="worksImg" />
            <img src={img6} alt="" className="worksImg" />
            <img src={img7} alt="" className="worksImg" />
            <img src={img8} alt="" className="worksImg" />
            <img src={img9} alt="" className="worksImg" />
        </div>
        <Link to="/graphics" className="workBtn text-black">See More</Link>
    </section>
  )
}


export default Works