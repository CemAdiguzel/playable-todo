import { Grid } from "@mui/material";
import TodoTable from "../TableView/TodoTable";
import React from "react";

const MainLayout = (props) => {
  const { setAllData } = props;
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
      <TodoTable setAllData={setAllData} />
    </Grid>
  );
};

export default MainLayout;
