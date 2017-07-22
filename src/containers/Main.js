import React, {Component} from 'react';
import { Redirect } from 'react-router'
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'


import Footer from '../components/Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import { getCurrentUser ,getselectedNav} from '../reducers'
import AddTodo from './AddTodo';
import * as actions from '../actions'


class Main extends Component {
  render() {
    const { isLogged,selectedNav} = this.props
    return isLogged ? (
      <div className='todo-main'>
        <Redirect to='/all' />
        <VisibleTodoList/>
        <Footer index={selectedNav}/>
        <AddTodo/>
      </div>
    ) : ( <Redirect to='/login' />)
    ;
  }
}

const mapStateToProps = (state) => ({
  isLogged: getCurrentUser(state),
  selectedNav:getselectedNav(state)
})
export default connect(mapStateToProps,actions)(Main)