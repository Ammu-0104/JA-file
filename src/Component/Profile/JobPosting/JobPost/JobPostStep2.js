import React, { useState } from "react";
import "../../../../Component/Profile/JobPosting/jobposting.css";
import Add from "../../../../assets/images/add.png";
import { InputText } from "primereact/inputtext";
import { ToggleButton } from "primereact/togglebutton";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const JobPostStep2 = () => {
  function Candidate({ id, onLabel, offLabel, onIcon, offIcon, className }) {
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
          className={className}
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "14px" : "14px",
          }}
        />
      </div>
    );
  }

  function PreferredSkils({
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
          className={className}
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "14px" : "14px",
          }}
        />
      </div>
    );
  }

  function Gender({ id, onLabel, offLabel, onIcon, offIcon, className }) {
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
          className={className}
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "14px" : "14px",
          }}
        />
      </div>
    );
  }

  function Language({ id, onLabel, offLabel, onIcon, offIcon, className }) {
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
          className={className}
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "14px" : "14px",
          }}
        />
      </div>
    );
  }

  function Bonus({ id, onLabel, offLabel, onIcon, offIcon, className }) {
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
          className={className}
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "14px" : "14px",
          }}
        />
      </div>
    );
  }

  function Candidates({ id, onLabel, offLabel, onIcon, offIcon, className }) {
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
          className={className}
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "14px" : "14px",
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="post_stepCard">
        <h1 className="post_aboutthepost">Candidate Requirements</h1>

        <h3 className="post_aboutHeading">Candidate Minimum Qualification</h3>

        <div className="post_canReq post_aboutPad">
          <Candidate
            id="toggleButton1"
            onLabel="Below 10th Grade"
            offLabel="Below 10th Grade"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Candidate
            id="toggleButton2"
            onLabel="10th / 12th Grade"
            offLabel="10th / 12th Grade"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Candidate
            id="toggleButton3"
            onLabel="Under Graduate"
            offLabel="Under Graduate"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Candidate
            id="toggleButton4"
            onLabel="Post Graduate"
            offLabel="Post Graduate"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Candidate
            id="toggleButton5"
            onLabel="Diploma"
            offLabel="Diploma"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Candidate
            id="toggleButton6"
            onLabel="ITI"
            offLabel="ITI"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Candidate
            id="toggleButton7"
            onLabel="Skilled labour"
            offLabel="Skilled labour"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Candidate
            id="toggleButton8"
            onLabel="Unskilled labour"
            offLabel="Unskilled labour"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

        <h3 className="post_aboutHeading">Degree Specialization</h3>
        <div className="post_aboutPad">
          <div>
            <span>
              <InputText
                placeholder="Add required degree specialization"
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Specify Certifications If any required{" "}
          <span style={{ color: "#BBB9B9" }}>(Optional) </span>
        </h3>
        <div className="post_aboutPad">
          <div>
            <span>
              <InputText
                placeholder="Add certifications "
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">Preferred Skills</h3>

        <div className="post_preSkills post_aboutPad">
          <PreferredSkils
            id="toggleButton1"
            onLabel="Computer Knowledge"
            offLabel="Computer Knowledge"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <PreferredSkils
            id="toggleButton2"
            onLabel="Telecalling"
            offLabel="Telecalling"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <PreferredSkils
            id="toggleButton3"
            onLabel="Four Wheeler Driving"
            offLabel="Four Wheeler Driving"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <div className="post_keyCont">
            <h3 className="post_head3">
              <img className="post_add" src={Add} alt="add button" />
              Add Key Skills
            </h3>
          </div>

          <div className="post_excel">
            <input className="postEG" type="text" placeholder="Eg. MS Excel" />
            <div className="post_ms">
              <span className="post_addicon">
                <AddIcon />
              </span>
              <span className="postAdd">Add</span>
            </div>
          </div>
        </div>

        <h3 className="post_aboutHeading">Preferred Gender</h3>

        <div className="post_aboutPart post_aboutPad">
          <Gender
            id="toggleButton1"
            onLabel="Male"
            offLabel="Male"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Gender
            id="toggleButton2"
            onLabel="Female"
            offLabel="Female"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Gender
            id="toggleButton3"
            onLabel="Others"
            offLabel="Others"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Gender
            id="toggleButton4"
            onLabel="Any Gender"
            offLabel="Any Gender"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

        <h3 className="post_aboutHeading">Required Experience</h3>

        <div className="post_aboutPart post_aboutPad post_canReqExp">
          <InputText
            placeholder="Enter Min experience - eg. 01"
            className="post_CanPlaceholder"
          />
          <p className="post_canPara">to</p>

          <InputText
            placeholder="Enter Min experience - eg. 01"
            className="post_CanPlaceholder"
          />
        </div>

        <h3 className="post_aboutHeading">Language Preferences</h3>

        <div className="post_aboutPart post_aboutPad post_lanPad">
          <div className="post_canlan">
            <p className="post_CanLanPara">Language</p>
            <Language
              id="toggleButton1"
              onLabel="English"
              offLabel="English"
              onIcon="pi pi-check"
              offIcon="pi pi-plus"
              className="ToggleButtonGroupLanguage"
            />
          </div>

          <div className="post_CanLanStatus">
            <p className="post_CanLanPara post_sts">Status</p>

            <div className="post_CanLvl">
              <div className="post_Canlevel">
                <Checkbox {...label} />
                <p className="post_lvl">Basic</p>
              </div>
              <div className="post_Canlevel">
                <Checkbox {...label} />
                <p className="post_lvl">Intermediate</p>
              </div>
              <div className="post_Canlevel">
                <Checkbox {...label} />
                <p className="post_lvl">Excellence</p>
              </div>
            </div>
          </div>

          <div className="post_CanLanStatus">
            <p className="post_CanLanPara post_sts">Level</p>

            <div className="post_CanLvl">
              <div className="post_Canlevel">
                <Checkbox {...label} />
                <p className="post_lvl">Read</p>
              </div>
              <div className="post_Canlevel">
                <Checkbox {...label} />
                <p className="post_lvl">Write</p>
              </div>
              <div className="post_Canlevel">
                <Checkbox {...label} />
                <p className="post_lvl">Speak</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="post_aboutHeading">Willing to hire candidates within</h3>

        <div className="post_aboutPart post_aboutPad">
          <Candidates
            id="toggleButton1"
            onLabel="Nearby areas (Upto 10Km)"
            offLabel="Nearby areas (Upto 10Km)"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Candidates
            id="toggleButton2"
            onLabel="Anywhere in the City to commute"
            offLabel="Anywhere in the City to commute"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <div className="post_keyCont">
            <h3 className="post_head3">
              <img className="post_add" src={Add} alt="add button" />
              Add Key Skills
            </h3>
          </div>
        </div>

        <h3 className="post_aboutHeading">
          Do you offer bonus in addition to Monthly Salary{" "}
        </h3>

        <FormControl>
          <RadioGroup
            className="post_aboutPad"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <h3 className="post_aboutHeading">Bonus Type</h3>

        <div className="post_aboutPad post_yesNo">
          <Bonus
            id="toggleButton1"
            onLabel="Performance bonus"
            offLabel="Performance bonus"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton2"
            onLabel="Meal allowance"
            offLabel="Meal allowance"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton3"
            onLabel="Transportation allowance"
            offLabel="Transportation allowance"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton4"
            onLabel="Stock purchase plan"
            offLabel="Stock purchase plan"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton5"
            onLabel="Hourly Pay"
            offLabel="Hourly Pay"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton6"
            onLabel="Housing allowance"
            offLabel="Housing allowance"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton7"
            onLabel="Educational allowance"
            offLabel="Educational allowance"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton8"
            onLabel="Life Insurance"
            offLabel="Life Insurance"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton9"
            onLabel="Disability Insurance "
            offLabel="Disability Insurance "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <Bonus
            id="toggleButton10"
            onLabel="Overtime Pay "
            offLabel="Overtime Pay "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton11"
            onLabel="Professional Development assistance "
            offLabel="Professional Development assistance "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton12"
            onLabel="Profit sharing "
            offLabel="Profit sharing "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton13"
            onLabel="Parental  Leave "
            offLabel="Parental  Leave "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton14"
            onLabel="Rewards "
            offLabel="Rewards "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton15"
            onLabel="Flexible Schedule  "
            offLabel="Flexible Schedule  "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton16"
            onLabel="Relocation assistance "
            offLabel="Relocation assistance "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton17"
            onLabel="Retirement Plan "
            offLabel="Retirement Plan "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton18"
            onLabel="401(K) or Retirement savings Plan  "
            offLabel="401(K) or Retirement savings Plan  "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton19"
            onLabel="Double Time Pay "
            offLabel="Double Time Pay "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton20"
            onLabel="Monthly bonus "
            offLabel="Monthly bonus "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton21"
            onLabel="Quarterly bonus "
            offLabel="Quarterly bonus "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton22"
            onLabel="Commission "
            offLabel="Commission "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton23"
            onLabel="Yearly bonus "
            offLabel="Yearly bonus "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <Bonus
            id="toggleButton24"
            onLabel="Other "
            offLabel="Other "
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

        <h3 className="post_aboutHeading">Candidate age</h3>

        <div className="post_aboutPart post_aboutPad post_canReqExp">
          <InputText
            placeholder="Enter Min age - eg. 25"
            className="post_CanPlaceholder"
          />
          <p className="post_canPara">to</p>

          <InputText
            placeholder="Enter Max age - eg. 30"
            className="post_CanPlaceholder"
          />
        </div>

        <div className="post_aboutPart post_aboutPad post_canReqExp post_abtPad">
          <Checkbox {...label} className="post_canchec" />
          <p className="post_canUpd">
            Directing candidates to upload their photo
          </p>
        </div>

        <div className="post_aboutPart post_aboutPad post_canReqExp post_abtPad">
          <Checkbox {...label} className="post_canchec" />
          <p className="post_canUpd">This Job Requires resume to apply </p>
        </div>
      </div>
    </div>
  );
};

export default JobPostStep2;
