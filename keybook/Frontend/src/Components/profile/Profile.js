import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import ProfileHobbies from './ProfileHobbies';
import ProfileStudies from './ProfileStudies';
import ProfileLanguages from './ProfileLanguages';
import ProfileTools from './ProfileTools';

function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const id = 1;
      const response = await fetch(`http://localhost:3000/users/user/${id}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div id="cuenta">
      <div class="container-fluid main-structure">
        <div class="row">
          <div class="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileStudies userId={user.id} />}
            {user && <ProfileTools userId={user.id} />}
          </div>
          <div class="col-sm-7 col-md-7 col-lg-6">
            {user && <ProfileCard userId={user.id} />}
          </div>
          <div class="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileHobbies userId={user.id} />}
            {user && <ProfileLanguages userId={user.id} />}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;