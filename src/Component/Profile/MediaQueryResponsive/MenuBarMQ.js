import React, { useState } from "react";
import { MegaMenu } from "primereact/megamenu";
import kodukkuLogo from "../../../../assets/images/klogo.svg";
import imageUrl1 from "../../../../assets/images/logo2.png";
import imageUrl2 from "../../../../assets/images/location.png";
import imageUrl3 from "../../../../assets/images/experience.png";
import "../../../Profile/MyActivity/JobActivity.css";
import "../../JobListing/jobListing.css";

export default function MenuBar() {
  const [activeButton, setActiveButton] = useState("seeking");

  const handleToggle = (button) => {
    setActiveButton(button);
  };

  const items = [
    {
      label: "Enter Skills, Designation, etc",
      icon: imageUrl1,
      items: [
        [
          {
            label: "Job Title",
            items: [
              { label: "Admin / Back Office" },
              { label: "Doctor" },
              { label: "Aviation / Aerospace" },
              { label: "Teacher" },
              { label: "Software Developer" },
            ],
          },
        ],
      ],
    },
    {
      label: "Location",
      icon: imageUrl2,
      items: [
        [
          {
            label: "Popular Cities",
            items: [
              { label: "Chennai" },
              { label: "Mumbai" },
              { label: "Bengaluru" },
              { label: "Delhi-NCR" },
              { label: "Kolkata" },
              { label: "Hyderabad" },
            ],
          },
        ],
      ],
    },
    {
      label: "Experience",
      icon: imageUrl3,
      items: [
        [
          {
            label: "Select Experience",
            items: [
              { label: "Fresher" },
              { label: "1 - 2 Years" },
              { label: "2 - 5 Years" },
              { label: "5 - 7 Years" },
              { label: "7 - 15 Years" },
              { label: "15+ Years" },
            ],
          },
        ],
      ],
    },
    {
      label: "Search Jobs",
    },
    {
      label: "Job Seeking",
    },
    { label: "Job Posting" },
  ];

  return (
    <div className="card mobile-menu">
      <img src={kodukkuLogo} alt="logo" className="menu-logo" />
      <MegaMenu model={items} breakpoint="960px" />
    </div>
  );
}
