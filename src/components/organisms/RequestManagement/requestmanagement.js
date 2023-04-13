//import atoms
import SearchAtom from "../../atoms/Search.js";
import TableAtom from "../../atoms/Table.js";

//import molecules
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Import scss
import "./requestmanagement.scss";

//Import React
import React, { useState, useEffect } from "react";

//Create the table
const tableHeader = ["studentName", "teacherName", "status", "sheduledDate", "Edit/Delete"];
const iterableFields = ["studentName","teacherName","status","sheduledDate"]


function createData(id, studentName, teacherName, status, sheduledDate) {
  return { id, studentName, teacherName, status, sheduledDate };
}

//Rows created just for demo purpose is a prop in real use
let rows = [
  createData(1, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(2, "Pepe Doe", "John Doe", "Pending", "2021-09-14"),
  createData(3, "Marco Doe", "John Doe", "Pending", "2021-09-14"),
  createData(4, "Julian Doe", "John Doe", "Pending", "2021-09-14"),
  createData(5, "David Doe", "John Doe", "Pending", "2021-09-14"),
  createData(6, "Alejandro Doe", "John Doe", "Pending", "2021-09-14"),
  createData(7, "Juliana Doe", "John Doe", "Pending", "2021-09-14"),
  createData(8, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(9, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(10, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(11, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(12, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(13, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(14, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(15, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(16, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(17, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(18, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(19, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(20, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(21, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(22, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(23, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(24, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(25, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(26, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(27, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(28, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(29, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(30, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(31, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(32, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(33, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(34, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(35, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(36, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(37, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(38, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(39, "John Doe", "John Doe", "Pending", "2021-09-14"),
  createData(40, "John Doe", "John Doe", "Pending", "2021-09-14"),
];



//Create a temp variable to store the rows
let tempRows = rows;

export default function RequestManagement() {
  //Set background color with js
  document.body.style.backgroundColor = "#ACACAC";

  const [search, setSearch] = useState('');

  function handleSearch(searchData) {
    setSearch(searchData);
    tempRows = rows.filter((row) => row.studentName.toLowerCase().includes(searchData.toLowerCase()));
  }

  return (
    <div className="container">
      <div className="navbar">
        <div className="title">
          <h3>
            <a href="dashboard" className="title-anchor">
              Dashboard
            </a>{" "}
            / Gestión de solicitudes{" "}
          </h3>
        </div>
        <SearchAtom searchEvent={handleSearch}/>
      </div>
      <div className="row">
        <div className="leftMenu col-lg-3">
          <LeftMenu/>
        </div>
        <div className="col">
          <h4 className="job-subtitle">Gestión de solicitudes</h4>
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
