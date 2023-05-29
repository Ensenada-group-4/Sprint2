import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import SubmitButton from "../ButtonStyle";
function LeftSidebar() {
  const [users, setUsers] = useState([]);
  const [clickedUserId, setClickedUserId] = useState(null);
  const userId = 1;
  async function fetchUsers() {
    try {
      const response = await fetch(
        `http://localhost:3000/follow/following/${userId}`
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  function handleUserClick(userId) {
    setClickedUserId(userId);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="default-card-left ">
      <h4>AMIGOS</h4>
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.profile_picture} alt="Avatar" className="avatar" />
          <li>{user.name} </li>
          <li>
            {" "}
            <SubmitButton
              href={`/users/${user.id}`}
              onClick={() => handleLikeClick(`/users/${user.id}`)}
              content="Ver"
            />
          </li>
        </li>
      ))}
    </div>
  );
}
export default LeftSidebar;