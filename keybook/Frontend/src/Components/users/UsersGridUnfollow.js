import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FollowButton from "../buttons/FollowButton";
import getRequest from '../../utils/getRequest';

function UsersGridUnfollow() {
  const [users, setUsers] = useState([]);
  const loggedUserId = localStorage.getItem("userId");

  async function fetchRequests() {
    try {      
      const response = await getRequest({
        endpoint: `follow/not-following/${loggedUserId}`
      })
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRequests();
  }, []);

  //Set interval to check frequently for changes in DB 
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchRequests();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [users]);

  function handleFollow(userId) {
    sendFollowRequest(userId);
  }

  return (
    <>
      {users.map((user) => (
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
              setUsers={setUsers}
            />
          </div>
        </div>
      ))}
    </>
  );
}
export default UsersGridUnfollow;
