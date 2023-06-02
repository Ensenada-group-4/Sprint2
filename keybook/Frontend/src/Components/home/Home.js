import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import LoggedInfo from "./LoggedInfo";
import Postlist from "./PostList";

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
            <Postlist />
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
