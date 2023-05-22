//import atoms
import SearchAtom from "../../atoms/Search.js";
import TableAtom from "../../atoms/Table.js";
import TextAtom from "../../atoms/Text.js";
import ButtonAtom from '../../atoms/Button.js';
//import molecules
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";
import NewSchool from '../../molecules/Dashboard/NewSchool.js';

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Import scss
import "./schoolManagement.scss";
import Modal from 'react-modal';
import { mdiPlus } from '@mdi/js';

//Import Backend API
import { API_ENDPOINT } from "../../../config.js";

//Import React
import React, { useState, useEffect } from "react";

//Create the table
const tableHeader = [
  "Id", "Nombre colegio" ,"Dirección","Editar"
];
const iterableFields = ["id", "name", "address"];

//Declare empty rows
var rows = [];

function createData(id, name, address) {
  return { id, name, address };
}

//Get request data from backend
async function requestGet() {
  let getRequests = "/api/schools/schools/";

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
async function requestDeleteFromDB(id){

  let deleteRequest = '/api/schools/schools/' + id + '/';

  let deleteResponse =await fetch(API_ENDPOINT + deleteRequest, {
    method : 'DELETE'
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
    let id, nameSchool, address;
    let resultRowData;
    id = rq.id;
    nameSchool = rq.name;
    address = rq.address;
 

    resultRowData = createData(id, nameSchool, address);

    rows.push(resultRowData);
    return resultRowData;
  });
}

//Create a temp variable to store the rows
let tempRows = [];
let schoolInformation = [];
let shiftsOptions = [];

export default function RequestManagement() {
    const [newTemp,setNewTemp] = useState([rows]);

  //Set background color with js
  document.body.style.backgroundColor = "#F2F4F7";

   //Call functions on component mounting
   useEffect(() => {
    fetchRequestData();
  },[]);

  async function fetchRequestData(){

      
    //Clean up rows
    rows = [];
    tempRows = [];
    shiftsOptions = [];
    //Get data from backend
    await requestGet();
    await setShifts();
    setInitRowsState();
  }

  function setShifts() {
    shiftsOptions.push({id: 1, name: "Mañana"});
    shiftsOptions.push({id: 2, name: "Tarde"});
  }

  function setInitRowsState(){
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

  async function requestDelete(id){
    setIdDelete(id);
    let deleteResponseStatus = await requestDeleteFromDB(id);

    if(deleteResponseStatus){
      //Delete row from list
      rows = rows.filter((row) => row.id !== id);
      tempRows = rows.map((row) => row);
      setNewTemp([rows]);
    }else{
      alert("Error al eliminar la solicitud");
    }
  }

  const toggleModal = () => {
    if (isModalOpen) {
      schoolInformation = {};
    }
    setIsModalOpen(!isModalOpen); // update state variable to show/hide modal
    updateRowsData();
  };

  async function updateRowsData() {
    //Clean up rows
    rows = [];
    tempRows = [];

    //Get data from backend
    await requestGet();
    setInitRowsState();
    setSearch("");
  }

  const editSchool = (schoolId) => {
    schoolInformation = {};
    schoolInformation = tempRows.find((u) => u.id === schoolId);
    toggleModal();
  };  

  const editableFields = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true
    },
    {
      name: "address",
      label: "Dirección",
      type: "text",
      required: true
    },
    {
      name: "shifts",
      label: "Jornadas",
      type: "checkbox",
      options: shiftsOptions,
      isObject: true,
    }
  ];

  return (<div className="d-flex">
      <LeftMenu/>
      <div className="w-100">
        <div className="navbar">
          <div className="title">
            <h3>
              <a href="dashboard" className="title-anchor">
                Dashboard
              </a>{" "}
              / Gestión de Colegios{" "}
            </h3>
          </div>
          <SearchAtom searchEvent={handleSearch}/>
        </div>
        
        <div className="subject__content">
          <div className='d-flex justify-content-between mt-5 mb-4'>
            <TextAtom text="Gestión de Colegios" weight="bold" align="left" size="22px" />
            <ButtonAtom onClick={toggleModal} label="Nuevo Colegio" variant='contained' iconPath={mdiPlus} size={1} textColor={"white"} />
          </div>
            <Card className="table-card">
              <CardContent>
                <TableAtom 
                  tableHeader={tableHeader}
                  iterableFields={iterableFields}
                  rows={tempRows}
                  editEvent={editSchool}
                  deleteEvent={requestDelete}
                />
              </CardContent>
            </Card>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="users-management--modal"
      >
        {/* labels Array, edit or new, (if edit, send user data, so do GET of the user before sending it) */}
        <NewSchool
          appElement={document.getElementById('root')}
          toggleModal={toggleModal}
          fields={editableFields}
          initialData={schoolInformation} />
      </Modal>
    </div>
    );
  }
