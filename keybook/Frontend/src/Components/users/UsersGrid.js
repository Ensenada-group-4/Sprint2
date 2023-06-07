import React, { useState } from "react";
import UsersGridFollow from "./UsersGridFollow";
import UsersGridUnfollow from "./UsersGridUnfollow";
import SearchBarUsers from "./SearchBarUsers";

function UserGrid() { 
  const [users, setUsers] = useState([]);

  const handleSearchResults = (results) => {
    setUsers(results)
  };

  return (
    <>
      <SearchBarUsers onSearchResults={handleSearchResults} />
      <div className="container friend-structure">
        <div className="row">
          <UsersGridFollow />
          <UsersGridUnfollow />
        </div>
      </div>
    </>
  );
}

export default UserGrid;