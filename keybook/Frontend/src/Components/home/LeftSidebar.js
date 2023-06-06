import React, { useState, useEffect } from "react";
import Unfollow from "../buttons/UnfollowButton";
import { ButtonDefault } from "../buttons/ButtonDefault";
import getRequest from '../../utils/getRequest';


function LeftSidebar() {
  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem("userId");
  const [renderedUsers, setRenderedUsers] = useState(0);

  async function fetchUsers() {
    try { 
      const response = await getRequest({
        endpoint: `follow/following/${userId}`
      })            
      setUsers(response);
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
    <div className="default-card-left ">
      <h2>SIGUIENDO</h2>
      {users.slice(0, renderedUsers + 5).map((user) => (
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

      <ButtonDefault
        content="Mostrar más"
        onClick={() => setRenderedUsers(renderedUsers + 5)}
      />
    </div>
  );
}

export default LeftSidebar;
