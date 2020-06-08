import React ,{Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route, Redirect} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'


class Checkout extends Component{
    // state={
    //     ingredients:null,
    //     totalPrice:null
    // }

   
    continueHandler=()=>{
        this.props.history.replace('checkout/contact-data');//this will replace the current appended url to the Domain.com with the given
    }
    cancelHandler=()=>{
        this.props.history.goBack('/');
    }
    render(){
        let summary=<Redirect to="/" />
        if(this.props.ings.salad !==0 && this.props.ings.bacon !==0 && this.props.ings.cheese !==0 && this.props.ings.meat !==0 ){
            if(this.props.purchased){
                summary=<Redirect to="/" />
            }else{
                // console.log(this.props.ings)
                summary=(<div>
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        continueHandler={this.continueHandler}
                        cancelHandler={this.cancelHandler}
                        />
                        <Route path={this.props.match.path+'/contact-data'} component={ContactData}/>
                    </div>)
            }
            
        }
        return summary;
    }
}
const mapStateToProps=(state)=>({
	ings:state.burgerBuilder.ingredients,
    totalPrice:state.burgerBuilder.totalPrice,
    purchased:state.order.purchased
})
const mapDispatchToProps=(dispatch)=>({
	
})

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);