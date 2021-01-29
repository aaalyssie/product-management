import React from 'react';
import {ProductCatalog, FeaturedProducts} from './Products';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

export const Home = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link to="/add-product" className="nav-link">Manage Products</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <FeaturedProducts />
            <ProductCatalog />
        </div>
    )
}