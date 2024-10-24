import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import HomeCoches from './HomeCoches'
import DetalleCoches from './DetalleCoches'
import MenuCoches from './MenuCoches';
import CreateCoche from './CreateCoche';
import UpdateCoche from './UpdateCoche';

export default class Router extends Component {
  render() {
    function DetalleCochesElement () {
        let { idcoche} = useParams();
        return(<DetalleCoches idcoche={idcoche}/>);
    }

    function UpdateCocheElement () {
        let { idcoche} = useParams();
        return(<UpdateCoche idcoche={idcoche}/>);
    }
    

    return (
      <BrowserRouter>
        <MenuCoches/>
        <Routes>
            <Route path='/' element={<HomeCoches/>}/>
            <Route path='/create' element={<CreateCoche/>}/>
            <Route path='/detalle/:idcoche' element={<DetalleCochesElement/>}/>
            <Route path='/update/:idcoche' element={<UpdateCocheElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
