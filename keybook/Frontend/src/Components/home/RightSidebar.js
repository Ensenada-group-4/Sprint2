import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import FollowButton from "../buttons/FollowButton";

function RightSidebar() {
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
      console.log(data);
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
      console.log(data);
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
    <div className="default-card-right">
      <h2>SUGERENCIAS</h2>
      <ul>
        {requests.map((user) => (
          <li key={user.id}>
            <a title={`Perfil ${user.name}`} href={`/profile/${user.id}`}>
              <img src={user.profile_picture} alt="Avatar" className="avatar" />
            </a>
            <li>
              <h4>
                {user.name} {user.last_name}
              </h4>
            </li>
            <li>
              <FollowButton
                id={user.id}
                onClick={handleFollow}
                setRequests={setRequests} // Nueva prop para actualizar la lista de sugerencias
              />
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightSidebar;
