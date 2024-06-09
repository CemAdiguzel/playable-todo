import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:3001";

const Login = (props) => {
  const { setIsAuthenticated } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginFunction = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      localStorage.setItem("auth", data.token);
      setIsAuthenticated(data.token);

      navigate("/");
    } catch (err) {
      alert(err.request.response);
      return err;
    }
  };
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="body1">
          Welcome to Playable ToDo App by Cem
        </Typography>
        <Typography variant="caption">
          Click{" "}
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            here{" "}
          </span>{" "}
          to register.
        </Typography>
        <Stack spacing={0.5}>
          <Typography variant="caption">Email:</Typography>
          <TextField
            variant="outlined"
            size="small"
            value={email}
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
        <Stack spacing={0.5}>
          <Typography variant="caption">Password:</Typography>
          <TextField
            variant="outlined"
            size="small"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <Button
          sx={{
            backgroundColor: "#000",
            fontSize: "12px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
          size="small"
          variant="contained"
          onClick={() => handleLoginFunction()}
        >
          Login
        </Button>
      </Stack>
    </Grid>
  );
};

export default Login;
