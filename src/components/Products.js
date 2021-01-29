import React, {useContext, useState, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link} from 'react-router-dom';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Row, Col, Table  } from 'reactstrap';
import styles from '../App.css';

export const ProductList = (props) => {
    const {products, deleteProduct} = useContext(GlobalContext);
    return(
      <div className="px-5">
          <h2>PRODUCT LIST</h2>
          <Table className="productTable mt-5">
              <thead>
                  <tr>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Featured</th>
                      <th>Edit</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
              {products.length > 0 ? (
                  <>
                  {products.map(product =>(
                      <tr key={product.id}>
                          <td>{product.date}</td>
                          <td>{product.name}</td>
                          <td>{product.description}</td>
                          <td><img src={product.imageUrl} className="img"/></td>
                          <td>{product.featured}</td>
                          <td><Link to={`/edit-product/${product.id}`} className="btn btn-warning">Edit</Link></td>
                          <td><button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button></td>
                      </tr>
                  ))}
                  </>
              ) : (
                  <tr><td colspan="5"><h3>No Products</h3></td></tr>
              )}
              </tbody>
          </Table>
      </div>
    )
}

export const ProductCatalog = (props) => {
    const {products, deleteProduct} = useContext(GlobalContext);
    return(
      <Container className="pt-3 pb-5">
          <h2 className="text-center">OUR PRODUCTS</h2>
          <Row className="productCatalog">
              {products.length > 0 ? (
                  <>
                  {products.map(product =>(
                      <Col xs={6} md={3} key={product.id}>
                          <div className="item">
                              <img src={product.imageUrl} className="img"/>
                              <div className="details">
                                  <h3>{product.name}</h3>
                                  <p>{product.description}</p>
                              </div>
                          </div>
                      </Col>
                  ))}
                  </>
              ) : (
                  <h4 className="mt-5 w-100 text-center">No Available Products</h4>
              )}
          </Row>
      </Container>
    )
}

export const FeaturedProducts = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const {products, deleteProduct} = useContext(GlobalContext);
  const featuredProducts = products.filter(producto => producto.featured == "featured")
  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === featuredProducts.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? featuredProducts.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  
  const slides = featuredProducts.map(item => {
      return (
        <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.imageUrl}>
          <img src={item.imageUrl} alt={item.name} />
        </CarouselItem>
      );  
  
  });
  return (
      <div>
          {featuredProducts.length > 0 ? (
            <Container className="py-5">
                  <Carousel activeIndex={activeIndex} next={next} previous={previous} ride>
                  <CarouselIndicators items={featuredProducts} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {slides}
                </Carousel>
            </Container>
          ) : (
            null
          )}
      </div>
  );
}
