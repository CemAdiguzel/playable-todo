import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAllItems = (setItems) => {
  axios.post(`${baseUrl}/getItems`).then(({ data }) => {
    console.log("data:", data);
    setItems(data);
  });
};

const addItem = (text, setText, setItems) => {
  axios
    .post(`${baseUrl}/create`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      setItems(data);
    })
    .catch((err) => console.log(err));
};

const updateItem = (id, text, setText, setItems, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: id, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      setItems(data);
    })
    .catch((err) => console.log(err));
};
const deleteItem = (_id, setItems) => {
  axios
    .post(`${baseUrl}/update`, { _id })
    .then((data) => {
      console.log(data);
      setItems(data);
    })
    .catch((err) => console.log(err));
};

export { getAllItems, addItem, updateItem, deleteItem };
