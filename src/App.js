import React, { useMemo, useState, useEffect } from "react"
import Table from "./components/Table";
import './App.css';
import axios from "axios"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/?results=5");
      console.log(result.data.results)
      setData(result.data.results)


    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "EMPLOYEE DIRECTORY",
        columns: [
          {
            Header: "Photo",
            accessor: "picture.thumbnail",
            Cell: ({ cell: { value } }) => {
              return (
                <img src={value} alt="head shot" />
              );
            }
          },
          {
            Header: "First Name",
            accessor: "name.first"
          },
          {
            Header: "Last Name",
            accessor: "name.last"
          },
          {
            Header: "Phone #",
            accessor: "phone"
          },
          {
            Header: "Address",
            accessor: "location",
            Cell: ({ cell: { value } }) => {
              console.log(value)
              return (
                <text>
                  {`${value.street.number} ${value.street.name}\n${value.city}, ${value.state} ${value.postcode}\n${value.country}`}
                </text>
              )
            }
          },
          {
            Header: ""
          }
        ]
      }
    ], []
  )



  return (
    <div className="App">
      {/* "hello world" */}
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
