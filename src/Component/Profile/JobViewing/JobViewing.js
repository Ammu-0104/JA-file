import React, { useState, useRef } from "react";
import "../../../Component/Profile/JobViewing/Jobviewing.css";
import "../JobPosting/jobposting.css";
import kodukkuLogo from "../../../assets/images/klogo.svg";
import imageUrl1 from "../../../assets/images/logo2.png";
import imageUrl2 from "../../../assets/images/location.png";
import imageUrl3 from "../../../assets/images/experience.png";
import imageUrl4 from "../../../assets/images/down.png";
import LeftArrow from "../../../assets/images/viewLeftArrow.svg";
import RightArrow from "../../../assets/images/viewRightArrow.svg";
import Subscribe from "../../../assets/images/viewSubscribe.svg";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import JobListingCard from "./JobViewCard1";
import { cardsData, data } from "../../../Data/ViewJsonData";
import JobViewCard2 from "../../Profile/JobViewing/JobViewCard2";
import ArrowIcon from '../../../assets/Icons/ArrowIcon.svg';


const Card = ({data}) => (
  <div>
    <JobViewCard2 />
  </div>
);

<JobListingCard />;

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

const JobViewing = ({ onSearch }) => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [activeButton, setActiveButton] = useState("seeking");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const containerRef = useRef(null);

  
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -440, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 440, behavior: "smooth" });
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
    <div className="viewContainer">
      <div className="maincontainer">
        <div className="joblistcontainerView">
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
              <img
                src={imageUrl1}
                alt="logo"
                style={{
                  color: "red",
                  width: "22px",
                  height: "22px",
                  marginRight: "10px",
                }}
              />
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

          <div>
            <Button
              id="demo-customized-button3"
              aria-controls={anchorEl3 ? "demo-customized-menu3" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl3)}
              className="clickbar2"
              onClick={handleClick3}
            >
              <img src={imageUrl3} alt="logo" className="job_location" />
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

          <div className="clickbar4">
            <div>Find Now</div>
          </div>

          <div>
            <button
              className="job_seekpost"
              style={{
                backgroundColor:
                  activeButton === "seeking" ? "#2196F3" : "inherit",
                color: activeButton === "seeking" ? "white" : "#2196F3",
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

      <div className="switchcontainer switch_container">
        <Link className="job_breadcrum" to="/main/jobListing">
          {" "}
          <div className="jobLst_home"
          
          >
            Home
           
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

          </div>{" "}
        </Link>

        <Link className="job_breadcrum" to="/main/jobListing">
          {" "}
          <div className="jobLst_home">
            Job Listings
           
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />
          </div>
        </Link>

        <Link className="job_breadcrum" to="/main/jobViewing">
          {" "}
          <div className="jobLst_home">
            Software Developer
           
 <img src={ArrowIcon} 
 className="jobArrow" alt="" />

          </div>
        </Link>
      </div>

      <div className="filterContainerView filter_ContainerView">
        <div className="filterContainer2">
          <div>
            <JobListingCard data={data} />
          </div>
        </div>
      </div>

      <div className="view_cardContainer">
        <h3 className="view_crdJob">Similar Jobs</h3>

        <div className="container1 view_cardSimilar" ref={containerRef}>
          {cardsData.map((card, index) => (
            <Link to="/main/SimilarJobs">
               <div className="cardmain" key={index}>
              <div className="main_cont">
                <div className="main_sub">
                  <p className="job_para">{card.Roll}</p>
                  <div className="main_subpart">
                    <p className="job_abc">{card.companyname}</p>
                    <div className="job_subpart1">
                      <img src={card.icon8} className="job_rew" alt="" />
                      <span className="job_star">{card.rating}</span>
                      <span className="job_review">{card.reviews}</span>
                    </div>
                  </div>
                  <div className="main_subpart1">
                    <div className="job_submain">
                      <img className="job_location" src={card.icon} alt="" />
                      <span className="job_chn">{card.location}</span>
                    </div>
                  </div>
                </div>
                <div className="main_sub1">
                  <img className="job_vsimg" src={card.image} alt="" />
                </div>
              </div>
              <div className="main_subpart1 main_subpart11">
                <div className="job_submain">
                  <img className="job_location" src={card.icon1} alt="" />
                  <span className="job_chn">{card.Experience}</span>
                </div>
                <div className="job_submain">
                  <img className="job_location" src={card.icon3} alt="" />
                  <span className="job_chn">{card.package}</span>
                </div>
              </div>
              <div className="main_subpart1 job_subskill">
                <div className="job_submain job_submain11">
                  <img
                    className="job_location job_hum"
                    src={card.icon4}
                    alt=""
                  />
                  {Object.values(card.skill).map((skill, idx) => (
                    <p className="job_skill" key={idx}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
              <div className="main_subpart1 main_subpart11 main_subpost">
                <div className="job_submain">
                  <img
                    className="job_location job_timeicon"
                    src={card.icon9}
                    alt=""
                  />
                  <span className="job_chn job_days">{card.posted}</span>
                </div>
                <div className="job_submain">
                  <img
                    className="job_location job_timeicon"
                    src={card.icon10}
                    alt=""
                  />
                  <span className="job_chn job_save">{card.save}</span>
                </div>
              </div>
            </div>
            </Link>
           
          ))}
        </div>
        <div className="view_arrowCont">
          <img
            src={LeftArrow}
            alt="leftarrow"
            className="view_arrow"
            onClick={scrollLeft}
          />
          <img
            src={RightArrow}
            alt="Rightarrow"
            className="view_arrow"
            onClick={scrollRight}
          />
        </div>
      </div>

      <div className="backroundImage">
        <div>
          <h2 className="view_signHead">
            Sign up to get the latest Job updates
          </h2>
        </div>

        <div className="inputView-with-button-container">
          <input
            type="text"
            placeholder="gayathri@gmail.com"
            className="inputView"/>

          <div className="view_subCont">
            <button type="button" className="buttonView">
              Subscribe
            </button>
            <img className="view_subcribeIcon" src={Subscribe} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobViewing;
