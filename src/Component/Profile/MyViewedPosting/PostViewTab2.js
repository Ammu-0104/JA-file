import React from 'react';
import PropTypes from 'prop-types';
import PVRightTick from '../../../assets/images/PVRightTick.svg';
import PVPipeCircle from '../../../assets/images/PVPipeCircle.svg';
import PVPipeRecject from '../../../assets/images/PVPipeRecject.svg';


const PostViewTab2 = () => {
  // JSON data
  const todayData = [
    {
      label1: "Applied",
      date1: "March 03, 2024 at 3.05 PM",
      iconImg: PVRightTick,
    },
    {
      label1: "Reviewed",
      date1: "March 04, 2024 at 12.30 PM",
      iconImg: PVRightTick,
    },
    {
      label1: "Shortlisted",
      date1: "March 04, 2024 at 2.00 PM",
      iconImg: PVRightTick,
    },
    {
      label1: "Interview",
      date1: "In Progress",
      iconImg: PVPipeCircle,
      className:'dotSize',

    },
    {
      label1: "Hire",
      date1: "Reject",
      iconImg: PVPipeRecject,
      className:'dotSize',

    }
  ];

  return (
    <div>
      <div className="postHiringPipe">
        <div className="postHireHeading pb-4">
          <h1 className="postSummary pb-2">Software Developer</h1>
          <p className="postHirePara">Published on March 02, 2024 at 3.00 PM</p>
        </div>
        <div className="postHireUl">
          <ul className="postStepsList">
            {todayData.map((step, index) => (
              <li key={index} className="postHireStep">
                <div className="postHireContent">
                  <div className="postStepIcon">
                    <img src={step.iconImg} className={`postHireImg ${step.className}`} alt=""/>
                  </div>
                  <div className="postStepDetails">
                    <p className="postStepLabel">{step.label1}</p>
                    <p className="postStepDate">{step.date1}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

PostViewTab2.propTypes = {
  steps: PropTypes.array
};

export default PostViewTab2;
