import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class HomeCoches extends Component {

    state = {
        coches: []
    }

    loadCoches = () => {
        let request = "api/Coches"; 
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            this.setState({
                coches: response.data
            })
        })

    }

    deleteCoche = (idCoche) => {
        console.log(idCoche);
        let request = "api/coches/deletecoche/"+idCoche;
        let url = Global.urlApiCoches + request;
        console.log(url)
        axios.delete(url).then(response => {
            console.log("Delete coche...")
            this.loadCoches();
        })
    }

    componentDidMount = () => {
        this.loadCoches();
        
    }


  render() {
    return (
      <div>

        <h1>Home Coches</h1>
        <table className='table table-light'>
            <thead>
                <tr>
                    <th>Marcar</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.coches &&
                    this.state.coches.map((coche, index) => {
                        return(
                            <tr key={index}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td>
                                    <img src={coche.imagen} style={{width:"100px",height:"100px"}}/>
                                </td>
                                <td>
                                    <NavLink to={'/detalle/'+coche.idCoche} className='btn btn-info'>Detalle</NavLink>
                                    <NavLink to={'/update/'+coche.idCoche} className='btn btn-warning'>Editar</NavLink>
                                    {/* <NavLink to={'/delete/'+coche.idCoche} className='btn btn-danger'>Eliminar</NavLink> */}
                                    <button onClick={ () => { this.deleteCoche(coche.idCoche)}} className='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        
      </div>
    )
  }
}
