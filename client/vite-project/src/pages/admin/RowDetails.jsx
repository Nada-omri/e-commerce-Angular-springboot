import React from 'react';

function RowDetails({ name, email, password, ID, onDelete }) {
  return (
    <tr>
      <th>{email}</th>
      <td>{name}</td>
      <td>{password}</td>
      <td>{ID}</td>
      <td className="gap__actions">
    
           
       

        <span className="badge bg-danger" onClick={() => onDelete(ID)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}

export default RowDetails;
