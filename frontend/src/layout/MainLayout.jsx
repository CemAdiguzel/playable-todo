import { Grid } from "@mui/material";
import React from "react";
import TodoTable from "../TableView/TodoTable";

const MainLayout = () => {
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
      <TodoTable />
    </Grid>
  );
};

export default MainLayout;
