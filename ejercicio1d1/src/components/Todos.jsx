import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap'
const Todos = ({ producto, precio, index, deleteProducto }) => {
    return (
        <>
            <Card border="light" className="text-center">
                <Card.Body>
                    <Card.Title>{producto}</Card.Title>
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
                    <Button  className="btn-delete" onClick={() => deleteProducto(index)} variant="danger">Eliminar producto</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Precio total ${precio}</Card.Footer>
            </Card>
        </>
    )
}












export default Todos

                