import React from "react";
import Classes from'./Home.module.css';
import '../assets/HappyMon.png';
import"../assets/BgImage.png";
import '../assets/Start.png';
import"../assets/cloud.png";
import heddingImage from "../assets/Heading 1 → life-skills.png";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/intor1");
      };
return(
    <div className={Classes.mainDiv}>
        
        <div className={Classes.image}>
        <p className="text-[25px] font-[600] text-[#fff]">Welcome to the Matching Game Project!</p>
        </div>
        <div className={Classes.monkey}>
          
        </div>
        <div className={Classes.homeNext} onClick={handleClick}></div>
        <div className={Classes.homeCloud}>
        <img className="w-[70%] mt-[-50px]" src={heddingImage} alt="Life Skills" />
        </div>
    </div>
)
}
export default Home;