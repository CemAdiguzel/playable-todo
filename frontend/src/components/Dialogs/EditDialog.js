import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const baseUrl = "http://localhost:3001";
const menuOpt = [
  {
    id: "Open",
    value: "Open",
  },
  {
    id: "In progress",
    value: "In progress",
  },
  {
    id: "Done",
    value: "Done",
  },
];

const EditDialog = (props) => {
  const { open, setOpen, data, setAllData, allData } = props;
  const [addValues, setAddValues] = useState({
    _id: data?._id,
    title: data?.title,
    description: data?.description,
    status: data?.status,
  });
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setAddValues({ ...addValues, status: e.target.value });
  };

  const handleEdit = async () => {
    const token = localStorage.getItem("auth");

    try {
      const { data: updatedItem } = await axios.post(
        `${baseUrl}/update`,
        {
          _id: addValues._id,
          title: addValues.title,
          description: addValues.description,
          status: addValues.status,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(updatedItem);

      const updatedAllData = [
        updatedItem,
        ...allData.filter((item) => item._id !== updatedItem._id),
      ];
      console.log(updatedAllData);

      setAllData(updatedAllData);
      setOpen(false);
    } catch (err) {
      console.log(err);
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
          Edit {data.title}
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
              value={addValues.title}
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
              value={addValues.description}
              onChange={(e) =>
                setAddValues({ ...addValues, description: e.target.value })
              }
            />
          </Stack>
          <Stack spacing={0.5}>
            <Typography fontSize="14px" fontWeight={500} color="#101828">
              Status *
            </Typography>
            <Select
              value={addValues?.status}
              onChange={handleChange}
              size="small"
            >
              {menuOpt.map((m) => (
                <MenuItem key={m.id} value={m.value}>
                  {m.value}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          size="small"
          sx={{
            fontSize: "12px",
          }}
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
          onClick={() => handleEdit()}
          autoFocus
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
