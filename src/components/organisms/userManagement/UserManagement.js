import { mdiPlus } from '@mdi/js';
import { useState, useEffect } from 'react';
import ButtonAtom from '../../atoms/Button.js';
import Modal from 'react-modal';
import UsersManagementStyle from '../../../styles/Dashboard/usersManagement.scss'
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";
import TextAtom from "../../atoms/Text.js";
import NewUser from '../../molecules/Dashboard/NewUser.js';
import TableAtom from "../../atoms/Table.js";

//Import Backend API
import { API_ENDPOINT } from "../../../config.js";
Modal.setAppElement('#root');
const tableHeader = [
    ["Id", "Nombre", "Tipo de Doc.", "N. Documento", "Celular", "Grado", "Sexo", "Edad", "Jornada", "Colegio", "Editar"], // Students
    ["Id", "Nombre", "Correo", "Celular", "Tipo de Doc.", "N. Documento", "Editar"], // Teachers
    ["Id", "Nombre", "Correo", "Celular", "Tipo de Doc.", "N. Documento", "Colegio", "Editar"], // School Managers
    ["Id", "Nombre", "Celular", "Tipo de Doc.", "N. Documento", "Editar"], // Parents
];

const iterableFields = [
    ["id", "first_name", "identification_type", "identification_number", "phone_number", "grade", "sex", "age", "working_hours", "school_name" ], // Students
    ["id", "first_name", "email"], // Teachers
    ["id", "first_name", "email", "phone_number", "identification_type", "identification_number", "school_name"], // School Managers
    ["id", "first_name", "phone_number", "identification_type", "identification_number"]  // Parents
];
let schoolsString = [];


//Declare empty rows
var rows = [
    [],
    [],
    [],
    []
];

// Get school/schools
async function requestGetSchools() {
    let getRequests = "/api/schools/schools/";
    // map data to schools array string
    setSchools(
        await fetch(API_ENDPOINT + getRequests, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
    })
    );
}
function setSchools(apiData) {
    apiData.map((rq) => {
        return schoolsString.push(rq.id);
    });
}

