import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { axiosInstance } from "./config";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`the user is ${name}, ${email}, ${password}`);
    //check if the email and pasword is correct by throwing http request and get true/false
    const objectToPass = {
      email: email,
    };
    try {
      const res = await axiosInstance.get(`api/query/readuserbyemail/${email}`);
      console.log(res.data[0].password);
      const returnedPassword = res.data[0].password;
      if (returnedPassword == password) {
        dispatch(
          login({
            name: res.data[0].name,
            email: email,
            password: password,
            loggedIn: true,
          })
        );
      } else {
        console.log(`Wrong credential.`);
      }
    } catch (error) {
      console.log(error);
    }

    // dispatch(
    //   login({
    //     name: name,
    //     email: email,
    //     password: password,
    //     loggedIn: true,
    //   })
    // );
  };
  return (
    <div>
      Login
      <form action="" className="loginForm" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submitButton">
          submit
        </button>
      </form>
    </div>
  );
}
