//Import components
import ImageAtom from "../../atoms/Image.js";
import ButtonAtom from "../../atoms/Button.js";

import { mdiViewDashboardOutline, 
        mdiChartMultiline,
        mdiBadgeAccountHorizontalOutline,
        mdiHumanMaleFemaleChild,
        mdiHumanMaleBoard,
        mdiLightbulbVariantOutline,
        mdiOfficeBuildingCogOutline } from '@mdi/js';

//Import style
import "./leftmenu.scss";

export default function leftMenu() {
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
                size={2}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="Informes"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiChartMultiline}
                size={2}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Estudiantes"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiBadgeAccountHorizontalOutline}
                size={2}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Acudientes"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiHumanMaleFemaleChild}
                size={2}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Profesores"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiHumanMaleBoard}
                size={2}
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
                size={2}
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="text"
                color="primary"
                label="G. Adm. Colegios"
                id="button-menu"
                width="180px"
                disableShadow
                iconPath={mdiOfficeBuildingCogOutline}
                size={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
