// imports here
import ButtonAtom from "../../atoms/Button.js";
import InputAtom from "../../atoms/Input.js";
import ImageAtom from "../../atoms/Image.js";
import AnchorAtom from "../../atoms/Anchor.js";

//Add css
import "./LogIn.scss";

export default function Dashboard() {
  console.log("in LogIn");

  return (
    <div class="container">
      <div class="row login-main">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Iniciar sesión</h3>
              <div class="form-space">
                <InputAtom />
                <br />
                <InputAtom />
                <AnchorAtom 
                  text="¿Olvidaste tu contraseña?"
                  href="#"
                  id="forget_pass"
                  />
              </div>
              <ButtonAtom 
              variant="contained"
              color="primary"
              text="Iniciar sesión"
              id="login_button"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="fun_logos">
            <ImageAtom
              src="./logos/chat_hola_white.png"
              alt="Chat Hola Maestro"
              height="100px"
              width="100px"
            />
            <ImageAtom
              src="./logos/fsa_white.png"
              alt="Fundacion San Antonio"
              height="100"
              width="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
