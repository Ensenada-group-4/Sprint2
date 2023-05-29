import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
// import SubmitButton from "../ButtonStyle";

function RightSidebar({ loggedUserId }) {
  const [requests, setRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [page, setPage] = useState(1);
  async function fetchRequests() {
    try {
      const response = await fetch(
        `http://localhost:3000/users?page=${page}&limit=3&not_friends_with=${loggedUserId}`
      );
      const data = await response.json();
      setRequests(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function followUser(userId) {
    try {
      const response = await fetch(
        `http://localhost:3000/follow/follow/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_friend1_id: localStorage.getItem("userId"),
            user_friend2_id: userId,
            status: "accepted",
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  function handleFollowUser(user) {
    followUser(user.id);
    setRequests(requests.filter((request) => request.id !== user.id));
    setFriends([...friends, user]);
  }
  useEffect(() => {
    fetchRequests();
  }, [page]);
  return (
    <div className="default-card-right">
      <h4>SOLICITUDES</h4>
      <ul>
        {requests.map((user) => (
          <li key={user.id}>
            <a title={`Perfil ${user.name}`}>
              <li>
                <img
                  src={user.profile_picture}
                  alt="Avatar"
                  className="avatar"
                />
              </li>
              <li>{user.name}</li>
              {/* <li>
                <SubmitButton
                  type="submit"
                  content="Seguir"
                  id="register-form-buttons"
                  onClick={() => handleFollowUser(user)}
                />
              </li> */}
            </a>
          </li>
        ))}
      </ul>   
    </div>
  );
}
export default RightSidebar;
