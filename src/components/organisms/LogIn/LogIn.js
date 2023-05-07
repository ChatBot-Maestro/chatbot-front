//Mui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Import atoms
import ImageAtom from "../../atoms/Image.js";
import TextFieldAtom from "../../atoms/TextField.js";
import AnchorAtom from "../../atoms/Anchor.js";
import ButtonAtom from "../../atoms/Button.js";
import TextAtom from "../../atoms/Text.js";

//Add css
import "./LogIn.scss";

export default function LogIn() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="login-card">
            <Card className="login-card__content">
              <CardContent>
                <div className="card-title">
                <TextAtom text="Iniciar Sesión" weight="normal" align="center" size="25px"/>
                </div>
                <div className="login-form">
                  <div className="email-input">
                    <TextFieldAtom label="Email" required={true} />
                  </div>
                  <div className="pass-input">
                    <TextFieldAtom
                      label="Contraseña"
                      required={true}
                    />
                  </div>
                </div>
                <div className="forget-pass">
                  {/* <AnchorAtom
                    class="forget-pass-anchor"
                    text="¿Olvidaste tu contraseña?"
                    href="#"
                  /> */}
                </div>

                <div className="login-button">
                  <ButtonAtom 
                  label="Iniciar sesión" 
                  variant="contained"
                  width={"100%"}
                  textColor={"white"}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="col">
          <div className="logos-side">
            <div className="norm-logos">
              <ImageAtom
                src="./logos/chat_hola_white.png"
                alt="Chat Hola Maestro"
                height="170"
                width="170"
              />
              <ImageAtom
                src="./logos/fsa_white.png"
                alt="Fundacion San Antonio"
                height="150"
                width="150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
