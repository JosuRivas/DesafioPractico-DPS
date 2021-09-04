import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Container, Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap'
import Select from 'react-select';
import { render } from '@testing-library/react';
import Todos from './Todos';

const Productos = [
    { value: 2.53, label: 'Leche Pinito 350g', price: 2.53 },
    { value: 1.52, label: 'Huevos 12un.', price: 1.52 },
    { value: 0.55, label: 'Azúcar Del Cañal 1lib', price: 0.55 },
    { value: 1.12, label: 'Hersheys Cookies n Cream', price: 1.12 },
    { value: 0.25, label: 'Tomates un.', price: 0.25 },
    { value: 0.45, label: 'Aguacates un.', price: 0.45 },
    { value: 0.75, label: 'Lechugas un.', price: 0.75 },
    { value: 2.49, label: 'Café instantáneo 55 sobres', price: 2.49 },
    { value: 5.15, label: 'Angelina libra', price: 5.15 },
    { value: 3.99, label: 'Pechuga deshuesada libra', price: 3.99 }
]

const Form = () => {
    const [value, setValue] = useState();
    const [productos, setProds] = useState();

    const onSelectChange = (value) => {
        setValue(value);
        console.log(value);
    }

    const handleClick = e => {
        setProds([...productos,value])
      }

    const deleteProducto = indice => {
        const newProductos = [...productos]
        newProductos.splice(indice, 1)
        setProds(newProductos)
    }

    const renderCard = (card, index) => {
        return (
            <Container>
                <br />
                <Row>
                    <Col lg={3} md={3} sm={2} xs={1}></Col>
                    <Col lg={6} md={6} sm={8} xs={10}>
                        <Card border="light" className="text-center" key={index}>
                            <Card.Body>
                                <Card.Title>{card.label}</Card.Title>
                                <Card.Text>
                                    <br />
                                    <InputGroup>
                                        <InputGroup.Text >Cantidad: </InputGroup.Text>
                                        <FormControl type="number"
                                            aria-label="Default"
                                            placeholder="1"
                                        />
                                    </InputGroup>
                                </Card.Text>
                                <Button className="btn-delete" variant="danger">Eliminar producto</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">Precio total ${card.price}</Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>

        )
    }


    render()
    {
        return (
            <>
                <br />
                <h2 className="titulo">Lista de compras</h2>
                <br />
                <form className="formu" onSubmit={e => e.preventDefault()}>
                    <br />
                    <Container>
                        <Row>
                            <Col lg={3} md={3} ></Col>
                            <Col lg={5} md={4} sm={8} xs={8} >
                                <div>
                                    <Select 
                                    value={value}
                                    options={Productos} 
                                    onChange={onSelectChange}/>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm xs>
                                <Button variant="secondary" size="sm" onClick= {handleClick} >Agregar</Button>
                            </Col>
                        </Row>
                        <br />
                    </Container>
                </form>
                
                
                    
                <div>
                    {Productos.map(renderCard)}
                </div>
                        

                <Container>
                    <Row>
                        
                    <Alert variant="info">
                        <Alert.Heading>Total a pagar</Alert.Heading>
                        <hr />
                        <p className="mb-0">
                            $0.00
                        </p>
                    </Alert>
                    </Row>
                </Container>
            </>
        )
    }

}
export default Form