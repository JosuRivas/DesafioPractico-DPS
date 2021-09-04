import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert} from 'react-bootstrap'
const Todos = ({todo, index, deleteTodo}) => {
    return (
        <>
        <div className="list">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{todo}</h5>
                        <input type="number"name="cantidad" onChange={handleChange}/>
                        <a href="#" class="card-link warning">Quitar</a>
                    </div>
                </div>
            <Button className="btn-delete" onClick={() => deleteTodo(index)}> X </Button>
        </div>
        </>
    )
}
export default Todos