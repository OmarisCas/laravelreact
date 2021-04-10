import React from 'react';
import ReactDOM from 'react-dom';

function Dispos() {
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
                        <div className="card-header"><h2>Dispositivos asociados</h2></div>
                        <div className="card-body">
                            <h6>En este módulo encontrará todos los dispositivos conectados a nuestra red</h6>
                            <button type="button" class="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                                Crear dispositivo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dispos;

// DOM element
if (document.getElementById('dispos')) {
    ReactDOM.render(<Dispos />, document.getElementById('dispos'));
}

