// imports here
// import ButtonAtom from '../../atoms/Button.js';
// import LoaderAtom from '../../atoms/Loader.js';
// import MdiIconAtom from '../../atoms/MDI.js';
// import TextFieldAtom from '../../atoms/TextField.js';
// import TextAtom from '../../atoms/Text.js';
// import { mdiAccount } from '@mdi/js';
import WidgetAtom from '../../atoms/Widget.js';
import GColegios from '../../../assets/dashboard/gestion-colegios.svg';
import GEstudiantes from '../../../assets/dashboard/gestion-estudiantes.svg';
import GTemas from '../../../assets/dashboard/gestion-temas.svg';
import GUsuarios from '../../../assets/dashboard/gestion-usuarios.svg';
import SearchAtom from "../../atoms/Search.js";
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";

import React, { useState } from "react";

export default function Dashboard() {
  const [setSearch] = useState('');
  function handleSearch(searchData) {
    setSearch(searchData);
    // tempRows = rows.filter((row) => row.studentName.toLowerCase().includes(searchData.toLowerCase()));
  }
  return (
    <div className="dashboard__left-menu">
      <LeftMenu/>
      {/* <SearchAtom searchEvent={handleSearch}/> */}
      <div className="dashboard-main">
        <WidgetAtom image={GTemas} title="Gestión de Temas" cursor="pointer"/>
        <WidgetAtom image={GUsuarios} title="Gestión de Usuarios" size="70%" cursor="pointer"/>
        <WidgetAtom image={GColegios} title="Gestión de Colegios" size="75%" cursor="pointer"/>
        <WidgetAtom image={GEstudiantes} title="Gestión de Estudiantes" cursor="pointer"/>
      </div>
    </div>
  );
}