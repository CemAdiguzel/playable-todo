import React, { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import { getAllItems } from "./api/HandleApi";

function App() {
  const [allData, setAllData] = React.useState([]);

  useEffect(() => {
    getAllItems(setAllData);
  }, []);

  console.log(allData);

  return <MainLayout setAllData={setAllData} allData={allData} />;
}

export default App;
