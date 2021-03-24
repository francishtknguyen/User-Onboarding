import React from 'react'


export default function Member(props){
    const {details} = props
    console.log(details)
    if(!details) {
        return <h3> Working on rendering member details</h3>
    }
    return(
        <div className="card">
            <h3>{details.name}</h3>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms Accepted: {details.checked === true ? 'true' : 'false'}</p>
        </div>
    )
}