import React from "react";
import Classes from'./intro.module.css';
import '../assets/BgImage.png';
import '../assets/nextButton.png';
import '../assets/back.png';
import"../assets/cloud.png";
import heddingImage from "../assets/Heading 1 intro.png";
import { useNavigate } from "react-router-dom";
function Intro(){
    const navigate = useNavigate();
    const handleClickback = () => {
        navigate("/");
      };
      const handleClick = () => {
        navigate("/ready");
      };
return(
    <div className={Classes.mainDiv}>
        
        <div className={Classes.image}>
        
        </div>
        <div className={Classes.monkey}></div>
        <div className={Classes.homeNext}onClick={handleClick}></div>
        <button className={Classes.back} onClick={handleClickback}></button>
        <div className={Classes.homeCloud}>
        <img className="w-[70%] mt-[-50px]" src={heddingImage} alt="Life Skills" />
        </div>
    </div>
)
}
export default Intro;