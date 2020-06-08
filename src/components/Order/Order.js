import React from 'react'
import './Order.css'

export default function Order(props) {
    // console.log(props)
    // let Ingredienet=[]
    // for(let key in props.ing)
    return (
        <div className="Order" style={{marginTop:'15%'}}>
            <p>Ingredienets: <span style={{border:"1px solid black ",borderRadius:"3px"}}>alad:{props.ingredients.salad}</span>, <span style={{border:"1px solid black ",borderRadius:"3px"}}>bacon:{props.ingredients.bacon}</span>, 
            <span style={{border:"1px solid black ",borderRadius:"3px"}}>cheese:{props.ingredients.cheese}</span>, <span style={{border:"1px solid black ",borderRadius:"3px"}}>meat:{props.ingredients.meat} </span></p>
            <h4>Total Price: {props.totalPrice}</h4>
            {/* <p>Price L usd  {Number.parseFloat(props.totalPrice).toFixed(2)}</p> */}
        </div>
    )
}
