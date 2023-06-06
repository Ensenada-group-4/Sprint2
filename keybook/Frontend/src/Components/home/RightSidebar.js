import React, { useState, useEffect } from "react";
import FollowButton from "../buttons/FollowButton";
import { ButtonDefault } from "../buttons/ButtonDefault";
import { useNavigate } from "react-router-dom";
import getRequest from '../../utils/getRequest';

function RightSidebar() {
  const [requests, setRequests] = useState([]);
  const loggedUserId = localStorage.getItem("userId");
  const [page] = useState(1);

  async function fetchRequests() {
    try {
      const response = await getRequest({
        endpoint: `follow/not-following/${loggedUserId}`
      })
      setRequests(response);
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
      const response = await fetch(url + "/follow", requestOptions);

      const data = await response.json();
      setRequests(requests.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  }

  //Set interval to check frequently for changes in DB 
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchRequests();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [requests]);

  function handleFollow(userId) {
    sendFollowRequest(userId);
  }

  //Button show more - redirect to /users 

  function MyButton() {
    const navigate = useNavigate();

    function handleClick() {
      navigate("/Users");
    }

    return <ButtonDefault content="Mostrar más" onClick={handleClick} />;
  }

  return (
    <div className="default-card-right">
      <h2>SUGERENCIAS</h2>
      <div>
        {requests.slice(0, 6).map((user) => (
          <div key={user.id}>
            <a title={`Perfil ${user.name}`} href={`/profile/${user.id}`}>
              <img src={user.profile_picture} alt="Avatar" className="avatar" />
            </a>
            <div>
              <h4>
                {user.name} {user.last_name}
              </h4>
            </div>
            <div>
              <FollowButton
                id={user.id}
                onClick={handleFollow}
                setRequests={setRequests}
              />
            </div>
          </div>
        ))}
        <MyButton />
      </div>
    </div>
  );
}

export default RightSidebar;
