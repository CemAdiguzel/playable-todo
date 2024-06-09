import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import EditDialog from "./Dialogs/EditDialog";
import DeleteDialog from "./Dialogs/DeleteDialog";

const Item = (props) => {
  const { data, setAllData, allData } = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <>
      <Box
        sx={{
          p: 1.5,
          border: "1px solid #000",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "100%",
          minWidth: "250px",
          minHeight: "100px",
        }}
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <Stack spacing={1}>
            <Typography
              fontSize="18px"
              fontWeight={600}
              lineHeight="28px"
              color="#101828"
              textAlign={"start"}
            >
              {data.title}
            </Typography>
            <Typography fontSize="14px" fontWeight={500} color="#101828">
              {data.description}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <SvgIcon
              sx={{ fontSize: "20px", color: "blue", cursor: "pointer" }}
              onClick={() => setOpenEdit(true)}
            >
              <AiFillEdit />
            </SvgIcon>
            <SvgIcon
              sx={{ fontSize: "20px", color: "red", cursor: "pointer" }}
              onClick={() => setOpenDelete(true)}
            >
              <AiFillDelete />
            </SvgIcon>
          </Stack>
        </Stack>
      </Box>
      {openEdit && (
        <EditDialog
          open={openEdit}
          setOpen={setOpenEdit}
          data={data}
          setAllData={setAllData}
          allData={allData}
        />
      )}
      {openDelete && (
        <DeleteDialog
          open={openDelete}
          setOpen={setOpenDelete}
          data={data}
          setAllData={setAllData}
        />
      )}
    </>
  );
};

export default Item;
