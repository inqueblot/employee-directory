import React, { useMemo, useState, useEffect } from "react"
import Table from "./components/Table";
import './App.css';
import axios from "axios"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/?results=25");
      // console.log(result.data.results)
      setData(result.data.results)


    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Employee Directory (click column head to sort)",
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
              // console.log(value)
              return (
                <>
                  {`${value.street.number} ${value.street.name}\n${value.city}, ${value.state} ${value.postcode}\n${value.country}`}
                </>
              )
            }
          },
          {
            Header: "email",
            accessor: "email"
          },
          {
            Header: "birthday",
            accessor: "dob",
            Cell: ({ cell: { value } }) => {
              let bDate = new Date(value.date);
              let year = bDate.getFullYear();
              let month = (bDate.getMonth()) + 1;
              let day = (bDate.getDate())
              return (
                <>{`${month}/${day}/${year}`}</>
              )
            }
          },
          {
            Header: "Age",
            accessor: "dob.age"
          }
        ]
      }
    ], []
  )



  return (
    <div className="App">
      <h1>EMPLOYEE DIRECTORY</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
