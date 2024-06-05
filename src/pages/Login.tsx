import React, { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [newUsername, setNewUsername] = useState<string>("");

  const dispatch = useDispatch(); // use whenever you want to call the functions from store (in this case login, logout)
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <h1>
      {username}
      THIS IS THE LOGIN PAGE
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}> Logout </button>
    </h1>
  );
};
