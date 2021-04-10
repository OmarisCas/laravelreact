import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = "http://localhost:8000/";
export default class Persons extends Component {
    constructor(props){
        super(props);
        this.state = {
            persona:[],
            personaBackup:[],
            textBuscar:'',
            formNombre:'',
            formNombres:'',
            formApellido:'',
            formApellidos:''
        }
    }

    componentDidMount(){
        axios.get(baseUrl+'api/persons').then(response=>{
            this.setState({persona:response.data})
        }).catch(error=>{
            alert("Error "+error)
        })
    }

    /*componentDidMount(){
        this.loadDataPersona()
    }

    loadDataPersona(){
        axios.get(baseUrl+'api/persons').then(response=>{
            this.setState({
                persona:response.data,
                personaBackup:response.data
            })
        }).catch(error=>{
            alert("Error "+error)
        })
    }

    filter(event){
        console.log(event.target.value)
        //obtener datos de buscar
        var text = event.target.value
        //obtener datos de array
        const data = this.state.personaBackup

        const newData = data.filter(function(item){
            //variable de titulo
            cibst
        })
    }*/

    render() {
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
                            <div className="card-body">
                            <button type="button" class="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                                Crear persona
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center"> 
                    <div className="col-md-12">
                        <div className="card text-center border-primary mb-3">
                            <div className="card-header"><h2>Personas asociadas</h2></div>
                            <div className="card-body">
                                <table class="table table-bordered order-table ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre 1</th>
                                            <th>Nombre 2</th>
                                            <th>Apellido 1</th>
                                            <th>Apellido 2</th>
                                        </tr>
                                    </thead>
                                    <tbody id="bodytable">
                                        {this.listData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        );
    }
    listData(){
        return this.state.persona.map( (data) => {
            return (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.nombre}</td>
                    <td>{data.nombres}</td>
                    <td>{data.apellido}</td>
                    <td>{data.apellidos}</td>
                </tr>
            )
        } )
    }
}

// DOM element
if (document.getElementById('persons')) {
    ReactDOM.render(<Persons />, document.getElementById('persons'));
}

/*function Persons() {
    componentDidMount(){
        axios.get(baseUrl+'api/persons').then(response=>{
            console.log('omaris');
        }).catch(error=>{
            alert("Error "+error)
        })
    }

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
                        <div className="card-header"><h2>Personas asociadas</h2></div>
                        <div className="card-body">
                            <h6>En este módulo encontrará el listado de las personas con dispositivos</h6>
                            <button type="button" class="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                                Crear persona
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Persons;

// DOM element
if (document.getElementById('persons')) {
    ReactDOM.render(<Persons />, document.getElementById('persons'));
}*/
