import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../../src/App.css";
import FollowButton from "../buttons/FollowButton";

function UsersGridUnfollow() {
  const [requests, setRequests] = useState([]);
  const loggedUserId = localStorage.getItem("userId");
  const [page] = useState(1);

  async function fetchRequests() {
    try {
      const response = await fetch(
        `http://localhost:3000/follow/not-following/${loggedUserId}`
      );
      const data = await response.json();
      setRequests(data);    
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRequests();
  }, [page, loggedUserId]);

  async function sendFollowRequest(userId) {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          followerId: localStorage.getItem("userId"),
          followingId: userId,
        }),
      };
      const response = await fetch(
        "http://localhost:3000/follow",
        requestOptions
      );
      const data = await response.json();      
      setRequests(requests.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchRequests();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [requests]);

  function handleFollow(userId) {
    sendFollowRequest(userId);
  }

  return (
    <>
      {requests.map((user) => (
        <div className="col-sm-3" key={user.id}>
          <div className="default-card friend-box">
            <Link to={`/profile/${user.id}`}>
              <img
                className="friend-avatar"               
                src={user.profile_picture}
                alt={user.name}
              />
            </Link>
            <h5>
              {user.name} {user.last_name}
            </h5>
            <FollowButton
              id={user.id}
              onClick={() => handleFollow(user.id)}
              setRequests={setRequests}
            />
          </div>
        </div>
      ))}
    </>
  );
}
export default UsersGridUnfollow;
