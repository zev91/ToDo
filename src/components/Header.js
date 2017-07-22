import React, {Component} from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconRight from 'material-ui/svg-icons/social/person';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dehaze from 'material-ui/svg-icons/image/dehaze';
import  * as actions from '../actions'
import { getIsSidebarOpen, getCurrentUser} from '../reducers'


class Header extends Component{

   render(){
     const style = {margin: 5};
     const  {toggleSideBar,isSidebarOpen,isLogged,userName}  = this.props;
     const AppBarDiv = styled(AppBar)`
      
    position: absolute!important;
       & > h1{
         text-align: center;
         font-weight: 100 !important;
         font-size: 20px !important;;
       }
     `
     return(
      <AppBarDiv
       title= 'TodoList'
       iconElementLeft={ isSidebarOpen ? (<IconButton><NavigationClose/></IconButton>) : 
                                      (<IconButton><Dehaze/></IconButton>)}
       iconElementRight={isLogged ? <FlatButton icon={
              <Avatar
                  color={'#fff'}
                  backgroundColor={'#43c1ef'}
                  size={30}
                  style={style} >{isLogged.attributes.username[0].toUpperCase()}
            </Avatar>} 
            label={isLogged.attributes.username} /> : <FlatButton label="LOGIN" />}
          onLeftIconButtonTouchTap={()=>toggleSideBar()}
          />
     )
   }
}

const mapStateToProps = (state) => ({
  isSidebarOpen: getIsSidebarOpen(state),
  isLogged: getCurrentUser(state)
})
export default (
  connect(
    mapStateToProps,
    actions
  )(Header))