//import atoms

//import molecules
import LeftMenu from "../../molecules/LeftMenu/leftmenu.js";

//Import scss
import "./requestmanagement.scss";

export default function RequestManagement() {
  //Set background color with js
  document.body.style.backgroundColor = "#ACACAC";

  return (
    <div class="container">
      <div class="navbar-title">
        <h3>
          <a href="dashboard" class="title-anchor">
            Dashboard
          </a>{" "}
          / Gestión de solicitudes{" "}
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-3 leftMenu">
          <LeftMenu />
        </div>
        <div class="col">
          <h4 className="job-subtitle">Gestión de solicitudes</h4>
        </div>
      </div>
    </div>
  );
}
