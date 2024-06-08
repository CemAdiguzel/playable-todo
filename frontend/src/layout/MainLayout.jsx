import { Grid } from "@mui/material";
import React from "react";
import TodoTable from "../TableView/TodoTable";

const MainLayout = (props) => {
  const { setAllData, allData } = props;
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
      <TodoTable setAllData={setAllData} allData={allData} />
    </Grid>
  );
};

export default MainLayout;