//Get request data from backend Students
async function requestGetStudents() {
    let getRequests = "/api/students/students/";
  
    organizeTableDataStudents(
      await fetch(API_ENDPOINT + getRequests, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
    );
  }

//Get request data from backend Teachers
async function requestGetTeachers() {
    let getRequests = "/api/teachers/teachers/";
  
    organizeTableDataTeachers(
      await fetch(API_ENDPOINT + getRequests, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
    );
  }

  //Get request data from backend SchoolManagers
async function requestGetSchoolManagers() {
    let getRequests = "/api/schools/school_managers/";
  
    organizeTableDataSchoolManagers(
      await fetch(API_ENDPOINT + getRequests, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
    );
  }

  //Get request data from backend Relatives
async function requestGetRelatives() {
    let getRequests = "/api/students/relatives/";
  
    organizeTableDataRelatives(
      await fetch(API_ENDPOINT + getRequests, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
    );
  }

  // Organize table Students
  function organizeTableDataStudents(apiData) {
    rows[0] = [];
  
    apiData.map((rq) => {
      let id, first_name, identification_type, identification_number, phone_number, grade, sex, age, working_hours, school_name;
      let resultRowData;
      id = rq.id;
      first_name = rq.first_name + '' + rq.last_name;
      identification_type = rq.identification_type;
      identification_number = rq.identification_number;
      phone_number = rq.phone_number;
      grade = rq.grade;
      sex = rq.sex;
      age = rq.age;
      working_hours = rq.working_hours;
      school_name = rq.school.name;
      resultRowData = {id, first_name, identification_type, identification_number, phone_number, grade, sex, age, working_hours, school_name};
      return rows[0].push(resultRowData);
    });
  }

  // Organize table Teachers
function organizeTableDataTeachers(apiData) {
    rows[1] = [];
    
    apiData.map((rq) => {
      let id, first_name, identification_type, identification_number, phone_number;
      let resultRowData;
      id = rq.id;
      first_name = rq.user.first_name + '' + rq.user.last_name;
      identification_type = rq.user.identification_type;
      identification_number = rq.user.identification_number;
      phone_number = rq.user.phone_number;
      resultRowData = {id, first_name, identification_type, identification_number, phone_number };
      return rows[1].push(resultRowData);
    });
}

  // Organize table SchoolManagers
  function organizeTableDataSchoolManagers(apiData) {
    rows[2] = [];
    
    apiData.map((rq) => {
      let id, first_name, email, identification_type, identification_number, phone_number, school_name;
      let resultRowData;
      id = rq.id;
      first_name = rq.user?.first_name + '' + rq.user?.last_name;
      identification_type = rq.user?.identification_type;
      identification_number = rq.user?.identification_number;
      phone_number = rq.user?.phone_number;
      email = rq.user?.email;
      school_name = rq.school.name;
      resultRowData = {id, first_name, email, identification_type, identification_number, phone_number, school_name };
      return rows[2].push(resultRowData);
    });
}
// Organize table Relatives
function organizeTableDataRelatives(apiData) {
    rows[3] = [];

    apiData.map((rq) => {
      let id, first_name, identification_type, identification_number, phone_number;
      let resultRowData;
      id = rq.id;
      first_name = rq.first_name + '' + rq.last_name;
      identification_type = rq.identification_type;
      identification_number = rq.identification_number;
      phone_number = rq.phone_number;
      // students = rq.students;
      resultRowData = {id, first_name, identification_type, identification_number, phone_number };
      return rows[3].push(resultRowData);
    });
}
  
//Create a temp variable to store the rows
let tempRows = [  [],
  [],
  [],
  []
];
let userInformation = {};
let users = [
    {
        image: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Estudiantes',
        singleName: 'Estudiante',
        count: tempRows[0].length,
        index: 0,
    },
    {
        image: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Profesores',
        singleName: 'Profesor',
        count: tempRows[1].length,
        index: 1,
    },
    {
        image: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Gestores Escolares',
        singleName: 'Gestor Escolar',
        count: tempRows[2].length,
        index: 2,
    },
    {
        image: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Acudientes',
        singleName: 'Acudiente',
        count: tempRows[3].length,
        index: 3,
    },
]
export default function UserManagement() {
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const [newTemp, setNewTemp] = useState([rows]);
    //  Call functions on component mounting
    useEffect(() => {
        fetchRequestData();
    },[]);
  
    async function fetchRequestData(){
        //Clean up rows
        rows = [[], [], [], []];
        tempRows = [[], [], [], []];
        schoolsString = [];
        //Get data from backend
        await requestGetStudents();
        await requestGetTeachers();
        await requestGetSchoolManagers();
        await requestGetRelatives();
        await requestGetSchools();
        setInitRowsState();
    }
    
    function setInitRowsState(){
        //This is just 4 update the render after adding rows
        tempRows = rows;
        setNewTemp([rows])
      }

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
    const toggleModal = () => {
        if(isModalOpen){
            userInformation = {};
        }
        setIsModalOpen(!isModalOpen); // update state variable to show/hide modal
    };
    const editUser = (userId) => {
        userInformation = {};
        userInformation = tempRows[selectedUser.index].find((u) => u.id === userId);
        if(selectedUser.index === 2){
            delete editableFields[selectedUser.index][2]
            toggleModal();
        }
        else{
        toggleModal();
        }
    }; 

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


    async function requestDeleteFromDB(id){

        let url = '';
        switch (selectedUser.index) {
        case 0:
            url = `/api/students/students/`;
            break;
        case 1:
            url = `/api/teachers/teachers/`;
            break;
        case 2:
            url = `/api/schools/school_managers/`;
            break;
        case 3:
            url = `/api/students/relatives/`;
            break;
        default:
            break;
        }

        let deleteRequest = url + id + '/';
    
        let deleteResponse =await fetch(API_ENDPOINT + deleteRequest, {
        method : 'DELETE'
        }).then((response) => response.json())
        .then((data) => {
        return true;
        }).catch((error) => {
        console.log(error)
        return false;
        });
    
        return deleteResponse;
    }
    
    const editableFields = [
        [
            { name: 'first_name', label: 'Nombre', type: 'text' },
            { name: 'identification_type', label: 'Tipo de documento', type: 'select', options: ['TI', 'CC', 'CE', 'NUIP', 'PA'] },
            { name: 'identification_number', label: 'Número de documento', type: 'text' },
            { name: 'phone_number', label: 'Celular', type: 'number' },
            { name: 'grade', label: 'Grado', type: 'select', options: ['PJD', 'JD', 'TR', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'] },
            { name: 'sex', label: 'Sexo', type: 'select', options: ['M', 'F'] },
            { name: 'age', label: 'Edad', type: 'number' },
            { name: 'working_hours', label: 'Jornada', type: 'select', options: ['M', 'T'] },
            { name: 'school', label: 'Colegio', type: 'select', options: [] },
          ], // Students
          [
            { name: 'first_name', label: 'Nombre', type: 'text' },
            { name: 'email', label: 'Correo', type: 'text' },
            { name: 'phone_number', label: 'Celular', type: 'number' },
          ], // Teachers
          [
            { name: 'first_name', label: 'Nombre', type: 'text' },
            { name: 'email', label: 'Correo', type: 'text' },
            { name: 'password', label: 'Contraseña', type: 'password' },
            { name: 'phone_number', label: 'Celular', type: 'number' },
            { name: 'identification_type', label: 'Tipo de documento', type: 'select', options: ['TI', 'CC', 'CE', 'NUIP', 'PA'] },
            { name: 'identification_number', label: 'Número de documento', type: 'text' },
          ], // School managers
          [
            { name: 'first_name', label: 'Nombre', type: 'text' },
            { name: 'email', label: 'Correo', type: 'text' },
            { name: 'phone_number', label: 'Celular', type: 'number' },
            { name: 'student', label: 'Estudiante', type: 'select', options: [] },
            { name: 'teacher', label: 'Profesor', type: 'select', options: [] },
          ], // Relatives
    ];
    

    return (
        <div className="users-management">
            <LeftMenu/>
            <div className="users-management__content">
                <TextAtom text="Resumen" weight="bold" align="left" size="22px"/>
                <div className="users-management--list">
                    {users.map((user, index) => (
                        <div
                        className={`users-management--user ${selectedUser.name === user.name ? 'selected' : ''}`}
                        key={index}
                        onClick={() => handleUserClick(user)}>
                            <img className="users-management--img" width={50} src={user.image} alt="avatar" />
                            <p>{user.name}</p>
                            <p className="users-management--count">{user.count}</p>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-between mt-5 mb-4'>
                    <TextAtom text={`Gestion de ${selectedUser ? selectedUser.name : 'none'}`} weight="bold" align="left" size="22px"/>
                    <ButtonAtom  onClick={toggleModal} label={`Nuevo ${selectedUser ? selectedUser.singleName : 'none'}`} variant = 'contained' iconPath={mdiPlus} size={1} textColor={"white"}/>
                </div>
                <div style={{ height: 400, width: '100%' }}>
                    <TableAtom 
                    tableHeader={tableHeader[selectedUser.index]}
                    iterableFields={iterableFields[selectedUser.index]}
                    rows={tempRows[selectedUser.index]}
                    editEvent={editUser}
                    deleteEvent={requestDelete}
                    />
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                className="users-management--modal"
            > 
            {/* labels Array, edit or new, (if edit, send user data, so do GET of the user before sending it) */}
                <NewUser appElement={document.getElementById('root')} toggleModal={toggleModal} selectedUser={selectedUser} fields={editableFields[selectedUser.index]} initialData={userInformation}/>
            </Modal>
        </div>
    )
}