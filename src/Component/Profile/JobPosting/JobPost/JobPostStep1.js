import React, { useState } from "react";
import "../jobposting.css";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import { InputText } from "primereact/inputtext";
import { ToggleButton } from "primereact/togglebutton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PostLocation from "../../../../assets/images/postLocation.svg";
import { industryOptions, roleOptions } from "../../../../Data/FilterJsonData";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const JobPostStep1 = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [checkedRoles, setCheckedRoles] = useState({});

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const handleRoleChange = (event) => {
    setCheckedRoles({
      ...checkedRoles,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  function ToggleButtonGroup({
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
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "14px" : "14px",
            borderRadius: "10px",
          }}
        />
      </div>
    );
  }

  function ToggleButtonGroup1({
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
            fontSize: checked ? "12px" : "12px",
          }}
        />
      </div>
    );
  }

  function ToggleButtonGroup2({
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

  function WeekendsFunction({
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
            width: "41px",
            height: "40px",
            backgroundColor: checked ? "#2196F3" : "transparent",
            color: checked ? "white" : "#8B8B8B",
            fontSize: checked ? "20px" : "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="post_stepCard">
        <h1 className="post_aboutthepost">About the Job</h1>

        <h3 className="post_aboutHeading">Industry</h3>
        <div className="post_aboutPad">
          <Button
            id="demo-customized-button1"
            aria-controls={anchorEl1 ? "demo-customized-menu1" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(anchorEl1)}
            className="clickbar2Industry"
            onClick={handleClick1}
          >
            Select Industry Type
            <ExpandMoreIcon className="post_expand" />
          </Button>
          <Menu
            id="demo-customized-menu1"
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            <FormControl className="post_formcontrol">
              <Select
                native
                value={selectedIndustry}
                onChange={handleIndustryChange}
                inputProps={{
                  name: "industry",
                  id: "industry-select",
                }}
              >
                <option
                  aria-label="Top Management Level"
                  value="Top Management Level"
                />
                {industryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            {selectedIndustry && roleOptions[selectedIndustry] && (
              <>
                {roleOptions[selectedIndustry].map((role) => (
                  <MenuItem key={role} onClick={handleClose1} disableRipple>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedRoles[role] || false}
                          onChange={handleRoleChange}
                          name={role}
                        />
                      }
                      label={role}
                    />
                  </MenuItem>
                ))}
              </>
            )}
          </Menu>
        </div>

        <h3 className="post_aboutHeading">Job Title / Designation</h3>
        <div className="post_aboutPad">
          <div>
            <span>
              <InputText
                placeholder="Select Job Title / designation"
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">Job Openings</h3>
        <div className="post_aboutPad">
          <div>
            <span>
              <InputText
                placeholder="Enter No of Job Openings  eg. 05 "
                className="post_textSize"
              />
            </span>
          </div>
        </div>

        <h3 className="post_aboutHeading">Work Shift</h3>

        <div className="post_aboutPart post_aboutPad">
          <ToggleButtonGroup
            id="toggleButton1"
            onLabel="Day Shift"
            offLabel="Day Shift"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup
            id="toggleButton2"
            onLabel="Night Shift"
            offLabel="Night Shift"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup
            id="toggleButton3"
            onLabel="Rotational Shift"
            offLabel="Rotational Shift"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

        <h3 className="post_aboutHeading">Work Mode</h3>

        <div className="post_aboutPart post_aboutPad">
          <ToggleButtonGroup1
            id="toggleButton1"
            onLabel="In Office"
            offLabel="In Office"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup1
            id="toggleButton2"
            onLabel="Virtual"
            offLabel="Virtual"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup1
            id="toggleButton3"
            onLabel="Hybrid"
            offLabel="Hybrid"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />

          <ToggleButtonGroup1
            id="toggleButton3"
            onLabel="Onsite"
            offLabel="Onsite"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

        <h3 className="post_aboutHeading post_aboutPad">Work Type</h3>

        <div className="post_aboutPart post_abtPad">
          <h6 className="post_temporary">Temporary</h6>
          <ToggleButtonGroup2
            id="toggleButton1"
            onLabel="Full Time"
            offLabel="Full Time"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup2
            id="toggleButton2"
            onLabel="Part Time"
            offLabel="Part Time"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup2
            id="toggleButton3"
            onLabel="Internship"
            offLabel="Internship"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

        <div className="post_aboutPart post_aboutPad">
          <h6 className="post_temporary">Permanent</h6>
          <ToggleButtonGroup2
            id="toggleButton1"
            onLabel="Full Time"
            offLabel="Full Time"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup2
            id="toggleButton2"
            onLabel="Part Time"
            offLabel="Part Time"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
          <ToggleButtonGroup2
            id="toggleButton3"
            onLabel="Internship"
            offLabel="Internship"
            onIcon="pi pi-check"
            offIcon="pi pi-plus"
          />
        </div>

        <h3 className="post_aboutHeading">Salary Scale</h3>

        <div className="post_aboutPad post_salflex">
          <InputText
            className="post_inpuTextSalary"
            placeholder="₹Enter Min Salary - Eg. 1 LPA"
          />

          <p className="post_toPara">to</p>

          <InputText
            className="post_inpuTextSalary"
            placeholder="₹Enter Min Salary - Eg. 1 LPA"
          />

          <p className="post_toPara">Per Annum</p>
        </div>

        <h3 className="post_aboutHeading">Working days</h3>

        <div className="post_aboutPart post_monPad">
          <Checkbox {...label} />
          <p className="post_monToFri">Monday to Friday</p>
        </div>

        <div className="post_aboutPart post_monPad">
          <Checkbox {...label} />
          <p className="post_monToFri">Monday to Saturday</p>
        </div>

        <div className="post_aboutPart pb-5">
          <WeekendsFunction id="toggleButton1" onLabel="S" offLabel="S" />

          <WeekendsFunction id="toggleButton2" onLabel="M" offLabel="M" />

          <WeekendsFunction id="toggleButton3" onLabel="T" offLabel="T" />

          <WeekendsFunction id="toggleButton4" onLabel="W" offLabel="W" />

          <WeekendsFunction id="toggleButton5" onLabel="T" offLabel="T" />

          <WeekendsFunction id="toggleButton6" onLabel="F" offLabel="F" />

          <WeekendsFunction id="toggleButton7" onLabel="S" offLabel="S" />
        </div>

        <h3 className="post_aboutHeading">Job Description</h3>

        <div className="custom-textarea-container pb-5">
          <textarea
            className="custom-textarea"
            placeholder="Please mention about key responsibilities, Qualification and others in detail"
          />
        </div>

        <h3 className="post_aboutHeading">Job Address</h3>

        <div className="post_aboutPart post_aboutPad post_flexloc">
          <InputText
            placeholder="Type the Job Address"
            className="input-with-placeholder"
          />
          <div className="post_locSub">
            <img src={PostLocation} alt="" />
            <h3 className="post_detectLoc">Detect Location</h3>
          </div>
        </div>

        <div className="pb-6">
          <iframe
            className="post_iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.135099205469!2d80.21299197507632!3d12.963205787351377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db9195fde7b%3A0x87a8ca7d197ca826!2sKodukku%20Classifieds%20Private%20Limited!5e0!3m2!1sen!2sin!4v1711107736387!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default JobPostStep1;
