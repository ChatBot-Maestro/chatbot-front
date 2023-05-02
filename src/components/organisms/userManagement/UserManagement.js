import { DataGrid } from '@mui/x-data-grid';
import { mdiPlus } from '@mdi/js';
import { useState } from 'react';
import ButtonAtom from '../../atoms/Button.js';
import Modal from 'react-modal';
import UsersManagementStyle from '../../../styles/Dashboard/usersManagement.scss'
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";
import TextAtom from "../../atoms/Text.js";
import NewUser from '../../molecules/Dashboard/NewUser.js';
export default function UserManagement() {
    let users = [
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Estudiantes',
            singleName: 'Estudiante',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar2.png',
            name: 'Profesores',
            singleName: 'Profesor',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Gestores Escolares',
            singleName: 'Gestor Escolar',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar2.png',
            name: 'Acudientes',
            singleName: 'Acudiente',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Administradores',
            singleName: 'Administrador',
            count: 0,
        }
    ]
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen); // update state variable to show/hide modal
      };
    

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
                    <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    />
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                className="users-management--modal"
            > 
                <NewUser toggleModal={toggleModal} selectedUser={selectedUser}/>
            </Modal>
        </div>
    )
}