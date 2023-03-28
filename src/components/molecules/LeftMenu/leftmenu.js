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
            <ImageAtom
              src="./logos/logoCHM.jpeg"
              alt="Chat Hola Maestro Logo"
              heigth="150px"
              width="150px"
            />
          </div>
          <div className="button-section">
            <ButtonAtom
              variant="outlined"
              color="primary"
              text="Dashboard"
              id="button-menu"
            />
            <ButtonAtom
              variant="outlined"
              color="primary"
              text="Informes"
              id="button-menu"
            />
            <ButtonAtom
              variant="outlined"
              color="primary"
              text="G. Estudiantes"
              id="button-menu"
            />
            <ButtonAtom
              variant="outlined"
              color="primary"
              text="G. Acudientes"
              id="button-menu"
            />
            <ButtonAtom
              variant="outlined"
              color="primary"
              text="G. Profesores"
              id="button-menu"
            />
            <ButtonAtom
              variant="outlined"
              color="primary"
              text="G. Materias"
              id="button-menu"
            />
            <ButtonAtom
              variant="outlined"
              color="primary"
              text="G. Adm. Colegios"
              id="button-menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
