import React, { useState, useEffect } from "react";

import UsersGridFollow from "./UsersGridFollow";
import UsersGridUnfollow from "./UsersGridUnfollow";
import SearchBarUsers from "./SearchBarUsers";

function UserGrid() {
  const [following, setFollowing] = useState([]);
  const [users, setUsers] = useState([]);

  const handleSearchResults = (results) => {
    setUsers(results)
  };

  return (
    <>
      <SearchBarUsers onSearchResults={handleSearchResults} />
      <div className="container friend-structure">
        <div className="row">
          <UsersGridFollow
          // users={users}
          // following={following}
          // setFollowing={setFollowing} 

          />
          <UsersGridUnfollow />
        </div>
      </div>
    </>
  );
}

export default UserGrid;