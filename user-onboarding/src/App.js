import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import Form from './components/Form'
import Member from './components/Member'
import formSchema from './validation/formSchema'

const initialFormValues = {
  //TEXT INPUTS
  username:'',
  email:'',
  password:'',
  name:'',
  //RADIO BUTTONS
  status:'',
  //CHECKBOX
  terms:false,
}

const initialFormErrors = {
  username:'',
  email:'',
  password:'',
  name:'',
  status:'',
  terms:''
}

const initialMembers = []
const initialDisabled = true


export default function App() {

  const [members,setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
        [name]: isChecked,
    })
    yup
      .reach(formSchema, name)
      .validate(isChecked)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: false
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
  }
  const postNewMember = (newMember) => {
    axios.post('https://reqres.in/api/users', newMember)
    .then(res => {
      console.log(res)
      setMembers([res.data, ...members])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log('ERROR:', err)
    })
  }

  const submit = () => {
    const newMember = {
      username:formValues.username.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
      name:formValues.name.trim(),
      status: formValues.status.trim(),
      terms: Object.keys(formValues.terms).filter(tou => formValues.terms[tou])
    }
    postNewMember(newMember)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  },[formValues])


  return (
    <div className="App">
      <h1>Register Now!</h1>
      <Form
       submit={submit}
       values={formValues}
       inputChange={inputChange} 
       checkboxChange={checkboxChange}  
       disabled={disabled}
       errors={formErrors}
       />
      {
        members.map(member => {
          return <Member member={member} key={member.id}/>
        })
      }
    </div>
  );
}


