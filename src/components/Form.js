import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import LoginForm from '../styles/LoginForm'
import LoginInfo from '../styles/LoginInfo'
import Button from '../styles/Button'
import LoginIndicator from '../styles/LoginIndicator'
import NormalLink from '../styles/NormalLink'


class Form extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isLoginOpen: true
  };
}

errorMsgTranslator (err) {
    if (err.clientErr) {
      return err.clientErr
    }

    switch (err.code) {
      case -1: 
        return '您的网络貌似断线了 T_T'
      case 202:
        return '用户名已被占用'
      case 210:
        return '密码错误'
      case 219:
        return '失败次数超过限制,稍后再试'
      case 211:
        return '账号不存在，请注册后使用呦～'
      default:
        return 'Oops..出错了！'
    }
  }
  toggleLoginOpen (e){
    e.preventDefault();
    this.setState({
      isLoginOpen: !this.state.isLoginOpen
    })
  }
  render () {
    const { onSign,onLogin, isLogging, loginError, onLogoutClick, isLogged } = this.props
    return this.state.isLoginOpen ? 
  
    <LoginForm  login
          onSubmit={(e) => {
            e.preventDefault()
            onLogin(
              this.usnInput.input.value,
              this.pswInput.input.value
            )}
          }
        >
          <LoginInfo error={loginError}>
            { loginError ? this.errorMsgTranslator(loginError) : 'Welcome'}
          </LoginInfo>
          <TextField
            floatingLabelText='UserName'
            className='username'
            autoComplete='off'
            ref={node => this.usnInput = node}
            />
          <br />
          <TextField
            floatingLabelText='Password'
            type='password'
            className='password'
            autoComplete='off'
            ref={node => this.pswInput = node}
            />
          <br />
          <LoginIndicator
            size={40}
            left={135}
            top={240}
            status={'loading'}
            hide={!isLogging}
            />
          <Button login bigger label='登录'
            primary={true}
            type='submit'
            hide={isLogging}
            innerRef={node => this.submitBtn = node}
           
          />
          <p>还没有账号？请点击<NormalLink href="#" onClick={this.toggleLoginOpen.bind(this)}
            style={{color:'#29aed4'}}
          >注册</NormalLink></p>
        </LoginForm> 

        :
        <LoginForm
          onSubmit={(e) => {
            e.preventDefault()
            onSign(
              this.usnInput.input.value,
              this.pswInput.input.value,
              this.emInput.input.value,
            )}
          }
        >
          <LoginInfo error={loginError}>
            { loginError ? this.errorMsgTranslator(loginError) : 'Welcome'}
          </LoginInfo>
          <TextField
            floatingLabelText='UserName'
            className='username'
            autoComplete='off'
            ref={node => this.usnInput = node}
            />
          <br />
          
          <TextField
            floatingLabelText='Password'
            type='password'
            className='password'
            autoComplete='off'
            ref={node => this.pswInput = node}
            />
          <br />
          <TextField
            floatingLabelText='Email'
            type='email'
            className='password'
            autoComplete='off'
            ref={node => this.emInput = node}
            />
          <br />
          <LoginIndicator
            size={40}
            left={135}
            top={240}
            status={'loading'}
            hide={!isLogging}
            />
          <Button login bigger label='注册'
            type='submit'
            hide={isLogging}
            innerRef={node => this.submitBtn = node}
           
          />
          <p>已有账号？请<NormalLink href="#" onClick={this.toggleLoginOpen.bind(this)} style={{color:'#29aed4'}}>
            登录</NormalLink></p>
        </LoginForm>       
  }
}


export default Form
