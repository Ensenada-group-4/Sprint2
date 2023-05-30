import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import LoggedInfo from "./LoggedInfo";
import NewPost from "./NewPost";
import PostFeed from "./PostFeed";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  return (
    <>
      <div className="container-fluid main-structure">
        <div className="row">
          <div className="col-sm-5 col-md-4 col-lg-3">
            <LoggedInfo />
            <LeftSidebar />
          </div>
          <div className="col-sm-7 col-md-7 col-lg-6">
            <NewPost />
            <PostFeed />
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            <RightSidebar />           
          </div>
        </div>
      </div>
    </>
  );
}

