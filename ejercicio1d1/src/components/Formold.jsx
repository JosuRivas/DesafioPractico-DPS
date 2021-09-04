import React, {useState} from 'react'
import Todos from '../components/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {Button, Alert} from 'react-bootstrap'

const Form = () => {
    const [todo,setTodo] = useState({})
    const [todos,setTodos] = useState([])
  
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
      if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
        alert('El campo no puede estar vacío')
        return
      }
      setTodos([...todos,todo])
    }
  
    const deleteTodo = indice => {
      const newTodos = [...todos]
      newTodos.splice(indice,1)
      setTodos(newTodos)
    }

    const [dropdown, setDropdown]=useState(false);
    
    const abrirCerrarDropdown=()=> {
        setDropdown(!dropdown);
    }
  
    return (
      <>
      <br/>
      <form className="formu" onSubmit={e => e.preventDefault()}>
        <br />
        
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
            <DropdownToggle caret>
                Seleccione su producto
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>accion 1</DropdownItem>
                <DropdownItem>accion 2</DropdownItem>
                <DropdownItem>accion 3</DropdownItem>
                <DropdownItem>accion 4</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <br/>

        <Button  onClick= {handleClick}>Agregar</Button>
      </form>
      {
        todos.map((value,index) => (
          <Todos todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
        ))
      }
      </>
    )
  }
  export default Form