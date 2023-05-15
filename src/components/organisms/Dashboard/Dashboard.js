import WidgetAtom from '../../atoms/Widget.js';
import GColegios from '../../../assets/dashboard/gestion-colegios.svg';
import GEstudiantes from '../../../assets/dashboard/gestion-estudiantes.svg';
import GTemas from '../../../assets/dashboard/gestion-temas.svg';
import GUsuarios from '../../../assets/dashboard/gestion-usuarios.svg';
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";

import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard__left-menu">
      <LeftMenu />
      <div className='users-management--container'>
        <div className="navbar">
          <div className="title">
            <h3>
              <a href="dashboard" className="title-anchor">
                Dashboard
              </a>{" "}
            </h3>
          </div>
        </div>
        {/* <SearchAtom searchEvent={handleSearch}/> */}
        <div className="dashboard-main">
          <WidgetAtom image={GTemas} title="Gestión de Materias" cursor="pointer" onClick={() => navigate("/subjectManagement")}/>
          <WidgetAtom image={GUsuarios} title="Gestión de Usuarios" size="70%" cursor="pointer" onClick={() => navigate("/userManagement")} />
          <WidgetAtom image={GColegios} title="Gestión de Colegios" size="75%" cursor="pointer" onClick={() => navigate("/schoolManagement")}/>
          <WidgetAtom image={GEstudiantes} title="Gestión de Tareas" cursor="pointer" onClick={() => navigate("/homeworksManagement")}/>
        </div>
      </div>
    </div>
  );
}