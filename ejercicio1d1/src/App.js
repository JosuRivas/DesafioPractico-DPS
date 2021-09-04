import React from "react";
import "./App.css";
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownToggle} from 'reactstrap';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <br/>
        <br/>
        <h2 className="titulo">Lista de compras</h2>
        <Form />
      </div>
    </div>
  );
};
export default App;
