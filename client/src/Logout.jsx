import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { axiosInstance } from "./config";
import { useState } from "react";

export default function Logout() {
  const user = useSelector(selectUser);
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get(
          `api/query/readuserbyemail/${user.email}`
        );
        console.log(`hey it's logout page, res.data ${res.data[0].isArtist}`);
        setUserId(res.data[0].id);
      } catch (error) {}
    };
    fetchUser();
  }, [user]);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div>
      <h1>
        Welcome
        <span>{user.name}</span>
        <span>userId = {userId}</span>
      </h1>
      <button className="logoutButton" onClick={(e) => handleLogout(e)}>
        logout
      </button>
      <h2>{}</h2>
    </div>
  );
}
