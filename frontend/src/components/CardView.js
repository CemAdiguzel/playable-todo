import { Box, Typography } from "@mui/material";
import React from "react";

const CardView = (props) => {
  const { data } = props;
  console.log(data.text);
  return -(
    (
      // <Box sx={{ p: 2, border: "1px solid #000", borderRadius: "12px" }}>
      //   <Typography variant="subtitle1">hello</Typography>
      // </Box>
      <Typography>hello</Typography>
    )
  );
};

export default CardView;
