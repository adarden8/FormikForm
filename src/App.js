import React from "react";
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    emailField: '',
    pswField: ''
  },
  onSubmit: values =>{
    console.log('form', values);
    alert('Login Successful');
  },
  validate: values => {
    let errors = {};
    if(!values.emailField) {
      errors.emailError = 'field required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
      errors.emailError = 'username should be an email';
    }
    if(!values.pswField) errors.pswError = 'Field Required';
    return errors;
  }
});
  return (
    <div>
      <form onSubmit={formik.handleSubmit}> 
        <div>Email:</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        
        {formik.errors.emailError ? <div style={{color: 'red'}} id="emaileError">{formik.errors.emailError}</div>: null} 
        <div>Password:</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        
        {formik.errors.pswError ? <div style={{color: 'red'}} id="pswError">{formik.errors.pswError}</div>: null} 
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
