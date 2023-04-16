import { useRef } from "react";
import { axiosInstance } from "./config";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {}, [users]);
  const userIdToDelete = useRef();

  const createPost = async () => {
    try {
      const res = await axiosInstance.get("api/query/post");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFirstUser = async () => {
    try {
      const res = await axiosInstance.delete("api/query/deletefirst");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserById = async () => {
    try {
      const userObject = {
        id: userIdToDelete.current.value,
      };
      const res = await axiosInstance.delete(
        `api/query/deletebyid/${userIdToDelete.current.value}`,
        userObject
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const readUsers = async () => {
    try {
      const res = await axiosInstance.get("api/query/readusers/");
      console.log(res.data);
      const arrayToPass = [];
      res.data.forEach((user) => {
        arrayToPass.push(user);
      });
      setUsers(arrayToPass);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={createPost}>send query</button>
      <button onClick={deleteFirstUser}>delete first one query</button>
      <button onClick={readUsers}>readUsers</button>
      <button onClick={deleteUserById}>delete user id:</button>
      <input
        placeholder="Username"
        required
        ref={userIdToDelete}
        className="loginInput"
      />
      Hey Home
      <div>
        {users.map((user) => (
          <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.isArtist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
