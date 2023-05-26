import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ProfileHobbies from './ProfileHobbies';
import ProfileStudies from './ProfileStudies';
import ProfileLanguages from './ProfileLanguages';
import ProfileTools from './ProfileTools';

function Profile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();



  useEffect(() => {
    const fetchUser = async () => {
      const userLog = localStorage.getItem('userId')
      //   const selectedUserId = localStorage.getItem('selectedUserId');
      //   console.log('ID del usuario seleccionado:', selectedUserId);

      //   let selectedUser;

      //   if (selectedUserId) {
      const response = await fetch(`http://localhost:3000/users/user/${userId || userLog}`);
      const data = await response.json();
      // selectedUser = data;
      // } else {
      //   const loggedInUserId = localStorage.getItem('userId');
      // selectedUser = { id: userId || loggedInUserId };
      setUser(data);
      console.log({ userId });
      console.log(data);
    }


    fetchUser();
  }, [userId]);

  return (
    <div id="cuenta">
      <div className="container-fluid main-structure">
        <div className="row">
          <div className="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileStudies user={user} />}
            {user && <ProfileTools user={user} />}
          </div>
          <div className="col-sm-7 col-md-7 col-lg-6">
            {user && <ProfileCard user={user} />}
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileHobbies user={user} />}
            {user && <ProfileLanguages user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;

