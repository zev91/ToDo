import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation} from 'material-ui/BottomNavigation';
import FilterLink from '../containers/FilterLink'
import BoottomPeper from '../styles/BottomPeper';

const Footer = (index) => 
  <BoottomPeper
    className={'todo-bottomBar'}
  >
    <BottomNavigation selectedIndex={index}>
      <FilterLink filter='all'/>
      <FilterLink filter='active'  />
      <FilterLink filter='completed' />
    </BottomNavigation>
  </BoottomPeper>

export default Footer;