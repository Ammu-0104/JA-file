import Post1 from "../assets/images/post1.png";
import Post2 from "../assets/images/post2.png";
import Post3 from "../assets/images/post3.png";
import Post4 from "../assets/images/post4.png";
import Post5 from "../assets/images/post5.png";
import Post6 from "../assets/images/post6.png";
import Post7 from "../assets/images/post7.png";
import jS from "../assets/images/jS.svg";
import tp from "../assets/images/tp.svg";
import SaveIcon from "../assets/images/saveicon.svg";
import SavedIcon from "../assets/Icons/savedIcon.svg";
import Applied from "../assets/Icons/saveApy.svg";
import Job3Dot from "../assets/Icons/post3DotIcon.svg";
import { ClassNames } from "@emotion/react";

const data = [
    {
      image: Post5,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Software Developer",
      companyname: "ABC Solutions ",
      rating: "4.2",
      reviews: "4100 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "3-5 yrs",
      package: "4,00,000 - 5,00,000 INR",
      skill: {
        item1: "HTML",
        item2: "CSS",
        item3: "Javascript",
        item4: "ReactJs",
        item5: "Core Java",
        item6: "jQuery",
        item7: "Wordpress",
      },
      posted: "Posted an hour ago",
      save: "save",
      saved:"Saved on a days ago",
      sts:"Shortlisted",
      applied:"Applied 2 days ago",
      icon12:Applied,
      stsclass:'shortlisted',
      icon13:Job3Dot,
      hour:'2 hours ago'
    },
    {
      image: Post6,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Delivery Executive",
      companyname: "A-one Logistics",
      rating: "4.0",
      reviews: "2500 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "0-5 yrs",
      package: "1,00,000 - 3,00,000 INR",
      skill: {
        item1: "Customer service",
        item2: "Route Planning",
        item3: "Brand awareness",
        item4: "Sourcing",
        item5: "Compliance",
        item6: "Warehouse",
        item7: "Field work",
      },
      posted: "Posted on a day ago",
      save: "save",
      saved:"Saved on  20 Dec, 2023",
      sts:"Rejected",
      applied:"Applied on  20 Dec, 2023 ",
      icon12:Applied,
      stsclass:'rejected',
      icon13:Job3Dot,
      hour:'11:30 AM'

    },
    {
      image: Post7,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Junior DBA",
      companyname: "Teleinfra Systems",
      rating: "4.0",
      reviews: "2500 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "0.5 yrs",
      package: "4,00,000 - 5,00,000 INR",
      skill: {
        item1: "MySQL",
        item2: "Route Query",
        item3: "Linux",
        item4: "Cloud",
        item5: "Scripting",
        item6: "Database",
        item7: "Phyton",
        item8: "Database Management",
      },
      posted: "Posted on 25 Dec, 2023",
      save: "save",
      saved:"Saved on  20 Dec, 2023",
      sts:"Selected",
      applied:"Applied 2 days ago",
      icon12:Applied,
      stsclass:'selected',
      icon13:Job3Dot,     
       hour:'02:08 PM',


    },
    {
      image: Post7,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Delivery Executive",
      companyname: "A-one Logistics",
      rating: "4.0",
      reviews: "2500 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "0-5 yrs",
      package: "1,00,000 - 3,00,000 INR",
      skill: {
        item1: "Customer service",
        item2: "Route Planning",
        item3: "Brand awareness",
        item4: "Sourcing",
        item5: "Compliance",
        item6: "Warehouse",
        item7: "Field work",
      },
      posted: "Posted on a day ago",
      save: "save",
      saved:"Saved on  20 Dec, 2023",
      sts:"Rejected",
      applied:"Applied on  20 Dec, 2023 ",
      icon12:Applied,
      stsclass:'rejected',
      icon13:Job3Dot,
      hour:'10:15 AM',


    },
    {
      image: Post7,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Delivery Executive",
      companyname: "A-one Logistics",
      rating: "4.0",
      reviews: "2500 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "0-5 yrs",
      package: "1,00,000 - 3,00,000 INR",
      skill: {
        item1: "Customer service",
        item2: "Route Planning",
        item3: "Brand awareness",
        item4: "Sourcing",
        item5: "Compliance",
        item6: "Warehouse",
        item7: "Field work",
      },
      posted: "Posted on a day ago",
      save: "save",
      saved:"Saved on  20 Dec, 2023",
      sts:"Rejected",
      applied:"Applied 2 days ago",
      icon12:Applied,
      stsclass:'rejected',
      icon13:Job3Dot,
      hour:'10:45 AM',


    },
    {
      image: Post7,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Delivery Executive",
      companyname: "A-one Logistics",
      rating: "4.0",
      reviews: "2500 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "0-5 yrs",
      package: "1,00,000 - 3,00,000 INR",
      skill: {
        item1: "Customer service",
        item2: "Route Planning",
        item3: "Brand awareness",
        item4: "Sourcing",
        item5: "Compliance",
        item6: "Warehouse",
        item7: "Field work",
      },
      posted: "Posted on a day ago",
      save: "save",
      saved:"Saved on  20 Dec, 2023",
      sts:"Rejected",
      applied:"Applied on  20 Dec, 2023 ",
      icon12:Applied,
      stsclass:'rejected',
      icon13:Job3Dot,
      hour:'11:15 AM',


    },
    {
      image: Post7,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Delivery Executive",
      companyname: "A-one Logistics",
      rating: "4.0",
      reviews: "2500 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "0-5 yrs",
      package: "1,00,000 - 3,00,000 INR",
      skill: {
        item1: "Customer service",
        item2: "Route Planning",
        item3: "Brand awareness",
        item4: "Sourcing",
        item5: "Compliance",
        item6: "Warehouse",
        item7: "Field work",
      },
      posted: "Posted on a day ago",
      save: "save",
      saved:"Saved on  20 Dec, 2023",
      sts:"Shortlisted",
      applied:"Applied 2 days ago",
      icon12:Applied,
      stsclass:'shortlisted',
      icon13:Job3Dot,
      hour:'11:30 AM',

    },
    {
      image: Post7,
      icon: Post1, //location
      icon1: Post2, // bag
      icon3: Post3, //rupee
      icon4: Post4, //skill
      icon8: jS, //review
      icon9: tp, //post time
      icon10: SaveIcon, //post save
      icon11:SavedIcon, //saved icon
      Roll: "Delivery Executive",
      companyname: "A-one Logistics",
      rating: "4.0",
      reviews: "2500 reviews",
      location: "Chennai",
      time: "Full Time",
      Experience: "0-5 yrs",
      package: "1,00,000 - 3,00,000 INR",
      skill: {
        item1: "Customer service",
        item2: "Route Planning",
        item3: "Brand awareness",
        item4: "Sourcing",
        item5: "Compliance",
        item6: "Warehouse",
        item7: "Field work",
      },
      posted: "Posted on a day ago",
      save: "save",
      saved:"Saved on  20 Dec, 2023",
      sts:"Shortlisted",
      applied:"Applied on  20 Dec, 2023 ",
      icon12:Applied,
      stsclass:'shortlisted',
      icon13:Job3Dot,
      hour:'1:00 PM',

    },
  ];

  export default data