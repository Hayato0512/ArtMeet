import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { axiosInstance } from "./config";
import { useState } from "react";

export default function Logout() {
  const user = useSelector(selectUser);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const [userIdToFollow, setUserIdToFollow] = useState(0);
  const [followings, setFollowings] = useState([]);

  //   useEffect(() => {
  //     console.log(`followings changed now, it's ${JSON.stringify(followings)}`);
  //   }, [followings]);

  useEffect(() => {
    console.log(
      `useEffect for user is called because user is ${JSON.stringify(user)}`
    );
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get(
          `api/query/readuserbyemail/${user.email}`
        );
        console.log(`hey it's logout page, res.data ${res.data[0]}`);
        setUserId(res.data[0].id);
      } catch (error) {}
    };
    fetchUser();
  }, [user]);
  useEffect(() => {
    console.log(`useEffect for userId is called because userId is ${userId}`);
    fetchFollowings();
  }, [userId]);

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
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFollowings = async () => {
    if (userId) {
      try {
        var arrayOfFollowings = [];
        const res = await axiosInstance.get(
          `api/query/readfollowings/${userId}`
        );
        function containsObject(obj, list) {
          var i;
          for (i = 0; i < list.length; i++) {
            console.log(
              `containsObject obj ${JSON.stringify(
                obj
              )}, list[i] ${JSON.stringify(list[i])}`
            );
            if (list[i].id === obj.id) {
              console.log(`containsObjectTRUETRUETRUE`);
              return true;
            }
          }

          return false;
        }
        res.data.forEach(async (element) => {
          console.log(`for each, element ${element.followeduserid}`);
          try {
            const res = await axiosInstance.get(
              `api/query/readuserbyid/${element.followeduserid}`
            );
            console.log(`heyheyhey ${JSON.stringify(res.data[0])}`);
            if (containsObject(res.data[0], followings)) {
              console.log(
                `${res.data[0].name} already exist, so don't update the list`
              );
            } else {
              setFollowings((current) => [...current, res.data[0]]);
            }
            console.log(
              `after pushing, arrayOFFollowing is ${JSON.stringify(
                arrayOfFollowings
              )}`
            );
            console.log(
              `after setFollowing, state is ${JSON.stringify(followings)}`
            );
          } catch (error) {}
        });
      } catch (error) {}
    }
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
          {user
            ? followings.map((user) => (
                <h3 key={user.id}>{user ? user.name : "hey"}</h3>
              ))
            : ""}
        </div>
        <button type="submit" className="submitButton">
          submit
        </button>
      </form>
      <h2>{}</h2>
    </div>
  );
}
