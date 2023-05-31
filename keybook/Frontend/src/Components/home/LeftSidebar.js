import React, { useState, useEffect } from "react";
import Unfollow from "../buttons/UnfollowButton";

function LeftSidebar() {
  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem("userId");

  async function fetchUsers() {
    try {
      const response = await fetch(
        `http://localhost:3000/follow/following/${userId}`
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchUsers();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [users]);

  return (
    <div className="default-card-left ">
      <h2>SIGUIENDO</h2>
      {users.map((user) => (
        <div key={user.id}>
          <a title={`Perfil ${user.name}`} href={`/profile/${user.id}`}>
            <img src={user.profile_picture} alt="Avatar" className="avatar" />
          </a>
          <h4>
            {user.name} {user.last_name}
          </h4>
          <Unfollow id={user.id} setUsers={setUsers} />
        </div>
      ))}
    </div>
  );
}

export default LeftSidebar;
