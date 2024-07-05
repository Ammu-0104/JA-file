import React,{useRef} from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import PostCircle from "../../../assets/images/PVcirlce.svg";
import PostViewJson from "../../../Data/PostViewJson";
import PVDoc from "../../../assets/images/PVDoc.svg";
import PVRDown from "../../../assets/images/PVResDown.svg";



// Custom connector style
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#E6E6E6",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#E6E6E6",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#E6E6E6",
    borderLeftWidth: 3,
    borderRadius: 1,
    minHeight: 24,
  },
}));

// Custom step icon
const CustomStepIconRoot = styled("div")(({ theme }) => ({
  color: "#E6E6E6",
  display: "flex",
  alignItems: "center",
}));

function CustomStepIcon(props) {
  const { className } = props;

  return (
    <CustomStepIconRoot className={className}>
      <img src={PostCircle} alt="Outlined Circle" className="postStepper" />
    </CustomStepIconRoot>
  );
}

CustomStepIcon.propTypes = {
  className: PropTypes.string,
};

export default function PostViewTab1() {
  const { skill } = PostViewJson[0];
   const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  
  const steps = PostViewJson.slice(1).map((item) => ({

    label: item.company,
    description: item.description,
    designation: item.designation,
    year: item.year,
    icon: item.icon,
    labelE: item.companyE,
    descriptionE: item.descriptionE,
    designationE: item.designationE,
    yearE: item.yearE,
    iconE: item.iconE,
    image11:item.image11,
    image16:item.image16,

  }));

  return (
    <Stack sx={{ width: "100%" }} spacing={4} className="postViewContainer">
      <div className="postResumeDetails">
        <div className="postCont1">
          <h1 className="postSummary">Profile Summary</h1>
          <p className="postSumPara">
            Highly skilled and motivated Software Developer with 4 years of
            experience in designing, developing, and deploying robust software
            solutions. Proficient in various programming languages including
            Java, Python, and JavaScript, with a strong foundation in software
            development methodologies such as Agile and Scrum. Proven track
            record of delivering high-quality code on time and within budget,
            with a keen eye for detail and a passion for innovation. Excellent
            problem-solving skills and ability to work effectively both
            independently and as part of a team. Dedicated to staying current
            with emerging technologies and continuously enhancing skill set to
            drive business success.
          </p>
        </div>
        <div className="postCont1">
          <h1 className="postSummary">Key Skills</h1>
          <div className="job_submain job_submain11 postSkill">
            {Object.values(skill).map((skillItem, idx) => (
              <p className="job_skill" key={idx}>
                {skillItem}
              </p>
            ))}
          </div>
        </div>
      </div>
      <h1 className="postSummary pb-4">Work Experience</h1>
      <ul className="postUl">
        {steps.map((step, index) => (
          <div>
            <li className="postLi" key={index}>
              <div className="postLabel">
                <CustomStepIcon />
                <img className="postImg" src={step.icon} alt="" />
                <span className="postCompany">{step.label}</span>
              </div>
              <div className="postSteps">
                <p className="postDesignation">{step.designation}</p>
                <p className="postYear">{step.year}</p>
                <p className="postDescription">{step.description}</p>
              </div>

              {index < steps.length - 1 && <CustomConnector />}
            </li>
          </div>
        ))}
      </ul>

      <h1 className="postSummary pb-4">Education</h1>
      <ul className="postUl">
        {steps.map((step, index) => (
          <div>
            <li className="postLi" key={index}>
              <div className="postLabel">
                <CustomStepIcon />
                <img className="postImg" src={step.iconE} alt="" />
                <span className="postCompany">{step.labelE}</span>
              </div>

              <div className="postSteps">
                <p className="postDesignation">{step.designationE}</p>
                <p className="postYear">{step.yearE}</p>
                <div className="job_submain job_submain11 postSkill">
                  {Object.values(skill).map((skillItem, idx) => (
                    <p className="job_skill" key={idx}>
                      {skillItem}
                    </p>
                  ))}
                </div>{" "}
              </div>
              {index < steps.length - 1 && <CustomConnector />}
            </li>
          </div>
        ))}
      </ul>


      <h1 className="postSummary pb-4">Download Resume</h1>

      <div className="postResCont">
        <div className="postPart1">
          <img src={PVDoc} alt=""/>
          <div className="postSubCont">
            <p className="postPdf">mythili_resume.pdf</p>
            <p className="postSize">200 KB</p>
          </div>

        </div>
        <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }} // Hide the file input
      />
      <img
        src={PVRDown}
        alt="Click to upload"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }} // Add a pointer cursor for better UX
      />
    </div>
        
      </div>

      

    </Stack>
  );
}
