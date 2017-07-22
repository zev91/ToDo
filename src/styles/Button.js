import React from 'react'
import styled from 'styled-components'
import styledProps from 'styled-props'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/FlatButton'

const margin = {
  default: 0,
  login: '30px 0 0 0',
  logout: '25px 0 0 0'
}

const color = {
  deafult: '#424242',
  login: '#fff',
  logout: '#fff'
}
const bgcolor = {
  deafult: '#424242',
  login: '#00bcd4',
  logout: '#FF5B45'
}
const hbgcolor = {
  deafult: '#424242',
  login: '#01b1c8',
  logout: '#e5523e'
}
const width = {
  deafult: '256px',
  login: '256px',
  logout: '100%'
}

const fontSize = {
  default: 16,
  bigger: 18
}

const Button = styled(
  ({hide, login, bigger, logout, ...rest}) =>
    <RaisedButton {...rest} />)`
    width: ${styledProps(width)} !important;
    background: ${styledProps(bgcolor)} !important;
    margin: ${styledProps(margin)} !important;
    &:hover {
      background: ${styledProps(hbgcolor)} !important;
    }
  & span {
    font-weight: lighter !important;
    color: ${styledProps(color)} !important;
    font-size: ${styledProps(fontSize)}px !important;
  }
 
  
  display: ${props => props.hide === true
    ? 'none !important' : 'inline-block'
  };
  
  `

export default Button
