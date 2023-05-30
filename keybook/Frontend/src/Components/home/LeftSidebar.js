import React, { useState, useEffect } from "react";
import Unfollow from "../buttons/UnfollowButton";

function LeftSidebar() {
  const [users, setUsers] = useState([]);  
  const userId = localStorage.getItem('userId');

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
  
  return (
    <div className="default-card-left ">
      <h2>SIGUIENDO</h2>
      {users.map((user) => (
        <ul key={user.id}>
        <a  title={`Perfil ${user.name}`} href={`/profile/${user.id}`}>
          <img src={user.profile_picture} alt="Avatar" className="avatar" /></a>
          <li><h4>{user.name} {user.last_name}</h4></li>
          <li>           
           <Unfollow id={user.id}/>            
          </li>
        </ul>
      ))}
    </div>
  );
}

export default LeftSidebar;