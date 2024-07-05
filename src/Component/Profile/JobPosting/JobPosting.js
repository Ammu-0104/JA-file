import React, { useState } from "react";
import "../../../Component/Profile/JobPosting/jobposting.css";
import kodukkuLogo from "../../../assets/images/klogo.svg";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepConnector } from "@mui/material";
import { withStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EastIcon from "@mui/icons-material/East";
import Modal from "@mui/material/Modal";
import ScuccessIcon from "../../../assets/images/postSuccess.svg";
import CloseIcon from "@mui/icons-material/Close";
import JobPostStep2 from "../JobPosting/JobPost/JobPostStep2";
import JobPostStep3 from "../JobPosting/JobPost/JobPostStep3";
import JobPostStep1 from "../JobPosting/JobPost/JobPostStep1";
import ArrowIcon from '../../../assets/Icons/ArrowIcon.svg';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ColorStepConnector = withStyles({
  alternativeLabel: {
   
    top: 15,
    left: "calc(-40% + 12px)",
    right: "calc(60% + 9px)",
  },
  active: {
    "& $line": {
      borderColor: "#2196f3",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#68BCFF",
    },
  },
  line: {
    borderColor: "#2196f3",
    borderTopWidth: 3, 
    borderRadius: 1,
  },
  
})(StepConnector);

const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "#2196F3",
        },
        active: {
          color: "#2196F3",
        },
      },
    },
  },
});

const JobPosting = () => {
  const [activeButton, setActiveButton] = useState("seeking");

  const handleToggle = (button) => {
    setActiveButton(button);
  };

  const steps = ["Job details", "Candidate requirements ", "Company Details"];
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setIsModalOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="MainjobPostMainContainer">
      <div className="jobPostMainContainer">
        <div className="headerJobPost">
          <div className="post_logoHead">
            <img className="post_kLogo" src={kodukkuLogo} alt="logo" />
          </div>

          <div>
            <button
              className="job_seekpost"
              style={{
                backgroundColor:
                  activeButton === "seeking" ? "#2196F3" : "inherit",
                color: activeButton === "seeking" ? "white" : "inherit",
              }}
              onClick={() => handleToggle("seeking")}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: activeButton === "seeking" ? "white" : "#2196F3",
                }}
                to="/main/joblisting"
              >
                Job Seeking
              </Link>
            </button>
            <button
              className="job_seekpost"
              style={{
                backgroundColor:
                  activeButton === "posting" ? "#2196F3" : "inherit",
                color: activeButton === "posting" ? "white" : "inherit",
              }}
              onClick={() => handleToggle("posting")}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: activeButton === "posting" ? "white" : "#2196F3",
                }}
                to="/main/jobposting"
              >
                Job posting
              </Link>
            </button>
          </div>
        </div>

        <div className="switchcontainer1">
          <div className="post_breadCont">
              <Link to="/main/joblisting">
            <div className="switchcontainer1mini">
              {" "}
              <p className="post_breadcrums">Home</p>
             
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

            </div>
              </Link>
              <Link to="/main/joblisting">

            <div className="switchcontainer1mini">
              {" "}
              <p className="post_breadcrums"
>
                Categories
              </p>
             
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

            </div>
              </Link>

              <Link to="/main/jobposting">
            <div className="switchcontainer1mini">
              {" "}
              <p className="post_breadcrums">Job Posting</p>
             
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

            </div>
              </Link>
              <Link to="/main/jobposting">

            <div className="switchcontainer1mini">
              {" "}
              <p className="post_breadcrums"
>
                Job details{" "}
              </p>
             
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

            </div>
              </Link>
          </div>

          <div className="switchcontainer1mini">
            {" "}
            <p className="post_breadcrums"
>
              Send job alert for this search
            </p>
            <Switch {...label}  />
          </div>
        </div>

        <div className="post_stepper">
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<ColorStepConnector />}
          >
            {steps.map((label, index) => {
              // const isFirstStep = index === 0;
              // Define classes based on the condition
              // const stepClasses = isFirstStep ? "extra-class" : "";
              return (
                <Step key={label} sx={{ marginTop: "50px" }}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <ThemeProvider theme={theme}>
            <Box>
              <div className="post_stepForm">
                {activeStep === 0 && (
                  <div>
                    <JobPostStep1  />
                  </div>
                )}

                {activeStep === 1 && (
                  <div>
                    <JobPostStep2 />
                  </div>
                )}

                {activeStep === 2 && (
                  <div>
                    <JobPostStep3 />
                  </div>
                )}
              </div>
              {/* Button and Modal */}
              <div className="post_bactBtn">
                <Button
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>

                <Button onClick={handleNext} variant="contained">
                  {activeStep === steps.length - 1
                    ? "Confirm & Post the Job"
                    : "Continue"}

                  <EastIcon />
                </Button>
              </div>

              {/* Modal */}
              <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <Box className="confirm-job">
                  <div className="post_cfmClose">
                    <CloseIcon
                      className="post_cfmIcon"
                      onClick={handleCloseModal}
                    />
                  </div>
                  <div className="cfm_contMain">
                  <div className="post_subCont">
                    <div>
                      <img
                        className="post_tickIcon"
                        src={ScuccessIcon}
                        alt="close icon"
                      />
                    </div>
                    <div>
                      <Typography
                      className="cfm_para"
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Your Job has been posted successfully
                      </Typography>
                    </div>
                    <div>
                      <Typography
                      className="cfm_paraLive"
                        id="modal-modal-description"
                      >
                        Your Job will go live within 5 minutes{" "}
                      </Typography>
                    </div>
                  </div>

                  <div className="post_cfmBtn">
                    <Link to="/main/jobposting">
                    <Button className="post_editBtn" variant="contained">Edit Job</Button>
                    </Link>
                    <Link to="/main/MyActivitePosting">
                    <Button className="post_editBtn post_jobsBtn" variant="outlined"> See Posted Jobs</Button>
                    </Link>
                  </div>
                  </div>
                </Box>
              </Modal>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
