import {Box, Button, TextField, Snackbar, Alert, Link, Paper, Container, Avatar} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {LocalTaxi, LocationCity} from "@mui/icons-material";

const ReserveTaxi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const[latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude.toString())
      setLongitude(pos.coords.longitude.toString())
    })
  },[])

  const handleOnRegister = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post(`http://localhost:3002/customer/register`, formData)
      .then(() => {
        setSuccess(true);
        handleReserve();
      })
      .catch((e) => {
        console.log(e.message);
        setError(true);
      });
  };


  //RESERVE TAXI=============================================================================================================================
  const handleReserve = () => {
      const data = {
        username: name,
        email: email,
        date: Date.now().toString()
      }

    axios.post(`http://localhost:8280/taxi/book`, data).then(() => {
      alert("Taxi has been booked for your location")
    }).catch((e) => {
      console.log(e.message);
      setError(true);
    });
  }

  const handleOnSignIn = () => {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    axios
      .post(`http://localhost:3002/customer/login`, formData)
      .then(() => {
        setSuccess(true);
        window.location.href = "/manageTaxi";
      })
      .catch((e) => {
        console.log(e.message);
        setError(true);
      });
  }

  return (
      <Container>
        <br/>
      <Paper>
    <div
      style={{
        paddingTop: 40,
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        boxShadow: '30px',
        borderRadius: '20px'
      }}
    >
      <label style={{ fontSize: "30px" }}>Taxi Service Registration</label>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 10, marginBottom: 10, marginX: 30}}>
        <TextField
          type="text"
          margin="normal"
          fullWidth
          label="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="email"
          margin="normal"
          fullWidth
          label="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="password"
          margin="normal"
          fullWidth
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => handleOnRegister()}
        >
          Register and Reserve
        </Button>
      </Box>
      <label>OR SIGN IN</label>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 10, marginX: 30 }}>
        <TextField
          type="email"
          margin="normal"
          fullWidth
          label="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="password"
          margin="normal"
          fullWidth
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => handleOnSignIn()}
        >
          Sign In and Reserve
        </Button>
      </Box>
      <Snackbar
        open={error || success}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        {error ? (
          <Alert severity="error">
            {error ? "Error!" : success ? "Success!" : null}
          </Alert>
        ) : (
          <Alert severity="success">
            {error ? "Error!" : success ? "Success!" : null}
          </Alert>
        )}
      </Snackbar>
    </div>
      </Paper>
      </Container>
  );
};

export default ReserveTaxi;
