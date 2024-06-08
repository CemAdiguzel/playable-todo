import React from "react";
import AddView from "../components/AddView";
import Item from "../components/Item";
import { Stack } from "@mui/material";

const TodoTable = (props) => {
  const { setAllData, allData } = props;
  return (
    <Stack spacing={1}>
      <AddView setAllData={setAllData} />
      {allData.map((d) => (
        <Item key={d._id} data={d} />
      ))}
    </Stack>
  );
};

export default TodoTable;
