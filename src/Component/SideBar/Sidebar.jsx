import React, { useEffect, useState } from "react";
import logo from "../../assets/images/KodukkuLogo.svg";
import { IoHeartOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import cardsData from "../../Data/CardsDataJson"; 
import Data from "../../Data/DataJson"; 
import "../Profile/JobListing/jobListing.css";
import imageUrl1 from "../../assets/images/logo2.png";
import imageUrl2 from "../../assets/images/location.png";
import imageUrl3 from "../../assets/images/experience.png";
import imageUrl4 from "../../assets/images/down.png";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import "./Side.css"; // Import the external stylesheet
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";

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

const Sidebar = ({ setSidebarOpen }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery("(min-width: 301px) and (max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [activeButton, setActiveButton] = useState("seeking");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cards, setCards] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setCards(cardsData);
    setJobs(Data);
  }, []);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = async () => {
    window.location.reload(true);
  };

  return (
    <>
      {!isSmallScreen ? (
        <div className="Sidebar px-2 py-3">
          <div className="side d-flex flex-column justify-content-between">
            <div>
              <div className="topside d-flex align-items-center justify-content-between">
                <img src={logo} className="logo" alt="logo" />
                <div className="ts-icons">
                  <IoHeartOutline className="ts-icon" />
                  <GoBell className="ts-icon" />
                  <Link to="/main/jobs">
                    <FaRegUserCircle className="ts-icon text-white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="terms">
              <ul className="p-0 mb-0">
                <li className="category">
                  <Link to="/main/About" className="category-link">
                    <MdInfoOutline className="icon" />
                    <p className="cate-text">About Us</p>
                  </Link>
                </li>
                <li className="category">
                  <Link to="/main/Terms" className="category-link">
                    <MdInfoOutline className="icon" />
                    <p className="cate-text">Terms & Condition</p>
                  </Link>
                </li>
                <li className="category">
                  <Link to="/main/ContactUs" className="category-link">
                    <FiPhoneCall className="icon" />
                    <p className="cate-text">Contact Us</p>
                  </Link>
                </li>
                <li className="category">
                  <Link onClick={logout} className="category-link">
                    <BiLogOutCircle className="icon" />
                    <p className="cate-text">Logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="TopNavBar">
          <div className="top-nav-bar-header">
            <div className="topnav_logo">
              <img src={logo} className="logo" alt="logo" />
            </div>
            <FiMenu className="menu-icon" onClick={toggleMenu} />
          </div>
          {isMenuOpen && (
            <div className="additional-content">
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
                    Kolkata
                  </MenuItem>
                  <MenuItem onClick={handleClose2} disableRipple>
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
                      activeButton === "seeking" ? "white" : "#2196f3",
                    color: activeButton === "seeking" ? "#2196f3" : "inherit",
                  }}
                  onClick={() => handleToggle("seeking")}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: activeButton === "seeking" ? "#2196f3" : "white",
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
                      activeButton === "posting" ? "white" : "#2196f3",
                    color: activeButton === "posting" ? "#2196f3" : "inherit",
                  }}
                  onClick={() => handleToggle("posting")}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: activeButton === "posting" ? "#2196f3" : "white",
                    }}
                    to="/main/jobposting"
                  >
                    Job Posting
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
