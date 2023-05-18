//import atoms
import SearchAtom from "../../atoms/Search.js";
import TableAtom from "../../atoms/Table.js";
import ButtonAtom from '../../atoms/Button.js';
import TextAtom from "../../atoms/Text.js";

//import molecules
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";
import NewUser from '../../molecules/Dashboard/NewRequest.js';

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Import scss
import "./request_management.scss";

//Import Backend API
import { API_ENDPOINT } from "../../../config.js";

//Import React
import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import { mdiPlus } from '@mdi/js';

//Create the table
const tableHeader = ["Nombre. Estudiante", "Tipo de Solicitud", "Materia", "Estado", "Veces contactado", "Fecha", "Editar/Eliminar"];
const iterableFields = ["name", "request_type", "subject", "status", "contact_times", "scheduled_date",]

//Declare empty rows
var rows = []

function createData(id, name,subject, status, scheduled_date, request_type, contact_times) {
  return { id, name, subject, status, scheduled_date, request_type, contact_times };
}

//BACKEND CALLS
//GET TABLE DATA
//REQUESTS
async function requestGet() {

  let getRequests = 'api/requests/requests/'

  organizeTableData(await fetch(API_ENDPOINT + getRequests, {
    method: 'GET'
  }).then((response) => response.json())
    .then((data) => {
      return data;
    }).catch((error) => {
      alert("Error al obtener las solicitudes");
    }));
}

//STUDENTS
async function getStudentsPreAdd() {

  let studentsList = [];

  let getStudents = 'api/students/students/'

  let studentsData = await fetch(API_ENDPOINT + getStudents, {
    method: 'GET'
  }).then((response) => response.json())
    .then((data) => {
      return data;
    }).catch((error) => {
      alert("Error al obtener los estudiantes");
    });


  studentsData.map((student) => {
    let studentObject = {
      id: student.id,
      data: student.first_name + ' ' + student.last_name + ' | ' + student.identification_number
    }
    studentsList.push(studentObject);
  })

  return studentsList;
}

//TEACHERS
async function getTeachersPreAdd() {

  let teachersList = [];

  let getTeachers = 'api/teachers/teachers/'

  let teachersData = await fetch(API_ENDPOINT + getTeachers, {
    method: 'GET'
  }).then((response) => response.json())
    .then((data) => {
      return data;
    }).catch((error) => {
      alert("Error al obtener los profesores");
    });

  teachersData.map((teacher) => {
    let teacherObject = {
      id: teacher.id,
      data: teacher.user.first_name + ' ' + teacher.user.last_name + ' | ' + teacher.user.identification_number
    }
    teachersList.push(teacherObject);
  })

  return teachersList;
}

//DELETE TABLE ROW WITH ID
async function requestDeleteFromDB(id) {

  let deleteRequest = '/api/requests/requests/' + id + '/';

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
  //Clean rows every single call
  rows = [];

  apiData.map((rq) => {
    let id, name, subject, status, scheduled_date, request_type, contact_times;
    let resultRowData;
    id = rq.id
    name = rq.student.first_name + ' ' + rq.student.last_name
    request_type = rq.request_type
    subject = rq.subject.name
    status = rq.status
    contact_times = rq.contact_times
    //TEMPORAL :: CHECK WHAT'S THE SHEDULED DATE
    scheduled_date = rq.created_date

    resultRowData = createData(id, name, subject, status, scheduled_date, request_type, contact_times)

    return rows.push(resultRowData)
  })

}

//Create a temp variable to store the rows
let tempRows = [];
let requestInformation = {};
let subjectsObject = [];
let currStudents = [];
let currTeachers = [];

export default function RequestManagement() {

  //Set background color with js
  document.body.style.backgroundColor = "#F2F4F7";

  //Set state for the table
  const [newTemp, setNewTemp] = useState([rows]);


  //Call functions on component mounting
  useEffect(() => {
    fetchRequestData();
  }, []);

  async function fetchRequestData() {

    //Clean up rows
    rows = [];
    tempRows = [];
    subjectsObject = [];
    currStudents = [];
    currTeachers = [];
    //Get data from backend
    await requestGet();
    await requestGetSubjects();
    currStudents = await getStudentsPreAdd();
    currTeachers = await getTeachersPreAdd();
    setInitRowsState();
  }
  // Get subjects/subjects
  async function requestGetSubjects() {
    let getRequests = "/api/subjects/subjects/";
    // map data to subjects array string
    setSubjects(
      await fetch(API_ENDPOINT + getRequests, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
    );
  }
  function setSubjects(apiData) {
    apiData.map((rq) => {
      return subjectsObject.push({id: rq.id, name: rq.name});
    });
  }

  function setInitRowsState() {
    //This is just 4 update the render after adding rows
    tempRows = rows.map((row) => row);
    setNewTemp([rows])
  }

  const [search, setSearch] = useState('');
  const [idDelete, setIdDelete] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  function handleSearch(searchData) {
    setSearch(searchData);
    tempRows = rows.filter((row) => row.name.toLowerCase().includes(searchData.toLowerCase()));
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
      requestInformation = {};
    }
    setIsModalOpen(!isModalOpen); // update state variable to show/hide modal
  };

  const editRequest = (requestId) => {
    requestInformation = {};
    requestInformation = tempRows.find((u) => u.id === requestId);
    toggleModal();
  };
  const editableFields = [
    {
      name: "status",
      label: "Estado",
      type: "select",
      options: [
        "PENDIENTE",
        "COMPLETADO",
        "CONTACTADO",
        "CANCELADO",
      ]
    },
    {
      name: "request_type",
      label: "Tipo de solicitud",
      type: "select",
      options: [
        "TAREAS",
        "REFUERZO",
      ]
    },
    {
      name: "contact_times",
      label: "Veces contactado",
      type: "number",
    },
    {
      name: "student",
      label: "Estudiante",
      type: "search", 
      info: currStudents,
    },
    {
      name: "teacher",
      label: "Profesor",
      type: "search", 
      info: currTeachers,
    },
    {
      name: "subject",
      label: "Materia",
      type: "select",
      options: subjectsObject,
      isObject: true,
    }
  ];
  return (
    <div className="d-flex">
      <LeftMenu />
      <div className="w-100">
        <div className="navbar">
          <div className="title">
            <h3>
              <a href="dashboard" className="title-anchor">
                Dashboard
              </a>{" "}
              / Gestión de solicitudes{" "}
            </h3>
          </div>
          <SearchAtom searchEvent={handleSearch} />
        </div>
        <div className="subject__content">
          <div className='d-flex justify-content-between mt-5 mb-4'>
            <TextAtom text="Gestión de Solicitudes" weight="bold" align="left" size="22px" />
            <ButtonAtom onClick={toggleModal} label="Nueva Solicitud" variant='contained' iconPath={mdiPlus} size={1} textColor={"white"} />
          </div>
          <div className="row">
            <div className="col">
              <Card className="table-card">
                <CardContent>
                  <TableAtom
                    tableHeader={tableHeader}
                    iterableFields={iterableFields}
                    rows={tempRows}
                    editEvent={editRequest}
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
          initialData={requestInformation} />
      </Modal>
    </div>
  );
}
