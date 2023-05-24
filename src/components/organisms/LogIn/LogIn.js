//Mui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Import atoms
import ImageAtom from "../../atoms/Image.js";
import TextFieldAtom from "../../atoms/TextField.js";
import ButtonAtom from "../../atoms/Button.js";
import TextAtom from "../../atoms/Text.js";
import Toast from "../../atoms/Toast.js";

import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/users/usersSlice.js'; 


//Add css
import "./LogIn.scss";

import React, { useState, useEffect } from "react";

//Import Backend API
import { API_ENDPOINT } from "../../../config.js";


import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Toast
  const [toastOpen, setToastOpen] = useState(false);
  const [toastSeverity, setToastSeverity] = useState('');
  const [toastTitle, setToastTitle] = useState('');
  const [toastText, setToastText] = useState('');

  const handleOpenToast = () => {
    setToastOpen(true);
  };

  const handleCloseToast = () => {
    setToastOpen(false);
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const responseError = {
      severity: 'error',
      title: 'Error',
      text: 'Autenticación fallida, por favor intente de nuevo',
    };
    setToastSeverity(responseError.severity);
    setToastTitle(responseError.title);
    setToastText(responseError.text);

    const response = await fetch(API_ENDPOINT + 'api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (response.ok) {
      // login successful, redirect to dashboard
      const user = await response.json();
      dispatch(setUser(user));
      navigate("/dashboard");
    } else {
      handleOpenToast();
    }
  };

  

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
                    <TextFieldAtom 
                      label="Email"
                      type="email"
                      required={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}  
                    />
                  </div>
                  <div className="pass-input">
                    <TextFieldAtom
                      label="Contraseña"
                      type="password"
                      required={true}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="login-button">
                  <ButtonAtom 
                  label="Iniciar sesión" 
                  variant="contained"
                  width={"100%"}
                  onClick={handleSubmit}
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
      <Toast
        severity={toastSeverity}
        title={toastTitle}
        text={toastText}
        open={toastOpen}
        onClose={handleCloseToast}
      />
    </div>
  );
}
