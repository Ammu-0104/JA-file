import React, { useState } from "react";
import "../jobposting.css";
import Add from "../../../../assets/images/add.png";
import PostUpload from '../../../../assets/images/postUpload.svg';
import { InputText } from "primereact/inputtext";
import { ToggleButton } from "primereact/togglebutton";

const JobPostStep3 = () => {
  function Hire({ id, onLabel, offLabel, onIcon, offIcon, className }) {
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
      setChecked(e.value);
    };

    return (
      <div className="post_btnHover">
        <ToggleButton
          id={id}
          onLabel={onLabel}
          offLabel={offLabel}
          onIcon={onIcon}
          offIcon={offIcon}
          checked={checked}
          onChange={handleChange}
          className={`post_toggleButton ${checked ? 'post_toggleButtonChecked' : ''} ${className}`}
        />
      </div>
    );
  }

  function Communication({
    id,
    onLabel,
    offLabel,
    onIcon,
    offIcon,
    className,
  }) {
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
      setChecked(e.value);
    };

    return (
      <div className="post_btnHover">
        <ToggleButton
          id={id}
          onLabel={onLabel}
          offLabel={offLabel}
          onIcon={onIcon}
          offIcon={offIcon}
          checked={checked}
          onChange={handleChange}
          className={`post_toggleButton ${checked ? 'post_toggleButtonChecked' : ''} ${className}`}
        />
      </div>
    );
  }
  return (
    <div>
      <div className="post_stepCard">
        <h1 className="post_aboutthepost">About Company</h1>

        <h3 className="post_aboutHeading">
          Company / Consultancy Name
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="">
              <InputText
                placeholder="Add Company name"
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Company / Consultancy Logo
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="p-input-icon-right">
              <InputText
                placeholder="Upload Company logo"
                className="post_textSize"
              />
              <img className="post_uploadIcon post_updLogo" src={PostUpload} alt="upload" />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Company / Consultancy URL
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="">
              <InputText
                placeholder="Add company URL"
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Company Headquarters / Consultancy Address
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="">
              <InputText
                className="post_landmark"
                placeholder="Add company address and mention the Landmark near your office"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Company / Consultancy Overview
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="">
              <InputText
                placeholder="Add an Overview about your company in detail"
                className="post_textArea"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Recruiter Name
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="">
              <InputText
                placeholder="Add Recruiter name / designation"
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Recruiter Contact Number
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="">
              <InputText
                placeholder="Add Recruiter name"
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Upload an Official Business document
        </h3>
        <div className="post_aboutPad">
          <div>
            <span className="p-input-icon-right">
              <textarea className="post_textArea"
                placeholder="Provide a scan, image, or electronic copy of an acceptable document,such as
                             articles of incorporation, business license or Company liability insurance"
              />
              <img className="post_uploadIcon" src={PostUpload} alt="upload" />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Communication Preferences
        </h3>
        <p className="post_abtPad">
          Allow candidates to Communicate through
        </p>

        <div className="post_aboutPart">
          <Communication
            id="toggleButton1"
            onLabel="Call"
            offLabel="Call"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Communication
            id="toggleButton2"
            onLabel="Email"
            offLabel="Email"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Communication
            id="toggleButton3"
            onLabel="Message"
            offLabel="Message"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

       
          <div className="post_box">
            <span className="">
              <InputText
                placeholder="Add Phone Number to communicate"
                className="post_textSize"
              />
            </span>
          </div>
    

       
          <div  className="post_box">
            <span className="">
              <InputText
                placeholder="Add email ID to send daily updates"
                className="post_textSize"
              />
            </span>
          </div>
       

        <div className="post_aboutPad">
          <h3 className="post_addEmail">
            <img
              src={Add}
              alt="add button"
              className="post_addIcon"
            />
            Add email ID
          </h3>
        </div>

        <h3 className="post_aboutHeading">
          Willing to hire candidates within
        </h3>

        <div className="post_aboutPart">
          <Hire
            id="toggleButton1"
            onLabel="1 to 3 days"
            offLabel="1 to 3 days"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Hire
            id="toggleButton2"
            onLabel="1 Week"
            offLabel="1 Week"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Hire
            id="toggleButton3"
            onLabel="2 Weeks"
            offLabel="2 Weeks"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Hire
            id="toggleButton4"
            onLabel="3 Weeks"
            offLabel="3 Weeks"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Hire
            id="toggleButton5"
            onLabel="1 Month"
            offLabel="1 Month"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <div className="post_addSkillsContainer">
            <h3 className="post_addEmail">
              <img
                src={Add}
                alt="add button"
                className="post_addIcon"
              />
              Add Key Skills
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostStep3;
