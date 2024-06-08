import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const Item = (props) => {
  const { data } = props;
  return (
    <Box sx={{ p: 1.5, border: "1px solid #000", borderRadius: "12px" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="subtitle1">{data.text}</Typography>
        <Stack direction="row" spacing={0.5}>
          <SvgIcon sx={{ fontSize: "20px", color: "blue", cursor: "pointer" }}>
            <AiFillEdit />
          </SvgIcon>
          <SvgIcon sx={{ fontSize: "20px", color: "red", cursor: "pointer" }}>
            <AiFillDelete />
          </SvgIcon>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Item;
