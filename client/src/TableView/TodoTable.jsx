import React from "react";
import AddView from "../components/AddView";

const TodoTable = (props) => {
  const { setAllData } = props;
  return <AddView setAllData={setAllData} />;
};

export default TodoTable;
