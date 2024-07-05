import React from "react";
import "../MyActivityViewed/MyView.css";
import PostView from "./PostView";
import PostViewBreadcrums from "./PostViewBreadcrums.js";
import PostViewHeader from "./PostViewHeader.js";
import "../MyActivityViewed/MyView.css";
import "../MyViewedPosting/PostView.css";


const MyPostViewMain = () => {
  return (
    <div className="myActive">
      <PostViewHeader />
      <PostViewBreadcrums />
      <PostView />
    </div>
  );
};

export default MyPostViewMain;
