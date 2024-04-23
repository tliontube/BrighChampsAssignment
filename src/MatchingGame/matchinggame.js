import React, { useState } from "react";
import "./matching.css";
import blueCard from "../assets/cardBH.png";
import redCard from "../assets/cardRH.png";
import VectorT from "../assets/VectorT.png";
import VectorB from "../assets/Vectorb.png";
import nextButton from "../assets/nextButton.png";
import "../assets/WinImg.png";
import yesOk from "../assets/Yes,Ok.png";
import SadMonk from "../assets/SadMon.png";
import HappyMon from "../assets/WinMonkey.png";
import "../assets/BgImage.png";
import { useNavigate } from "react-router-dom";
const redCards = [
  { fruit: "apple", icon: "🍎" },
  { fruit: "pineapple", icon: "🍍" },
  { fruit: "orange", icon: "🍊" },
  { fruit: "banana", icon: "🍌" },
  { fruit: "grape", icon: "🍇" },
  { fruit: "mango", icon: "🥭" },
];

const blueCards = [
  { fruit: "apple", icon: "🍎", letter: "A" },
  
  { fruit: "banana", icon: "🍌", letter: "B" },
  { fruit: "pineapple", icon: "🍍", letter: "P" },
  { fruit: "orange", icon: "🍊", letter: "O" },
  { fruit: "mango", icon: "🥭", letter: "M" },
  { fruit: "grape", icon: "🍇", letter: "G" },
 
];

const MatchingGame = () => {
  const [selectedRedCard, setSelectedRedCard] = useState(null);
  const [selectedBlueCard, setSelectedBlueCard] = useState(null);
  const [moves, setMoves] = useState(6);
  const [completed, setCompleted] = useState([]);
  const [isMatched, setIsMatched] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const selectRedCard = (data) => {
    if (!selectedRedCard) {
      setSelectedRedCard(data);
    }
  };

  const selectBlueCard = async (data) => {
    if (!selectedBlueCard && selectedRedCard) {
      setSelectedBlueCard(data);

      setTimeout(() => {
        if (selectedRedCard.fruit !== data.fruit) {
          setSelectedRedCard(null);
          setSelectedBlueCard(null);
          setMoves(moves - 1);
          if (moves === 1 && completed.length !== 5) {
            setShowModal(true);
            setIsWin(false);
          }
        } else {
          if (completed.length === 5) {
            setShowModal(true);
            setIsWin(true);
            return;
          }
          setCompleted([...completed, data.fruit]);
          setIsMatched(true);
        }
      }, 1000);
    }
  };
  const navigate = useNavigate();
  const handleModalButtonClick = () => {
    setShowModal(false);
    setMoves(6);
    setCompleted([]);
    setIsMatched(false);
    setSelectedRedCard(null);
    setSelectedBlueCard(null);
    navigate("/");
  };
  return (
    <div className="w-full h-full flex items-center justify-center relative mainDivGame">
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-30 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-md bg-opacity-0">
              {isWin ? (
                <>
                  <div className="winImage">
                    <img src={HappyMon} className="position: absolute w-[200px] mt-[13.5em] ml-[80px]"/>
                  </div>
                  <img src={yesOk} className="position: absolute w-[280px] mt-[-80px] ml-[35px] cursor-pointer" onClick={handleModalButtonClick}/>
                </>
              ) : (
                <>
                <img src={SadMonk} className="position: absolute w-[280px] mt-[-80px] ml-[15px]"/>
                  <h2 className="text-[24px] font-[800] mt-[9em] text-[#FFCF25]">Better Luck Next Time!</h2>

                  <p className="text-[15px] flex justify-center items-center mt-[5px] text-[#FFCF25]">You ran out of moves!</p>
                  <img src={yesOk} className="position: absolute w-[280px] mt-[10px]  ml-[5px] cursor-pointer" onClick={handleModalButtonClick}/>
                </>
              )}
             
            </div>
          </div>
        </div>
      )}
      {isMatched && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <button
            onClick={() => {
              setIsMatched(false);
              setSelectedRedCard(undefined);
              setSelectedBlueCard(undefined);
            }}
          >
            <img
              src={nextButton}
              alt="start"
              className="w-[300px] absolute bottom-5 right-5 hover:scale-110 transition cursor-pointer"
            />
          </button>
          <div className=" z-30 flex gap-14 relative">
            <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-[110px] animated-rotate animated-slide-in-left">
              {selectedRedCard?.icon}
            </div>
            <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md text-green-600 w-[190px] h-[240px] mt-2 flex items-center justify-center text-[110px] animated-slide-in-right translate-y-[30%]">
              {selectedBlueCard?.letter}
            </div>
          </div>
        </div>
      )}
      <div className=" flex gap-14">
        <div className="grid grid-cols-3 relative ">
          {!selectedBlueCard && !selectedRedCard && completed.length === 0 && (
            <div className="absolute -top-24 right-20 animate-bounce z-10">
              <img className="" src={VectorT} alt="arrow" />
            </div>
          )}
          {redCards.map((cardData) => {
            const isSelected =
              selectedRedCard && selectedRedCard.fruit === cardData.fruit;
            const isCompleted = completed.includes(cardData.fruit);
            return (
              <div
                key={cardData.fruit}
                onClick={() => selectRedCard(cardData)}
                className={`transition transform ${
                  isCompleted ? "invisible" : ""
                } ${!selectedRedCard ? "hover:scale-110" : ""} card ${
                  isSelected ? "flipped" : ""
                }`}
              >
                {selectedRedCard && selectedRedCard.fruit === cardData.fruit ? (
                  <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-[110px]">
                    {cardData.icon}
                  </div>
                ) : (
                  <img src={redCard} alt="card" />
                )}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 relative">
          {selectedRedCard && !selectedBlueCard && completed.length === 0 && (
            <div className="absolute -bottom-24 left-20">
              <img className="animate-bounce" src={VectorB} alt="arrow" />
            </div>
          )}
          {blueCards.map((cardData) => {
            const selected =
              selectedBlueCard && cardData.fruit === selectedBlueCard.fruit;
            const isCompleted = completed.includes(cardData.fruit);
            return (
              <div
                key={cardData.fruit}
                onClick={() => selectBlueCard(cardData)}
                className={`transition ${isCompleted ? "invisible" : ""} ${
                  selectedRedCard && !selectedBlueCard ? "hover:scale-110" : ""
                } card ${selected ? "flipped" : ""}`}
              >
                {selected ? (
                  <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md text-green-800 w-[190px] h-[240px] mt-2 flex items-center justify-center text-[110px] scale-x-[-1]">
                    {cardData.letter}
                  </div>
                ) : (
                  <img src={blueCard} alt="card" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-3 bg-sky-400 opacity-85 absolute top-4 right-4 text-white rounded-3xl text-2xl font-bold border-white border-4">
        Wrong Moves Left : {moves}
      </div>
    </div>
  );
};
export default MatchingGame;