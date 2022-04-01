import React from 'react'

const SuppliersList = ({x}) => {
  return (
   <tr>
       <td>{x.company}</td>
       <td>{x.contact}</td>
       <td>{x.tel}</td>
       <td>{x.commentry}</td>
       <td>{x.country}</td>
       <td>{x.status}</td>
   </tr>
  )
}

export default SuppliersList
