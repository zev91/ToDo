import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, sign,logOut } from '../actions'
import { getIsLogging, getLogError, getCurrentUser } from '../reducers'
import TextField from 'material-ui/TextField'
import Overlay from '../styles/Overlay'
import LoginForm from '../styles/LoginForm'
import LoginInfo from '../styles/LoginInfo'
import Button from '../styles/Button'
import Welcome from '../styles/Welcome'
import Form from '../components/Form'
import LoginIndicator from '../styles/LoginIndicator'


class Login extends Component {
  componentDidMount () {
    console.log('login loaded')
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isLogged !== nextProps.isLogged) {
      this.props.history.push('/')
    }
  }

  render () {
    const { onSign,onLogin, isLogging, loginError, onLogoutClick, isLogged } = this.props
    return !isLogged ? (
      <Overlay login>
        <Form {...this.props}/>
      </Overlay>
      )
      : (
        <Overlay login>
          <LoginForm out>
            <Welcome 
             isLogged={isLogged}
             username={isLogged.attributes.username}
              onLogoutClick={onLogoutClick}>
            </Welcome >
          </LoginForm>
        </Overlay>
      )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogin (username, password) {
    dispatch(login(username, password))
  },
  onSign (username, password) {
    dispatch(sign(username, password))
  },
  onLogoutClick () {
    dispatch(logOut())
  }
})

const mapStateToProps = (state) => ({
  isLogging: getIsLogging(state),
  loginError: getLogError(state),
  isLogged: getCurrentUser(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
