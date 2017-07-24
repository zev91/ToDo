import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Power from 'material-ui/svg-icons/action/power-settings-new'
import MainList from 'material-ui/svg-icons/action/assignment'
import Face from 'material-ui/svg-icons/action/face'
import FontIcon from 'material-ui/FontIcon'
import NormalLink from '../styles/NormalLink'
import { getIsSidebarOpen, getCurrentUser } from '../reducers'
import * as actions from '../actions'

const Sidebar = ({isSidebarOpen, toggleSideBar, isLogged}) => {
  return (
    <div className='todo-sidebar'>
      <Drawer
        docked={false}
        width={220}
        open={isSidebarOpen}
        onRequestChange={toggleSideBar}
        containerStyle={{
          height: 'calc( 100% - 60px )',
          top: 60,
          zIndex: 920,
          boxShadow: '2px 2px 4px rgba(0,0,0,0.15)',
          textAlign: 'center'
        }}
        overlayStyle={{
          zIndex: 800,
          backgroundColor: 'transparent'
        }}
      >
        <NavLink
          to={'login'}
          style={{
            textDecoration: 'none'
          }}
        >
          <MenuItem
            style={{color :'#fc6b1c'}}
            primaryText={isLogged ? '个人中心' : '登录'}
            leftIcon={<Power style={{fill :'#fc6b1c'}} />}
            onClick={toggleSideBar}
          />
        </NavLink>
        <NavLink
          to={'all'}
          style={{
            textDecoration: 'none'
            
          }}
        >
          <MenuItem
            style={{color :'#008cd4'}}
            primaryText={isLogged ? '全部事项' : '全部事项(请先登录)'}
            leftIcon={<MainList style={{fill :'#008cd4'}}/>}
            onClick={toggleSideBar}
           />
        </NavLink>
        <NormalLink
          href='https://github.com/zev91/ToDo'
          target='_blank'
        >
          <MenuItem
            primaryText={'Github'}
            style={{color: '#926dd5'}}
            leftIcon={
              <FontIcon className="muidocs-icon-custom-github" style={{color: '#926dd5'}}/>
              
            }
            onClick={toggleSideBar}
          />
        </NormalLink>
        <NormalLink
          href='#'
          target='_blank'
        >
          <MenuItem
            primaryText={'Author\'s Blog'}
            style={{color: '#29aed4'}}
            leftIcon={<Face style={{fill: '#29aed4'}} />}
            onClick={toggleSideBar}
          />
        </NormalLink>
      </Drawer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSidebarOpen: getIsSidebarOpen(state),
  isLogged: getCurrentUser(state)
})

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Sidebar)
)