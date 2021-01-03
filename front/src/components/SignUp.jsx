import React, { useState } from "react";
import { Button, TextField, Icon, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });
  const [alert, setAlert] = useState("");
  const [open, setOpen] = useState(false);

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(
        (res) => setAlert(res.flash),
        (err) => setAlert(err.flash)
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          id="email"
          label="E-mail"
          onChange={updateUser}
        />
        <TextField
          type="text"
          name="name"
          id="name"
          onChange={updateUser}
          label="Name"
        />
        <TextField
          type="text"
          name="lastname"
          id="lastname"
          label="Lastname"
          onChange={updateUser}
        />
        <TextField
          type="password"
          name="password"
          id="password"
          label="Password"
          onChange={updateUser}
        />
        <TextField
          type="password"
          name="passwordBis"
          id="passwordBis"
          label="Confirm password"
          onChange={updateUser}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
          onClick={handleClick}
          style={{ 'margin': '1rem' }}
        >
          Submit
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {alert === "User has been signed up !" ? (
          <Alert onClose={handleClose} severity="succes">
            {alert}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error">
            {alert}
          </Alert>
        )}
      </Snackbar>
    </>
  );
};

export default SignUp;
