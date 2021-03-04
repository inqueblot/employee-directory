import React, { useMemo, useState, useEffect } from "react"
import Table from "./components/Table";
import './App.css';
import axios from "axios"

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/");
      console.log(result.data)
      setEmployeeData(result.data)
      console.log(employeeData)
    })();
  }, []);


  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
