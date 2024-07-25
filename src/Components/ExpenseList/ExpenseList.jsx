import React from 'react'

const ExpenseList = ({items, deleteItem}) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th scope="col">Descripitions</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                
            </tr>
        </thead>
        <tbody>
            {items.map((item, index)=><tr key = {index}>
                
                <th>{item.description}</th>
                <th>{item.amount}</th>
                <th>{item.category}</th>
                <td><button className="btn btn-outline-danger" onClick={()=>deleteItem(item.id)}>Delete</button></td>
            </tr>)}
           
            <tr>
                <td><h3>Total</h3></td>
                <td><h3>INR {items.reduce((total, item)=> total+parseInt(item.amount),0).toFixed(2)}</h3></td>
            </tr>
         
        </tbody>
        
    </table>
  )
}

export default ExpenseList