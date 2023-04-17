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
  const [userIdToFollow, setUserIdToFollow] = useState(0);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    console.log(`followings changed now, it's ${followings}`);
  }, [followings]);

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
  useEffect(() => {
    fetchFollowings();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  const followClicked = async (e) => {
    e.preventDefault();
    // INSERT INTO follows (userId, followeduserid) VALUES (user.id, userIdToFollow)
    console.log(
      `follow cllicked. user.id ${user.id}, userId to follow ${userIdToFollow}`
    );
    try {
      const res = await axiosInstance.post(
        `api/query/follows/${userId}/${userIdToFollow}`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFollowings = async () => {
    var arrayOfFollowings = [];
    try {
      const res = await axiosInstance.get(`api/query/readfollowings/${userId}`);

      res.data.forEach(async (element) => {
        console.log(`for each, element ${element.followeduserid}`);
        //pass the userID and get user
        try {
          const res = await axiosInstance.get(
            `api/query/readuserbyid/${element.followeduserid}`
          );
          console.log(`heyheyhey ${JSON.stringify(res.data)}`);
          arrayOfFollowings.push(res.data);
          console.log(
            `after pushing, arrayOFFollowing is ${arrayOfFollowings}`
          );
        } catch (error) {}
      });
      console.log(
        `Before setFollowings, arrayOFFollowing is ${arrayOfFollowings}`
      );
      setFollowings(arrayOfFollowings);
      //setFollowings
      // setFollowings(res)
    } catch (error) {}
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
      <h4>who do you want to follow? </h4>
      <form action="" className="" onSubmit={(e) => followClicked(e)}>
        <input
          type="id"
          placeholder="id"
          value={userIdToFollow}
          onChange={(e) => setUserIdToFollow(e.target.value)}
        />
        <div>
          {followings.map((user) => (
            <h3>{user.name}</h3>
          ))}
        </div>
        <button type="submit" className="submitButton">
          submit
        </button>
      </form>
      <h2>{}</h2>
    </div>
  );
}
