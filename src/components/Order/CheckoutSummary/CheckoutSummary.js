import React from 'react';

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'


const checkoutSummary=(props)=>{
    return(
        <div className="CheckoutSummary">
            
            <div style={{width:'300px',height:'300px'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType="Danger"
                clicked={props.cancelHandler}
                >Cancel
            </Button>
            <Button
                btnType="Success"
                clicked={props.continueHandler}
                >Continue
            </Button>
        </div>
    )
}

export default checkoutSummary;