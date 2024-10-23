import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'


export default class CreateCoche extends Component {

    state = {
        status: false
    }

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    createCoche = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;
        let imagen = this.cajaImagen.current.value;

        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        let request = "api/coches/insertcoche";
        let url = Global.urlApiCoches+request;

        axios.post(url, coche).then(response => {
            this.setState({
                status: true
            })
        })

    }

    render() {
        if (this.state.status == true) {
            return(<Navigate to="/"/>);
            
        }else{
            return (
                <div style={{width:"50%"}}>
                    <h1>Create Coche</h1>
                    <NavLink to="/">Home</NavLink>
                    <form>
                        <label>Id: </label>
                        <input type='text' ref={this.cajaId} className='form form-control'/>
                        <label>Marca: </label>
                        <input type='text' ref={this.cajaMarca} className='form form-control'/>
                        <label>Modelo: </label>
                        <input type='text' ref={this.cajaModelo} className='form form-control'/>
                        <label>Conductor: </label>
                        <input type='text' ref={this.cajaConductor} className='form form-control'/>
                        <label>Imagen: </label>
                        <input type='text' ref={this.cajaImagen} className='form form-control'/>
                        <button onClick={this.createCoche} className='btn btn-dark'>Crear</button>
                    </form>
                </div>
            )
        }
        
    }
}
