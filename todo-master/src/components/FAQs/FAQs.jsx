import React from "react";

import OpeningCard from "../OpeningCard/OpeningCard";

import "./FAQs.css";

const FAQs = () => {
  const data = [
    {
      question: "What’s the pricing system?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae?",
    },
    {
      question: "Where does my data go?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae?",
    },
    {
      question: "Is there a dark mode?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae?",
    },
    {
      question: "How many tasks can I store?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae?",
    },
    {
      question: "What do I do if my account crashes?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae?",
    },
  ];

  const cards = data.map((item) => <OpeningCard content={item.question} />);

  return (
    <div id = "faq" className="faq__container">
      <div className="faq__container-content">
        <h1>FAQ</h1>
        {cards}
      </div>

      <div className="faq__container-links">
        <p>If you have any further queries, feel free to reach out to us on <span className="blackText">this email!</span></p>
        <p>All Rights Reserved @our_team_name</p>
      </div>
    </div>
  );
};

export default FAQs;
