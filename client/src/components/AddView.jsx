import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import React from "react";
import { addItem } from "../api/HandleApi";

const AddView = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const { setAllData } = props;
  return (
    <Stack spacing={0.5}>
      <Typography variant="body1"> Add new todo from below</Typography>
      <Stack direction={"row"} spacing={1}>
        <TextField
          value={todoValue}
          variant="outlined"
          onChange={(e) => setTodoValue(e.target.value)}
          size="small"
        />
        <Button
          variant="contained"
          onClick={() => addItem(todoValue, setTodoValue, setAllData)}
        >
          Add
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddView;
