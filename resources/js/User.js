import React from 'react';
import ReactDOM from 'react-dom';

function User() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>React Component in Laravel</h2></div>

                        <div className="card-body">I'm tiny React component in Laravel app!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Faa() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>React Component in Laravel-tenemos un usuario del sistema</h2></div>

                        <div className="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre 1</th>
                                        <th>Nombre 2</th>
                                        <th>Apellido 1</th>
                                        <th>Apellido 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ nombre }</td>
                                        <td>{ nombres }</td>
                                        <td>{ apellido }</td>
                                        <td>{ apellido }</td>
                                    </tr>
                                </tbody>
                            </table>

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

// DOM element
if (document.getElementById('faa')) {
    ReactDOM.render(<Faa />, document.getElementById('faa'));
}