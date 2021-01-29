import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link, useHistory} from 'react-router-dom';
import {ProductList} from './Products';
import { Container, Row, Col, Table, FormGroup, Input, Form, Button, Label } from 'reactstrap';

export const EditProduct = (props) => {
    const [selectedProduct, setSelectedProduct] = useState({
        id: '',
        date: '',
        name: '',
        description: '',
        imageUrl: '',
        featured: ''
    });
    
    let today = new Date();
    let date = parseInt(today.getMonth()+1) + "/"+ today.getDate() +"/"+today.getFullYear();
    
    const {products, editProduct} = useContext(GlobalContext);
    const history = useHistory();
    // const currentId = props.match.params.id;
    const currentId = window.location.pathname.split("/").pop()
    
    useEffect(() => {
        const productId = currentId;
        const selectedProduct = products.find(product => product.id === productId);
        setSelectedProduct(selectedProduct);
    }, [currentId, products])
    
    const submitForm = () => {
        editProduct(selectedProduct)
        history.push('/add-product');
    }
    
    let checked = '';
    
    if(selectedProduct.featured == 'featured'){
        checked = 'checked';
    }else{
        checked = '';
    }
    
    const enterName = (event) => {
        setSelectedProduct({...selectedProduct, [event.target.name]: event.target.value})
    }
    
    const enterDescription = (event) => {
        setSelectedProduct({...selectedProduct, [event.target.name]: event.target.value})
    }
    
    const enterImage = (event) => {
        setSelectedProduct({...selectedProduct, [event.target.name]: event.target.value})
    }
    
    const enterFeatured = (event) => {
        if(event.target.checked){
            setSelectedProduct({...selectedProduct, [event.target.name]: "featured"})
        }else{
            setSelectedProduct({...selectedProduct, [event.target.name]: ""})
        }
    }
  
    return(
        <Container fluid={true} className="">
            <Row>
                <Col xs={12} md={3} className="p-0">
                    <div className="sideForm edit p-5">
                        <h2>EDIT PRODUCT</h2>
                        <Form onSubmit={submitForm} className="row mt-3">
                            <FormGroup className="col-12 px-1">
                                <Label>Product Name</Label>
                                <Input type="text" name="name" value={selectedProduct.name} onChange={enterName} placeholder="Product Name" required/>
                            </FormGroup>
                            <FormGroup className="col-12 px-1">
                                <Label>Image URL</Label>
                                <Input type="text" name="imageUrl" value={selectedProduct.imageUrl} onChange={enterImage} placeholder="Image URL" required/>
                            </FormGroup>
                            <FormGroup className="col-12 px-1">
                                <Label>Description</Label>
                                <Input type="text" name="description" value={selectedProduct.description} onChange={enterDescription} placeholder="Description" required/>
                            </FormGroup>
                            <FormGroup className="col-12 px-1">
                                <Input type="checkbox" name="featured" value={selectedProduct.featured} onChange={enterFeatured} className="ml-2"checked={checked} />
                                <p className="ml-5">Featured</p>
                            </FormGroup>
                            <Button className="col-12 px-1 mb-3">Submit</Button>
                            <Link to="/add-product" className="btn d-block w-100 btn-danger">Cancel</Link>
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