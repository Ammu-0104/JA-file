import React, { useEffect, useState } from "react";
import cardsData from "../../../Data/CardsDataJson";
import data from "../../../Data/DataJson";
import "../../Profile/JobListing/jobListing.css";
import kodukkuLogo from "../../../assets/images/klogo.svg";
import imageUrl1 from "../../../assets/images/logo2.png";
import imageUrl2 from "../../../assets/images/location.png";
import imageUrl3 from "../../../assets/images/experience.png";
import imageUrl4 from "../../../assets/images/down.png";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, InputAdornment, Popover, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import JobList1 from "../JobListing/Job List/JobList1";
import JobList2 from "../JobListing/Job List/JobList2";
import JobList3 from "../JobListing/Job List/JobList3";
import JobList4 from "../JobListing/Job List/JobList4";
import JobList5 from "../JobListing/Job List/JobList5";
import JobList6 from "../JobListing/Job List/JobList6";
import JobList7 from "../JobListing/Job List/JobList7";
import JobList8 from "../JobListing/Job List/JobList8";
import JobListingCard from "../JobListing/Job List/JobListingCard";
import ArrowIcon from '../../../assets/Icons/ArrowIcon.svg';


const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  width: 996,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 708,
  p: 4,
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={2}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const SimilarJobs = ({ onSearch }) => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [activeButton, setActiveButton] = useState("seeking");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [selectedJob, setSelectedJob] = useState("");
  const [jobType, setJobType] = React.useState("");
  const [cards, setCards] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSort = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setCards(cardsData);
    setJobs(data);
  }, []);

  const handleChange = (event) => {
    setJobType(event.target.value);
  };

  const handleToggle = (button) => {
    setActiveButton(button);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className="maincontainer">
        <div className="joblistcontainer">
          <div>
            <img src={kodukkuLogo} alt="logo" />
          </div>
          <div>
            <Button
              id="demo-customized-button1"
              aria-controls={anchorEl1 ? "demo-customized-menu1" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl1)}
              className="clickbar1"
              onClick={handleClick1}
            >
              <img src={imageUrl1} alt="logo" className="job_posting" />
              Enter Skills, Designation, etc
            </Button>

            <StyledMenu
              id="demo-customized-menu1"
              anchorEl={anchorEl1}
              open={Boolean(anchorEl1)}
              onClose={handleClose1}
            >
              <h3 className="job">Job Title</h3>
              <MenuItem onClick={handleClose1} disableRipple>
                <HistoryIcon className="job_title" />
                Admin / Back Office
              </MenuItem>
              <MenuItem onClick={handleClose1} disableRipple>
                <HistoryIcon className="job_title" />
                Doctor
              </MenuItem>
              <MenuItem onClick={handleClose1} disableRipple>
                <HistoryIcon className="job_title" />
                Aviation / Aerospace
              </MenuItem>
              <MenuItem onClick={handleClose1} disableRipple>
                <HistoryIcon className="job_title" />
                Teacher
              </MenuItem>
              <MenuItem onClick={handleClose1} disableRipple>
                <HistoryIcon className="job_title" />
                Software Developer
              </MenuItem>
            </StyledMenu>
          </div>

          <div>
            <Button
              id="demo-customized-button2"
              aria-controls={anchorEl2 ? "demo-customized-menu2" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl2)}
              className="clickbar2"
              onClick={handleClick2}
            >
              <img src={imageUrl2} alt="logo" className="job_human" />
              Location
            </Button>
            <StyledMenu
              id="demo-customized-menu2"
              anchorEl={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={handleClose2}
            >
              <h3 className="job">Popular Cities</h3>
              <MenuItem onClick={handleClose2} disableRipple>
                <SearchIcon className="job_title" />
                Chennai
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                <SearchIcon className="job_title" />
                Mumbai
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                <SearchIcon className="job_title" />
                Bengaluru
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                <SearchIcon className="job_title" />
                Delhi-NCR
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                <SearchIcon className="job_title" />
                Kolkata
              </MenuItem>

              <MenuItem onClick={handleClose2} disableRipple>
                <SearchIcon className="job_title" />
                Hyderabad
              </MenuItem>
            </StyledMenu>
          </div>

          <div className="jobExperience">
            <Button
              id="demo-customized-button3"
              aria-controls={anchorEl3 ? "demo-customized-menu3" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl3)}
              className="clickbar2"
              onClick={handleClick3}
            >
              <img
                src={imageUrl3}
                style={{ margin: "0 10px" }}
                alt="logo"
                className="job_location jobListBag"
              />
              <div className="clickbar1text">Experience</div>
              <img src={imageUrl4} alt="logo" className="job_experience" />{" "}
            </Button>
            <StyledMenu
              id="demo-customized-menu3"
              anchorEl={anchorEl3}
              open={Boolean(anchorEl3)}
              onClose={handleClose3}
            >
              <h3 className="job">Select Experience</h3>
              <MenuItem onClick={handleClose2} disableRipple>
                Fresher
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                1 - 2 Years
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                2 - 5 Years
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                5 - 7 Years
              </MenuItem>
              <MenuItem onClick={handleClose2} disableRipple>
                7 - 15 Years
              </MenuItem>

              <MenuItem onClick={handleClose2} disableRipple>
                15+ Years
              </MenuItem>
            </StyledMenu>
          </div>

          <div>
            <button className="clickbar4">Search Jobs</button>
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
      </div>

      <div className="switchcontainer">
        <div className="switch_main">
          <Link to="/main/joblisting">
            <div className="jobLst_home">
              Home
             
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

            </div>
          </Link>

          <Link to="/main/joblisting">
            <div className="jobLst_home">
              Job Listings
             
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

            </div>
          </Link>
          <Link to="/main/SimilarJobs">
            <div className="jobLst_home">
            Similar jobs
             
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

            </div>
          </Link>
        </div>

        <div className="jobLst_alert">
          Send job alert for this search
          <Switch {...label} />
        </div>
      </div>

      <div className="filterContainer">
        <div className="filterContainer1">
          <h3 className="filterContainertext">Filters</h3>
          <div className="filterContainer1mini">
            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                >
                  <Typography>Job Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">
                      Software development
                    </p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">DevOPs</p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Quality Assurance </p>
                  </div>
                  <div className="checkboxcontainerView" onClick={handleOpen}>
                    View More
                  </div>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="keep-mounted-modal-title"
                        variant="h6"
                        component="h3"
                        className="job_category"
                      >
                        Job Category
                      </Typography>

                      <Box sx={{ borderRadius: "20px" }}>
                        <TextField
                          placeholder="Search Category"
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton type="submit">
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            inputProps: {
                              style: { fontSize: "10px" },
                            },
                          }}
                          className="customTextField"
                        />
                      </Box>

                      <div className="scroll-container">
                        <div className="scroll_pad">
                          <JobList1 className="post_scrollcontent" />
                        </div>
                        <div className="scroll_pad">
                          <JobList2 />
                        </div>
                        <div className="scroll_pad">
                          <JobList3 />
                        </div>
                        <div className="scroll_pad">
                          <JobList4 />
                        </div>
                        <div className="scroll_pad">
                          <JobList5 />
                        </div>
                        <div className="scroll_pad">
                          <JobList6 />
                        </div>
                        <div className="scroll_pad">
                          <JobList7 />
                        </div>
                        <div className="scroll_pad">
                          <JobList8 />
                        </div>
                      </div>

                      <button className="APPLY">Apply</button>
                    </Box>
                  </Modal>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                >
                  <Typography>Work mode</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">In Office</p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Virtual</p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Hybrid </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Onsite </p>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                >
                  <Typography>Work mode</Typography>
                </AccordionSummary>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                  >
                    <Typography>Permanent</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="checkboxcontainer">
                      <Checkbox {...label} className="job_type" />
                      <p className="checkboxcontainerText">Full Time</p>
                    </div>
                    <div className="checkboxcontainer">
                      <Checkbox {...label} className="job_type" />
                      <p className="checkboxcontainerText">Part Time</p>
                    </div>
                    <div className="checkboxcontainer">
                      <Checkbox {...label} className="job_type" />
                      <p className="checkboxcontainerText">Internship</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                  >
                    <Typography>Temporary</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="checkboxcontainer">
                      <Checkbox {...label} className="job_type" />
                      <p className="checkboxcontainerText">Full Time</p>
                    </div>
                    <div className="checkboxcontainer">
                      <Checkbox {...label} className="job_type" />
                      <p className="checkboxcontainerText">Part Time</p>
                    </div>
                    <div className="checkboxcontainer">
                      <Checkbox {...label} className="job_type" />
                      <p className="checkboxcontainerText">Internship</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Accordion>
            </div>

            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                >
                  <Typography>Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Fresher</p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">1 - 2 Years</p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">2 - 5 Years </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">5 -7 Years </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">7 - 15 Years </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">15 + Years </p>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                >
                  <Typography>Salary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">₹ 0-3 Lakhs</p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">₹ 3-6 Lakhs</p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">₹ 6-10 Lakhs</p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">₹ 10-15 Lakhs</p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">₹ 15-20 Lakhs</p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">
                      ₹ 20-30 Lakhs 30-50 Lakhs
                    </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">
                      ₹ 20-30 Lakhs 30-50 Lakhs
                    </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Not Specified</p>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                >
                  <Typography>Education</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">
                      10th or below 10th Grade
                    </p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">12th Grade</p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Diploma </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Graduate </p>
                  </div>

                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Post Graduate </p>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
                >
                  <Typography>Work Shift</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Day Shift</p>
                  </div>
                  <div className="checkboxcontainer">
                    <Checkbox {...label} className="job_type" />
                    <p className="checkboxcontainerText">Night Shift</p>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="filterContainer2">
          <div className="filter_sort">
            <h3 className="filterContainertext">Similar jobs</h3>

            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Sort
            </Button>
            <Popover
              className="filter_sort"
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseSort}
            >
              <MenuItem onClick={handleCloseSort}>
                <Checkbox className="job_type" />
                <Typography className="checkboxcontainerText">
                  Last 30 days
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseSort}>
                <Checkbox className="job_type" />
                <Typography className="checkboxcontainerText">
                  Last 15 days
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseSort}>
                <Checkbox className="job_type" />
                <Typography className="checkboxcontainerText">
                  Last 7 days
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseSort}>
                <Checkbox className="job_type" />
                <Typography className="checkboxcontainerText">
                  Last 3 days
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseSort}>
                <Checkbox className="job_type" />
                <Typography className="checkboxcontainerText">
                  Last 1 day
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseSort}>
                <Checkbox className="job_type" />
                <Typography className="checkboxcontainerText">
                  Last 24 hours
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseSort}>
                <Checkbox className="job_type" />
                <Typography className="checkboxcontainerText">All</Typography>
              </MenuItem>
            </Popover>
          </div>
          <div>
            {data.map((job, index) => (
              <JobListingCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarJobs;
