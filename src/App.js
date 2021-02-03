import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddProduct} from './components/AddProduct';
import {EditProduct} from './components/EditProduct';
import {GlobalProvider} from './context/GlobalState';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid';

function App() {
    if (localStorage.getItem("Products") === null) {
        let today = new Date();
        let date = parseInt(today.getMonth()+1) + "/"+ today.getDate() +"/"+today.getFullYear();
        const initialState = {
            products: [{
                id: uuid(),
                date: date,
                name: 'My Product',
                description: 'The first product',
                imageUrl: 'https://i.imgur.com/vpaB6oB.png',
                featured: 'featured'
                }
            ]
        }
        localStorage.setItem('Products', JSON.stringify(initialState));
    }
    
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
