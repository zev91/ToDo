import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'  
import { Route, Switch ,} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import Main from './Main';
import Login from './Login';
injectTapEventPlugin() 
class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Header/>
        <Drawer/>
         <Switch>

      <Route
        path='/login'
        component={Login}
      />
      <Route
        path='/:filter?'
        component={Main}
        exact
      />
    </Switch>
      </div>
    );
  }
}

export default App;
