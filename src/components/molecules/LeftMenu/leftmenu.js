//Import components
import ImageAtom from "../../atoms/Image.js";
import ButtonAtom from "../../atoms/Button.js";


import { useDispatch } from 'react-redux';
import { unsetUser } from '../../../redux/users/usersSlice.js'; 

import { mdiViewDashboardOutline, 
        mdiChartMultiline,
        mdiBadgeAccountHorizontalOutline,
        mdiHumanMaleFemaleChild,
        mdiLogout,
        mdiLightbulbVariantOutline,
        mdiTownHall,
        mdiClockOutline } from '@mdi/js';

//Import style
import "./leftmenu.scss";

//Import Backend API
import { API_ENDPOINT } from "../../../config.js";

export default function LeftMenu() {

  const dispatch = useDispatch();
  
  let urlLogout = "api/auth/logout/";
  async function logout (){ 
    await fetch(API_ENDPOINT + urlLogout, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(unsetUser());
        window.location.href = "/";
        return data;
      })
  }

  return (
    <div className="menu">
      <div className="row">
        <div className="col">
          <div className="logo-section">
            <a href="dashboard">
              <ImageAtom
                src="./logos/logoCHM.jpeg"
                alt="Chat Hola Maestro Logo"
                height="150px"
                width="150px"
                className="logo-section__img"
              />
            </a>
          </div>
          <div className="button-section">
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="Dashboard"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiViewDashboardOutline}
                size={1}
                onClick={() => window.location.href = "/dashboard"}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Usuarios"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiBadgeAccountHorizontalOutline}
                size={1}
                onClick={() => window.location.href = "/userManagement"}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Solicitudes"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiChartMultiline}
                size={1}
                onClick={() => window.location.href = "/requestManagement"}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Materias"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiLightbulbVariantOutline}
                size={1}
                onClick={() => window.location.href = "/subjectManagement"}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Tareas"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiHumanMaleFemaleChild}
                size={1}
                onClick={() => window.location.href = "/homeworksManagement"}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Horarios"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiClockOutline}
                size={1}
                onClick={() => window.location.href = "/scheduleManagement"}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Colegios"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiTownHall}
                size={1}
                onClick={() => window.location.href = "/schoolManagement"}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="Cerrar Sesión"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiLogout}
                size={1}
                onClick={() => logout()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
