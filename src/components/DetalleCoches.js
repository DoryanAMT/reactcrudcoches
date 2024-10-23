import axios from 'axios';
import React, { Component } from 'react'
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class DetalleCoches extends Component {
    state = {
        coche: []
    }

    loadCoche = () => {
        let idCoche = this.props.idcoche;
        let request = "/api/Coches/FindCoche/"+idCoche;
        let url = Global.urlApiCoches + request;

        axios.get(url).then( response => {
            this.setState({
                coche: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoche();
    }



  render() {
    return (
      <div>
        <h1>Detalle Coche</h1>
        <NavLink to="/">Home</NavLink>
        {
            this.state.coche &&
            <ul className='list-group'>
                <li className='list-group-item'>Marca: {this.state.coche.marca}</li>
                <li className='list-group-item'>Modelo: {this.state.coche.modelo}</li>
                <li className='list-group-item'>Conductor: {this.state.coche.conductor}</li>
                <li className='list-group-item'>
                    <img src={this.state.coche.imagen} style={{width:"200px",height:"200px"}}/> 
                </li>
            </ul>
        }
        
      </div>
    )
  }
}
