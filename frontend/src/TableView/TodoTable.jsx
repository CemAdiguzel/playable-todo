import React, { useEffect, useState } from "react";
import AddView from "../components/AddView";
import Item from "../components/Item";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
const baseUrl = "http://localhost:3001";

const TodoTable = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getAllItems(setAllData);
  }, []);

  const getAllItems = (setItems) => {
    const token = localStorage.getItem("auth");
    axios
      .post(`${baseUrl}/getItems`, null, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        setItems(data);
      });
  };

  return (
    <Stack spacing={1}>
      <AddView setAllData={setAllData} allData={allData} />
      {allData.length > 0 ? (
        allData.map((d) => (
          <Item
            key={d._id}
            data={d}
            setAllData={setAllData}
            allData={allData}
          />
        ))
      ) : (
        <Typography fontSize="12px" color="#667085" textAlign={"center"}>
          No items in your list. Try to add one
        </Typography>
      )}
    </Stack>
  );
};

export default TodoTable;
