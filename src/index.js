import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import  './styles/init.css';
import finalCreateStore from './store/store';

let devtoos = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = finalCreateStore(reducer,devtoos)
const AppCt = () => (
      <MuiThemeProvider>
            <Provider store = {store}>
              <HashRouter>
                 <App />
             </HashRouter>
       </Provider>
      </MuiThemeProvider>
)

ReactDOM.render(<AppCt />, document.getElementById('root'));

