import React from "react";
import Follow from "../buttons/FollowButton";
import Unfollow from "../buttons/UnfollowButton";

export const Prueba = () => {

  return (
    <div className="row">
      <Follow id={13} /> ,
      <Unfollow id={13} />
    </div>
  );
};