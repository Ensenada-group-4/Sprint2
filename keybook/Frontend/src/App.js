import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";
import UsersView from "./views/UsersView";
import EditProfileView from "./views/EditProfileView";
import ErrorView from "./views/ErrorView";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/error" element={<ErrorView />} />
            <Route path="*" element={<Navigate to="/error" />} />
            {isAuthenticated ? (
              <>
                <Route path="/home" element={<HomeView />} />
                <Route path="/profile" element={<ProfileView />} />
                <Route path="/profile/:userId" element={<ProfileView />} />
                <Route path="/users" element={<UsersView />} />
                <Route path="/edit" element={<EditProfileView />} />
              </>
            ) : (
              <Route path="/error" element={<Navigate to="/error" />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
