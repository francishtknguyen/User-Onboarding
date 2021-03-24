import logo from './logo.svg';
import './App.css';
import * as yup from 'yup'
import axios from 'axios'
import React, {useState}from 'react'

const initialFormValues = [{
  name:'',
  email:'',
  password:'',
  checked: false,
}]

const intialFormErrors = [{
  name:'',
  email:'',
  password:'',
  checked:'',
}]

function App() {
  const [members, setMembers] = useState();
  const [form, setForm] = useState(initialFormValues);
  const [disabled,setDisabled] = useState();
  const [errors, setErrors] = useState(intialFormErrors);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
