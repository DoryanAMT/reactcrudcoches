import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class UpdateCoche extends Component {
  render() {
    return (
      <div>
        <h1>Acutalizar Coche: {this.props.idcoche}</h1>
      </div>
    )
  }
}
