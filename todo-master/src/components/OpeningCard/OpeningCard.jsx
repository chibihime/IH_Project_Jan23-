import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./OpeningCard.css";

const OpeningCard = (props) => {
  const [toggleAns, setToggleAns] = useState(false);

  const toggleHandler = () => {
    if(toggleAns == false){
        setToggleAns(true);
    }else{
        setToggleAns(false);
    }
    
  };

  return (
    <>
      <div className="opening__container">
        <div className="opening__container-show">
        <AiOutlinePlus id = "symbol" className = {toggleAns ? "container__plus": ""} size={30} onClick={toggleHandler} />
        <h2>{props.content}</h2>
        </div>
        

        {toggleAns && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis deserunt assumenda inventore provident officiis neque
            labore saepe ut accusamus tenetur?
          </p>
        )}
      </div>
    </>
  );
};

export default OpeningCard;
