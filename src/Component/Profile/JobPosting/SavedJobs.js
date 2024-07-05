import React, { useEffect, useState } from "react";
import cardsData from "../../../Data/CardsDataJson";
import data from "../../../Data/DataJson";
import "../../Profile/JobListing/jobListing.css";

const SavedJobsOne = ({ onSearch }) => {
  const todayData = cardsData.slice(17, 20);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cards, setCards] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setCards(cardsData);
    setJobs(data);
  }, []);

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className="cardContainerSave">
        {todayData.map((item, index) => (
          <div key={index} className="save_cont">
            <div className="save_subCont">
              <img className="save_img" src={item.image1} alt="" />
              <span className="save_subtitle">{item.subtitle1}</span>
            </div>
            <div>
              <h5 className="save_title">{item.title1}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobsOne;
