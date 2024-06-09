import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import CreateDialog from "./Dialogs/CreateDialog";

const AddView = (props) => {
  const { setAllData, allData } = props;
  const [open, setOpen] = useState(false);
  return (
    <Stack spacing={0.5} sx={{ pb: 2 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000",
          fontSize: "12px",
          fontWeight: 500,
          borderRadius: 8,
          p: 1,
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
        size="small"
        onClick={() => setOpen(true)}
      >
        Create new todo
      </Button>
      {open && (
        <CreateDialog
          open={open}
          setOpen={setOpen}
          setAllData={setAllData}
          allData={allData}
        />
      )}
    </Stack>
  );
};

export default AddView;
