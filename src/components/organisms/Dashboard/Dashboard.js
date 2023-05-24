import WidgetAtom from '../../atoms/Widget.js';
import GColegios from '../../../assets/dashboard/gestion-colegios.svg';
import GEstudiantes from '../../../assets/dashboard/gestion-estudiantes.svg';
import GTemas from '../../../assets/dashboard/gestion-temas.svg';
import GUsuarios from '../../../assets/dashboard/gestion-usuarios.svg';
import GSolicitudes from '../../../assets/dashboard/gestion-solicitude.svg';
import GHorarios from '../../../assets/dashboard/gestion-horarios.svg';

import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";

import React from "react";

export default function Dashboard() {
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
          <WidgetAtom image={GUsuarios} title="Gestión de Usuarios" size="60%" cursor="pointer" onClick={() => window.location.href = "/userManagement"} />
          <WidgetAtom image={GSolicitudes} title="Gestión de Solicitudes" size="40%" cursor="pointer" onClick={() => window.location.href =  "/requestManagement"}/>
          <WidgetAtom image={GTemas} title="Gestión de Materias" cursor="pointer" onClick={() => window.location.href = "/subjectManagement"}/>
          <WidgetAtom image={GEstudiantes} title="Gestión de Tareas" size="35%" cursor="pointer" onClick={() => window.location.href =  "/homeworksManagement"}/>
          <WidgetAtom image={GHorarios} title="Gestión de Horarios" size="65%" cursor="pointer" onClick={() => window.location.href =  "/scheduleManagement"}/>
          <WidgetAtom image={GColegios} title="Gestión de Colegios" size="60%" cursor="pointer" onClick={() => window.location.href = "/schoolManagement"}/>
        </div>
      </div>
    </div>
  );
}