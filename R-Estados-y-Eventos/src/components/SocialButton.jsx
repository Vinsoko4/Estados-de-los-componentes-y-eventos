import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialButton.css';

const SocialButton = ( {icon} ) => {
    const [facebook, github, linkedin] = icon;

    return (
        <>
            <h1 className="title-text">Crea una cuenta</h1>
            <div className="iconsSocial">
                <FontAwesomeIcon icon='fa-brands fa-facebook'/>
                <FontAwesomeIcon icon='fa-brands fa-github'/>
                <FontAwesomeIcon icon='fa-brands fa-linkedin'/>
            </div>
        </>
    );
};

export default SocialButton;