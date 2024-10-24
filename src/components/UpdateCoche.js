import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class UpdateCoche extends Component {

  state = {
    status: false,
    coche: []
  }

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  loadCoche = () => {
    let idCoche = this.props.idcoche;
    let request = "api/Coches/FindCoche/" + idCoche
    let url = Global.urlApiCoches + request;

    axios.get(url).then(response => {
      this.setState({
        coche: response.data
      })
    })
  }

  updateCoche = (e) => {
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

    let request = "api/coches/updatecoche";
    let url = Global.urlApiCoches + request;

    axios.put(url, coche).then(response => {
      console.log("coche actualizado...")
      this.setState({
        status: true
      })
    })
  }

  componentDidMount = () => {
    this.loadCoche();
  }


  render() {
    if (this.state.status === true) {
      return (<Navigate to="/" />);

    } else {
      return (
        <div style={{ width: "50%" }}>
          <h1>Create Coche</h1>
          <NavLink to="/">Home</NavLink>
          <form>
            <label>Id: </label>
            <input type='text' ref={this.cajaId} className='form form-control' defaultValue={this.state.coche.idCoche} disabled />
            <label>Marca: </label>
            <input type='text' ref={this.cajaMarca} className='form form-control' defaultValue={this.state.coche.marca} />
            <label>Modelo: </label>
            <input type='text' ref={this.cajaModelo} className='form form-control' defaultValue={this.state.coche.modelo} />
            <label>Conductor: </label>
            <input type='text' ref={this.cajaConductor} className='form form-control' defaultValue={this.state.coche.conductor} />
            <label>Imagen: </label>
            <input type='text' ref={this.cajaImagen} className='form form-control' defaultValue={this.state.coche.imagen} />
            <button onClick={this.updateCoche} className='btn btn-success'>Actualizar</button>
          </form>
        </div>
      )
    }
  }
}
