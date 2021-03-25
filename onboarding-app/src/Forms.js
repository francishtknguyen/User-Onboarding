import React from 'react'



export default function Form(props) {
    const {values, change, submit, disabled, errors, } = props

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const {checked, name, value, type} = event.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse);
    }
    return(
    <form className="container" onSubmit={onSubmit}>
        <h3>Add New User</h3>
        <div className="input">
        <label>Name
            <input 
            type="text"
            value={values.name}
            name="name"
            onChange={onChange}
            />
        </label><br />
        <label>Email
            <input 
                type="text"
                value={values.email}
                name="email"
                onChange={onChange}
            />
        </label><br />
        <label>Password
            <input 
                type="password"
                value={values.password}
                name="password"
                onChange={onChange}
            />
        </label><br />
        <label>Terms of Service
            <input 
                type="checkbox"
                checked={values.termsAgreed}
                name="termsAgreed"
                onChange={onChange}
            />
        </label><br />
        </div>
        <div className="submit">
        {errors &&
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        }
            <button disabled={disabled} type="submit" id="submitBtn">Submit</button>
        </div>
    </form>
    )
}