import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import LoggedInfo from "./LoggedInfo";
import CenterMenu from "./CenterMenu";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Follow from "../buttons/FollowButton";
import { Prueba } from "./PruebaFollow";


export default function Home() {
  return (
    <>
      <div className="container-fluid main-structure">
        <div className="row">
          <div className="col-sm-5 col-md-4 col-lg-3">
            {/* <LoggedInfo /> */}
            {/* <LeftSidebar /> */}
          </div>
          <div className="col-sm-7 col-md-7 col-lg-6">
            {/* <CenterMenu /> */}
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            {/* <RightSidebar /> */}
            <Prueba/>
          </div>
        </div>
      </div>
    </>
  );
}

