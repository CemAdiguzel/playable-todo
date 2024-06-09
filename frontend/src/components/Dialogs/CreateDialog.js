import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const baseUrl = "http://localhost:3001";
const CreateDialog = (props) => {
  const { open, setOpen, setAllData, allData } = props;
  const [addValues, setAddValues] = useState({
    title: null,
    description: null,
  });
  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = async () => {
    const token = localStorage.getItem("auth");

    try {
      const { data } = await axios.post(
        `${baseUrl}/create`,
        {
          title: addValues.title,
          description: addValues.description,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setAllData([data, ...allData]);
      setOpen(false);
    } catch (err) {
      alert(err.request.response);
      return err;
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography
          fontSize="18px"
          fontWeight={600}
          lineHeight="28px"
          color="#101828"
        >
          Add New Todo
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <Stack spacing={0.5}>
            <Typography fontSize="14px" fontWeight={500} color="#101828">
              Title *
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
              onChange={(e) =>
                setAddValues({ ...addValues, title: e.target.value })
              }
            />
          </Stack>
          <Stack spacing={0.5}>
            <Typography fontSize="14px" fontWeight={500} color="#101828">
              Description *
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              multiline
              rows={4}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                },
              }}
              onChange={(e) =>
                setAddValues({ ...addValues, description: e.target.value })
              }
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
          size="small"
          variant="outlined"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
          size="small"
          variant="contained"
          onClick={handleCreate}
          autoFocus
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
