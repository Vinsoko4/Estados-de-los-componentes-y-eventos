import "./Registro.css";
import { useState } from "react";
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';

function Registro () {
    const [alert, setAlert] = useState('');
    const logos = ['facebook', 'github', 'linkedin'];

    const mensajeAlerta = (alerta) => {
        setAlert(alerta);
    }

    return (
        <>
            <div className="content-style">
                <SocialButton icon = {logos} />
                <Alert alerta = {alert} />
                <Formulario Alert = {mensajeAlerta} />
            </div>
        </>
    );
};

export default Registro;