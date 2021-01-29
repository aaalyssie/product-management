import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link} from 'react-router-dom';
import {ProductList} from './Products';
import { Container, Row, Col, Table, FormGroup, Input, Form, Button, Label } from 'reactstrap';
import {v4 as uuid} from 'uuid';

export const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImage] = useState('');
    const [featured, setFeatured] = useState('');
    
    const {addProduct} = useContext(GlobalContext);
    const submitForm = () => {
        const newProduct = {
            id: uuid(),
            date: date,
            name,
            description,
            imageUrl,
            featured
        }
        addProduct(newProduct);
    }
    
    let today = new Date();
    let date = parseInt(today.getMonth()+1) + "/"+ today.getDate() +"/"+today.getFullYear();


    const enterName = (event) => {
        setName(event.target.value);
    }
    
    const enterDescription = (event) => {
        setDescription(event.target.value);
    }
    
    const enterImage = (event) => {
        setImage(event.target.value);
    }
    
    const enterFeatured = (event) => {
        if(event.target.checked){
            setFeatured("featured");
        }else{
            setFeatured("");
        }
    }
    
    return(
      <Container fluid={true} className="">
          <Row>
              <Col xs={12} md={3} className="p-0">
                  <div className="sideForm add p-5">
                      <h2>ADD PRODUCT</h2>
                      <Form onSubmit={submitForm} className="row mt-3">
                          <FormGroup className="col-12 px-1">
                              <Label>Product Name</Label>
                              <Input type="text" value={name} onChange={enterName} placeholder="Product Name" required/>
                          </FormGroup>
                          <FormGroup className="col-12 px-1">
                              <Label>Image URL</Label>
                              <Input type="text" value={imageUrl} onChange={enterImage} placeholder="Image URL" required/>
                          </FormGroup>
                          <FormGroup className="col-12 px-1">
                              <Label>Description</Label>
                              <Input type="text" value={description} onChange={enterDescription} placeholder="Description" required/>
                          </FormGroup>
                          <FormGroup className="col-12 px-1">
                              <Input type="checkbox" value={featured} onChange={enterFeatured} className="ml-2"/>
                              <p className="label">Featured</p>
                          </FormGroup>
                          <Button className="col-12 px-1">Submit</Button>
                      </Form>
                      <Link to="/" className="home-btn">&#x2190; View Home</Link>
                  </div>
              </Col>
              <Col xs={12} md={9} className="p-0">
                  <div className="content p-5">
                      <ProductList />
                  </div>
              </Col>
          </Row>
      </Container>
    )
}