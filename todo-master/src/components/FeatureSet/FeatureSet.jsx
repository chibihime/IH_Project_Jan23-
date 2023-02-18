import React from "react";
import Content from "../Content/Content";
import images from '../../image'

import './features.css'

const FeatureSet = () => {
  const data = [
    {
      start_para: "Store tasks",
      heading: "Jot Down",
      yellow: "Your tasks",
      content:
        "Click - write - enter. As easy as it gets. Filled with the features you need, free from the over complication you dont want.",
    },
    {
      start_para: "Schedule tasks",
      heading: "Tell Us When",
      yellow: "To Remind You",
      content:
        "A simple scheduler helps everyone to be on track of tasks that need completion at a deadline. Select a time and a date, and never miss a deadline again!",
    },
    {
      start_para: "Categorise tasks",
      heading: "Set colors",
      yellow: "For sections",
      content:
        "Select and assign beautiful colors to your tasks for categorizing them, and never lose the track of any task’s family.",
    },
  ];
  console.log(data[0].start_para);
  return (
    <>
      <div id = "features" className="feature__container">
        <div className="feature__container-top">
          <div className="wrapper top">
            <Content
              start_para={data[0].start_para}
              heading={data[0].heading}
              yellow={data[0].yellow}
              content={data[0].content}
            />
          </div>
          <img src={images.header} alt="feature_img" />
        </div>
        <div className="feature__container-middle">
        <img src={images.feature2} alt="feature_img" />
          <div className="wrapper mid">
            <Content
              start_para={data[1].start_para}
              heading={data[1].heading}
              yellow={data[1].yellow}
              content={data[1].content}
            />
          </div>
        </div>
        <div className="feature__container-end">
          <div className="wrapper bot">
            <Content
              start_para={data[2].start_para}
              heading={data[2].heading}
              yellow={data[2].yellow}
              content={data[2].content}
            />
          </div>

          <img src={images.feature3} alt="feature_img" />
        </div>

        <ul className="featuers_container-footer">
            <li>Simple</li>
            <li>Efficient</li>
            <li>Feature rich</li>
            <li>User-friendly</li>
        </ul>

      </div>
    </>
  );
};

export default FeatureSet;
