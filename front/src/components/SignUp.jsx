import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  
  const updateEmailField = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <h1>{email}</h1>
      <input type="email" name="email" onChange={updateEmailField} />
    </>
  );
};

export default SignUp;
