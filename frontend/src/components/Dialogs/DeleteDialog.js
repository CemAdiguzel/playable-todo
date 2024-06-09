import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

const baseUrl = "http://localhost:3001";

const DeleteDialog = (props) => {
  const { open, setOpen, data, setAllData } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    const token = localStorage.getItem("auth");

    try {
      await axios.post(
        `${baseUrl}/delete`,
        { _id: data._id },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const fetchData = await axios.post(`${baseUrl}/getItems`, null, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setAllData(fetchData.data);

      setOpen(false);
    } catch (err) {
      console.error("Error deleting the todo: ", err);
      alert(err.response ? err.response.data : err.message);
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
          You are about to delete: {data.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography fontSize="14px" fontWeight={500} color="#101828">
          This action can not undone. Be cautious
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="small" onClick={handleClose}>
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
          onClick={() => handleDelete()}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
