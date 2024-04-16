import React from "react";

const Alert = ( {alerta} ) => {
    return (
        <>
            {alerta && ( <div className= {alerta.includes('Felicitaciones') ? 'alert-success' : 'alert-danger'}>
                {alerta}
            </div>
            )}
        </>
    );
};

export default Alert;