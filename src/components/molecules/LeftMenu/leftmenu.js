//Import components
import ImageAtom from "../../atoms/Image.js";
import ButtonAtom from "../../atoms/Button.js";

//Import style
import "./leftmenu.scss";

export default function leftMenu() {
  return (
    <div className="container menu">
      <div className="row">
        <div className="col">
          <div className="logo-section">
            <a href="dashboard">
              <ImageAtom
                src="./logos/logoCHM.jpeg"
                alt="Chat Hola Maestro Logo"
                heigth="150px"
                width="150px"
              />
            </a>
          </div>
          <div className="button-section">
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="Dashboard"
                id="button-menu"
                href="/dashboard"
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="Informes"
                id="button-menu"
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="G. Estudiantes"
                id="button-menu"
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="G. Acudientes"
                id="button-menu"
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="G. Profesores"
                id="button-menu"
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="G. Materias"
                id="button-menu"
                href="/sm"
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="G. Solicitudes"
                id="button-menu"
                href="/rm"
              />
            </div>
            <div className="section-button">
              <ButtonAtom
                variant="outlined"
                color="primary"
                label="G. Adm. Colegios"
                id="button-menu"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
