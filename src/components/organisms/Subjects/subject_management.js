//import atoms
import SearchAtom from "../../atoms/Search.js";
import TableAtom from "../../atoms/Table.js";

//import molecules
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Import scss
import "./subject_management.scss";

//Import Backend API
import { API_ENDPOINT } from "../../../config.js";

//Import React
import React, { useState, useEffect } from "react";

//Create the table
const tableHeader = [
  "Id", "Nombre materia","Editar"
];
const iterableFields = ["id", "name"];

//Declare empty rows
var rows = [];

function createData(id, name) {
  return { id, name };
}

//Get request data from backend
async function requestGet() {
  let getRequests = "api/subjects/subjects/";

  organizeTableData(
    await fetch(API_ENDPOINT + getRequests, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
  );
}
function organizeTableData(apiData) {
  let resultRows = [];

  apiData.map((rq) => {
    let id, name;
    let resultRowData;
    id = rq.id;
    name = rq.name;
 

    resultRowData = createData(id, name);

    resultRows.push(resultRowData);
    rows.push(resultRowData);
    return resultRowData;
  });
}

//Create a temp variable to store the rows
let tempRows = rows;

export default function RequestManagement() {
    const [nTempRows,setNTempRows] = useState([]);

  //Set background color with js
  document.body.style.backgroundColor = "#ACACAC";

  //Call functions on component mounting
  useEffect(() => {
    async function fetchRequestData() {
      await requestGet();
      initRowsState();
    }

    fetchRequestData();
  }, []);

  function initRowsState(){
    tempRows = rows;
    setNTempRows([rows])
    console.log(tempRows.length);
  }

  const [search, setSearch] = useState("");

  function handleSearch(searchData) {
    setSearch(searchData);
    tempRows = rows.filter((row) =>
      row.name.toLowerCase().includes(searchData.toLowerCase())
    );
  }

  return (
    <div className="container">
      <div className="navbar">
        <div className="title">
          <h3>
            <a href="dashboard" className="title-anchor">
              Dashboard
            </a>{" "}
            / Gestión de materias{" "}
          </h3>
        </div>
        <SearchAtom searchEvent={handleSearch} />
      </div>
      <div className="row">
        <div className="leftMenu col-lg-3">
          <LeftMenu />
        </div>
        <div className="col">
          <h4 className="job-subtitle">Gestión de materias</h4>
          <Card className="table-card">
            <CardContent>
              <TableAtom
                tableHeader={tableHeader}
                iterableFields={iterableFields}
                rows={tempRows}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
