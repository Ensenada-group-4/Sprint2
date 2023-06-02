import React, { useState, useEffect } from "react";
import Unfollow from "../buttons/UnfollowButton";
import { Link } from "react-router-dom";
import { url } from "../../utils/url";

function UsersGridFollow({ }) {
  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem("userId");

  async function fetchUsers() {
    try {
      const response = await fetch(url + `follow/following/${userId}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  //Set interval to check frequently for changes in DB 
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchUsers();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [users]);

  return (
    <>
      {users.map((user) => (
        <div className="col-sm-3" key={user.id}>
          <div className="default-card friend-box">
            <Link to={`/profile/${user.id}`}             >
              <img
                className="friend-avatar"
                src={user.profile_picture}
                alt={user.name} />
            </Link>
            <h5>
              {user.name} {user.last_name}
            </h5>
            <Unfollow id={user.id} setUsers={setUsers} />
          </div>
        </div>
      ))}
    </>
  );
}
export default UsersGridFollow;
