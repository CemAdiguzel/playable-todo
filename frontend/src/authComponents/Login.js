import { Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack spacing={1}>
      <Stack spacing={0.5}>
        <Typography variant="caption">Email:</Typography>
        <TextField
          variant="outlined"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Stack>
      <Stack spacing={0.5}>
        <Typography variant="caption">Password:</Typography>
        <TextField
          variant="outlined"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
    </Stack>
  );
};

export default Login;
