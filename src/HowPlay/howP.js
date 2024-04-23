import React from "react";
import Classes from'./howP.module.css';
import"../assets/BgImage.png";
import '../assets/Rectangle 160.png';
import '../assets/YesButton.png';
import '../assets/back.png';
import"../assets/cloud.png";
import"../assets/AppleBG.png";
import"../assets/Apple1.png";
import"../assets/blueCardH.png";
import "../assets/01.png";
import "../assets/02BG.png";
import "../assets/Cards2.png";
import vectorL from "../assets/VectorLong.png";
import "../assets/Rectangle3.png";
import num from "../assets/02.png";
import num3 from "../assets/03.png";
import heddingImage from "../assets/Content1.png";
import { useNavigate } from "react-router-dom";
function HowP(){
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/ready");
      };
      const handleClick = () => {
        navigate("/game");
      };
return(
    <div className={Classes.mainDiv}>
        
        <div className={Classes.image}>
        
        </div>
        <div className={Classes.monkeyDiv}>
        <div className={Classes.monkey}>
            <div className={Classes.bgImage}></div>
            <div className={Classes.content}>
                <img className="h-[7vh] mt-[-10px] flex justify-center" src={heddingImage} alt="1st"/>
            </div>
            <p className="text-[20px] text-[#A6C930] font-[800] mt-[8px]">It has images.</p>
        </div>
        <div className={Classes.bgImage1}></div>
        <div className={Classes.bgImage2}></div>
        <div className={Classes.monkey1}>
        
            <div className={Classes.bgImageM2}></div>
            <div className={Classes.content}>
                <img className="h-[7vh] mt-[-10px] flex justify-center" src={heddingImage} alt="1st"/>
            </div>
            <p className="text-[20px] text-[#A6C930] font-[800] mt-[8px]">It has images.</p>
        
        </div>
        <div className={Classes.bgImage3}><img src={num}/></div>
        <div className={Classes.monkey2}>
        <div className={Classes.bgImage5}></div>
            <div className={Classes.content}>
                <img className="h-[7vh] mt-[-10px] flex justify-center" src={heddingImage} alt="1st"/>
            </div>
            <p className="text-[20px] text-[#A6C930] font-[800] mt-[8px]">It has images.</p>
        </div>
        </div>
        <div className={Classes.bgImage7}><img src={num3}/></div>
        <div className={Classes.homeNext} onClick={handleClick}></div>
        <div className={Classes.vectorLong}><img src={vectorL} alt="vector"/></div>
        <button className={Classes.back} onClick={handleClickBack}></button>
        
    </div>
)
}
export default HowP;