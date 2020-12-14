import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "test@test.com",
    password: "azerty",
    name: "test",
    lastname: "TEST",
  });

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail
          <input type="email" name="email" id="email" onChange={updateUser} />
        </label>
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" onChange={updateUser} />
        </label>
        <label htmlFor="lastname">
          Lastname
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={updateUser}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            onChange={updateUser}
          />
        </label>
        <label htmlFor="passwordBis">
          Confirm Password
          <input
            type="password"
            name="passwordBis"
            id="passwordBis"
            onChange={updateUser}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default SignUp;
