import React from 'react'


export default function Form(props) {
    const {values, change, submit, disabled, errors, } = props

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const {checked, name, value, type} = event.target
        valueToUse = type === 'checkbox'? checked : value
        change(name, valueToUse);
    }
    
    <form className="container" onSubmit={OnSubmit}>
        <h2>Add New User</h2>
        <div className="input">
        <label>Name:
            <input 
            type="text"
            value={values.name}
            name="name"
            onChange={OnChange}
            />
        </label>
        <label>Email:
            <input 
                type="text"
                value={values.name}
                name="email"
                onChange={OnChange}
            />
        </label>
        <label>Password
            <input 
                type="text"
                value={values.passwrod}
                name="password"
                onChange={OnChange}
            />
        </label>
        <label>Terms of Service
            <input 
                type="checkbox"
                value={values.terms}
                name="term"
                onChange={OnChange}
            />
        </label>
        </div>
        <div className="submit">
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <button disabled={disabled}>Submit</button>
        </div>
    </form>
    
}