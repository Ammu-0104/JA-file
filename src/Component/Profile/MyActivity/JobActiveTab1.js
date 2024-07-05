import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



function JobActiveTab1({ ActiveJson }) {
    const todayData = ActiveJson.slice(0, 6);  
    const yesterdayData = ActiveJson.slice(6, 8);  
  return (
    <div>
      <CardContent>
        <Typography className="active_today" variant="h6">
          Today
        </Typography>
        <div className="act_parentCont pb-5">
        {todayData.map((item, index) => (
          <div key={index}>
            <Card>
              <div className="active_cardCont">
                <div className="act_CardSub">
                  <div className="act_inner">
                    <img className="act_close" src={item.image} alt="" />
                    <img src={item.image1} alt="" />
                  </div>
                  <Typography className="act_cardHead" variant="body2">
                    {item.imagetxt}
                  </Typography>
                </div>
                <div>
                  <div className="act_contPart">
                    <div className="act_part1">
                      <span className="act_catgy">{item.Category} : </span>
                      <span className="act_catgy act_title">
                        {item.cattitle}
                      </span>
                      <h6 className="act_lising">{item.joblisting}</h6>
                    </div>
                    <div>
                      <img src={item.imageCrs} alt="" />
                    </div>
                  </div>
                  <div className="act_contPart2">
                    <h1 className="act_dsg">{item.designation}</h1>
                    <div className="act_part2">
                      <p className="act_catgy act_loc">{item.location} </p>
                      <p className="act_catgy">{item.jobtype}</p>
                    </div>
                    <h2 className="act_salary">{item.salary}</h2>
                  </div>

                  <div className="act_part3">
                    <div className="act_partSub">
                      <img src={item.image3} alt="" />
                      <p className="adrs">{item.address}</p>
                    </div>
                    <div className="act_partSub">
                      <img src={item.image4} alt="" />
                      <p className="adrs">{item.postedon}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}

        </div>
       
      </CardContent>

     
        <Typography className="active_today" variant="h6">
          Yesterday
        </Typography>
        <div className="act_parentCont">
        {yesterdayData.map((item, index) => (
          <div key={index}>
            <Card>
              <div className="active_cardCont">
                <div className="act_CardSub">
                  <div className="act_inner">
                    <img className="act_close" src={item.image} alt="" />
                    <img src={item.image1} alt="" />
                  </div>
                  <Typography className="act_cardHead" variant="body2">
                    {item.imagetxt}
                  </Typography>
                </div>
                <div>
                  <div className="act_contPart">
                    <div className="act_part1">
                      <span className="act_catgy">{item.Category} : </span>
                      <span className="act_catgy act_title">
                        {item.cattitle}
                      </span>
                      <h6 className="act_lising">{item.joblisting}</h6>
                    </div>
                    <div>
                      <img src={item.imageCrs} alt="" />
                    </div>
                  </div>
                  <div className="act_contPart2">
                    <h1 className="act_dsg">{item.designation}</h1>
                    <div className="act_part2">
                      <p className="act_catgy act_loc">{item.location} </p>
                      <p className="act_catgy">{item.jobtype}</p>
                    </div>
                    <h2 className="act_salary">{item.salary}</h2>
                  </div>

                  <div className="act_part3">
                    <div className="act_partSub">
                      <img src={item.image3} alt="" />
                      <p className="adrs">{item.address}</p>
                    </div>
                    <div className="act_partSub">
                      <img src={item.image4} alt="" />
                      <p className="adrs">{item.postedon}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}

        </div>
    </div>
  );
}

export default JobActiveTab1;
