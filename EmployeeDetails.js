import React from 'react'

function EmployeeDetails({details}) {
  return (
    <div>
        <h1>Employee Details</h1>
        <p>Employee Name : {details.name?.first}</p>
        <p>Employee phone : {details.phone}</p>
        <p>Employee image : <img src={details.picture?.large}/></p>
        <p>Employee gender : {details.gender} </p>
        <p>Employee address : {details.location?.street?.name}</p>
    </div>
  )
}

export default EmployeeDetails;