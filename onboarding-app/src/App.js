// import logo from './logo.svg';
import './App.css';
import * as yup from 'yup'
import axios from 'axios'
import React, {useState, useEffect}from 'react'
import Form from './Forms'
import schema from './validation/schema'
import Member from './member'

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  termsAgreed: false,
};

const intialFormErrors = [{
  name:'',
  email:'',
  password:'',
}];

const initialMembers =[];

const initialDisable = true;

function App() {
  const [members, setMembers] = useState(initialMembers);
  const [form, setForm] = useState(initialFormValues);
  const [disabled,setDisabled] = useState(initialDisable);
  const [errors, setErrors] = useState(null);

  // const getMembers = () => {
    
  //   axios
  //   .get(`https://reqres.in/api/users`)
  //   .then(res => {
  //     setMembers(res.data.data)
  //     // console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  const postMembers = (newMembers) => {
    axios
    .post(`https://reqres.in/api/users`, newMembers)
    .then(res => {
      console.log(res)
      setMembers([res.data, ...members])
      setForm(initialFormValues);
      setDisabled(true);
    })
    .catch(err => {
      console.log(err)
    })
    
    
  }

  const submit = () => {
    const newMembers = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
      termsAgreed: form.termsAgreed,
    }
    postMembers(newMembers);
  }

  const change = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setErrors({...errors, [name]:"",})
    })
    .catch(err => {
      setErrors({...errors, [name]:err.errors[0]})

    })
    setForm({...form, [name]:value})
  }

  // useEffect(() => {
  //   getMembers();
  // }, [])

  useEffect(() => {
    schema.isValid(form)
    .then( valid => {
      setDisabled(!valid);
    });
  }, [form])


  return (
    <div className="App">
      <div className="form">
        <header>
          <h1>Onboarding<br /> App</h1>
        </header>
        
          <Form 
          values = {form}
          change = {change}
          submit = {submit}
          disabled = {disabled}
          errors = {errors} 
          />
      </div>

      <div className="cards">
        {members.map( (member, idx) => {
          return(<Member key={idx} details={member}/>)
        })}
      </div>
    </div>
  );
}

export default App;
