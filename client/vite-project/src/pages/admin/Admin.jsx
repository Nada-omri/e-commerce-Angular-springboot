import React from 'react'

function Admin(props) {
  return (
    <div className="mb-3">
                <label for="Email" className="form-label">{props.label}</label>
                <input type={type} className="form-control" name="Email"/>
            </div>
  )
}

export default Admin