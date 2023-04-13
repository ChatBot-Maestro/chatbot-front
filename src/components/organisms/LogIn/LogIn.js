//Mui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//Import atoms
import ImageAtom from "../../atoms/Image.js";
import TextFieldAtom from "../../atoms/TextField.js";
import AnchorAtom from "../../atoms/Anchor.js";
import ButtonAtom from "../../atoms/Button.js";

//Add css
import "./LogIn.scss";

export default function LogIn() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="login-card">
            <Card>
              <CardContent>
                <div className="card-title">
                  <Typography variant="h5" component="div">
                    Iniciar sesión
                  </Typography>
                </div>
                <div className="login-form">
                  <div className="email-input">
                    <TextFieldAtom label="Email" value="" required={true} />
                  </div>
                  <div className="pass-input">
                    <TextFieldAtom
                      label="Contraseña"
                      value=""
                      required={true}
                    />
                  </div>
                </div>
                <div className="forget-pass">
                  <AnchorAtom
                    class="forget-pass-anchor"
                    text="¿Olvidaste tu contraseña?"
                    href="#"
                  />
                </div>

                <div className="login-button">
                  <ButtonAtom 
                  label="Iniciar sesión" 
                  variant="contained"
                  size="large"
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
                height="100"
                width="100"
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
    </div>
  );
}
