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
  console.log('in dashboard');

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
 /* <h1>dashboard</h1>

      Calling Atoms for testing
      <ButtonAtom label="hola" variant = 'text'/>
      <ButtonAtom label="hola 2" variant = 'contained' iconPath={mdiAccount} size={2}/>
      <LoaderAtom type="spinner"/>
      <MdiIconAtom path={mdiAccount} size={2} color="red" spin={false}/>
      <TextFieldAtom label="hola" minLength="1" maxLength="6"/>
      <TextAtom text="hola" weight="normal"/>
      <WidgetAtom image={Favicon} title="My Widget" imagePosition="right" titlePosition="bottom" /> */