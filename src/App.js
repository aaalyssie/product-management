import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddProduct} from './components/AddProduct';
import {EditProduct} from './components/EditProduct';
import {GlobalProvider} from './context/GlobalState';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <div className="App">
          <GlobalProvider>
              <Router>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/add-product" component={AddProduct} />
                      <Route path="/edit-product" component={EditProduct} />
                  </Switch>
              </Router>
          </GlobalProvider>
      </div>
    );
}

export default App;
