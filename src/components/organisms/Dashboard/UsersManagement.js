import UsersManagementStyle from '../../../styles/Dashboard/usersManagement.scss'
import { DataGrid } from '@mui/x-data-grid';
import { mdiPlus } from '@mdi/js';
import { useState } from 'react';
import ButtonAtom from '../../atoms/Button.js';
import TextFieldAtom from '../../atoms/TextField.js';

import Modal from 'react-modal';

export default function UsersManagement() {
    let users = [
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Estudiantes',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Profesores',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Gestores Escolares',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Acudientes',
            count: 0,
        },
        {
            image: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Administradores',
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

      const renderBackdrop = (props) => <div className="backdrop" {...props} />;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="users-management">
            <div className="users-management--list">
                {users.map((user, index) => (
                    <div className="users-management--user" key={index}>
                        <img className="users-management--img" width={50} src={user.image} alt="avatar" />
                        <p>{user.name}</p>
                        <p>{user.count}</p>
                    </div>
                ))}
            </div>
            <div className='d-flex justify-content-between mt-5 mb-5'>
            <p> Gestion de Estudiantes </p>
            <ButtonAtom onClick={toggleModal} label="Nuevo Estudiante" variant = 'contained' iconPath={mdiPlus} size={1}/>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                className="users-management--modal"
                renderBackdrop={renderBackdrop}
            >
            <h2>Agregar</h2>
            <TextFieldAtom label="hola" minLength="1" maxLength="6"/>
            <TextFieldAtom label="hola" minLength="1" maxLength="6"/>
            <TextFieldAtom label="hola" minLength="1" maxLength="6"/>
            <ButtonAtom onClick={toggleModal} label="Agregar" variant = 'contained' iconPath={mdiPlus} size={1}/>
            </Modal>
            </div>
            {/* Make table in another component */}
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
    )
}