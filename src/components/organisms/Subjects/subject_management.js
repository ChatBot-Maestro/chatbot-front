//import atoms
import SearchAtom from "../../atoms/Search.js";
import TableAtom from "../../atoms/Table.js";
import ButtonAtom from '../../atoms/Button.js';
import TextAtom from "../../atoms/Text.js";

//import molecules
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";
import NewUser from '../../molecules/Dashboard/NewSubject.js';

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Import scss
import "./subject_management.scss";

//Import Backend API
import { API_ENDPOINT } from "../../../config.js";

//Import React
import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { mdiPlus } from '@mdi/js';


//Create the table
const tableHeader = [
  "Id", "Nombre materia", "Editar"
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

//DELETE TABLE ROW WITH ID
async function requestDeleteFromDB(id) {

  let deleteRequest = '/api/subjects/subjects/' + id + '/';

  let deleteResponse = await fetch(API_ENDPOINT + deleteRequest, {
    method: 'DELETE'
  }).then((response) => response.json())
    .then((data) => {
      return true;
    }).catch((error) => {
      return false;
    });

  return deleteResponse;

}

function organizeTableData(apiData) {
  rows = [];

  apiData.map((rq) => {
    let id, name;
    let resultRowData;
    id = rq.id;
    name = rq.name;


    resultRowData = createData(id, name);

    rows.push(resultRowData);
    return resultRowData;
  });
}

//Create a temp variable to store the rows
let tempRows = [];
let subjectInformation = {};

const editableFields = [
  {
    name: "name",
    label: "Nombre materia",
    type: "text",
  }
];

export default function RequestManagement() {
  const [newTemp, setNewTemp] = useState([rows]);

  //Set background color with js
  document.body.style.backgroundColor = "#F2F4F7";

  //Call functions on component mounting
  useEffect(() => {
    fetchRequestData();
  }, []);

  async function fetchRequestData() {
    //Clean up rows
    rows = [];
    tempRows = [];
    //Get data from backend
    await requestGet();
    setInitRowsState();
  }

  function setInitRowsState() {
    //This is just 4 update the render after adding rows
    tempRows = rows.map((row) => row);
    setNewTemp([rows])
  }
  const [search, setSearch] = useState("");
  const [idDelete, setIdDelete] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  function handleSearch(searchData) {
    setSearch(searchData);
    tempRows = rows.filter((row) =>
      row.name.toLowerCase().includes(searchData.toLowerCase())
    );
  }

  async function requestDelete(id) {
    setIdDelete(id);
    let deleteResponseStatus = await requestDeleteFromDB(id);

    if (deleteResponseStatus) {
      //Delete row from list
      rows = rows.filter((row) => row.id !== id);
      tempRows = rows.map((row) => row);
      setNewTemp([rows]);
    } else {
      alert("Error al eliminar la solicitud");
    }

  }
  const toggleModal = () => {
    if (isModalOpen) {
      subjectInformation = {};
    }
    setIsModalOpen(!isModalOpen); // update state variable to show/hide modal
  };

  const editSubject = (subjectId) => {
    subjectInformation = {};
    subjectInformation = tempRows.find((u) => u.id === subjectId);
    toggleModal();
  };


  return (<div className="d-flex">
    <LeftMenu />
    <div className="w-100">
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
      <div className="subject__content">
        <div className='d-flex justify-content-between mt-5 mb-4'>
          <TextAtom text="Gestión de Materias" weight="bold" align="left" size="22px" />
          <ButtonAtom onClick={toggleModal} label="Nueva Materia" variant='contained' iconPath={mdiPlus} size={1} textColor={"white"} />
        </div>
        <div className="row">
          <div className="col">
            <Card className="table-card">
              <CardContent>
                <TableAtom
                  tableHeader={tableHeader}
                  iterableFields={iterableFields}
                  rows={tempRows}
                  editEvent={editSubject}
                  deleteEvent={requestDelete}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="users-management--modal"
      >
        {/* labels Array, edit or new, (if edit, send user data, so do GET of the user before sending it) */}
        <NewUser
          appElement={document.getElementById('root')}
          toggleModal={toggleModal}
          fields={editableFields}
          initialData={subjectInformation}/>
      </Modal>
  </div>
  );
}
