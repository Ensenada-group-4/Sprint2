import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import LoggedInfo from "./LoggedInfo";
import CenterMenu from "./CenterMenu";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  return (
    <>
      <div class="container-fluid main-structure">
        <div class="row">
          <div class="col-sm-5 col-md-4 col-lg-3">
            <LoggedInfo />
            <LeftSidebar />
          </div>
          <div class="col-sm-7 col-md-7 col-lg-6">
            <CenterMenu />
          </div>
          <div class="col-sm-5 col-md-4 col-lg-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

