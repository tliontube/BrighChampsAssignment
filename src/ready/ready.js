import React from "react";
import Classes from'./ready.module.css';
import"../assets/BgImage.png";
import '../assets/HappyMon.png';
import '../assets/YesButton.png';
import '../assets/back.png';
import"../assets/cloud.png";
import heddingImage from "../assets/Heading 1 → Ready.png";
import { useNavigate } from "react-router-dom";
function Ready(){
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/intor1");
      };
      const handleClick = () => {
        navigate("/info");
      };
return(
    <div className={Classes.mainDiv}>
        
        <div className={Classes.image}>
        
        </div>
        <div className={Classes.monkey}></div>
        <div className={Classes.homeNext} onClick={handleClick}></div>
        <button className={Classes.back} onClick={handleClickBack}></button>
        <div className={Classes.homeCloud}>
        <img className="w-[70%] mt-[-50px]" src={heddingImage} alt="Life Skills" />
        </div>
    </div>
)
}
export default Ready;