import React from 'react';
import ReactDOM from 'react-dom';

function User() {
    return (
        <div className="container mt-5">

            <div className="row justify-content-center">
                <div className="col-md-12">
                    <nav class="navbar navbar-dark bg-primary">
                        <a class="navbar-brand" href="/">Inicio</a>
                        <a class="navbar-brand" href="/dispos">Dispositivos</a>
                        <a class="navbar-brand" href="/persons">Personas</a>
                        <a class="navbar-brand" href="/calendars">Calendario de conexiones</a>
                    </nav>
                </div>
            </div><br></br>
            
            <div className="row justify-content-center"> 
                <div className="col-md-12">
                    <div className="card text-center border-primary mb-3">
                        <div className="card-header"><h2>Gestor de conexiones</h2></div>
                        <div className="card-body">
                            <h4>Bienvenidos a su red JUAN-2012</h4>
                            <h6>En este módulo encontrará las conexiones realizadas de manera cableada e inalambrica</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default User;

// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}

