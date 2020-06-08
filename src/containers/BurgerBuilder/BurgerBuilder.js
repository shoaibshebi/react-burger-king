import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHander'
import {connect } from 'react-redux'
import * as burgurBuilderActions from '../../Store/actions/index'
import * as orderActions from '../../Store/actions/index'



class BurgerBuilder extends Component{
	constructor(props){
		super(props);
		this.state={
			purchasing:false
		}
	}
	componentDidMount(){
		this.props.onInitIngredients();
	}
	purchaseHandler=()=>{
		this.props.isAuthenticated ? this.setState({purchasing:true}) : this.props.history.push('/auth')
	}

	updatePurchaseState(ingredients){
		// console.log(ingredients)
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
		    }, 0 );
		return sum;
        // this.setState( { purchasable: this.props.totalPrice>4 } );
	}
	
	purchaseCancelledHandler=()=>{
		this.setState({purchasing:false})
	}
	purchaseContinueHandler=()=>{
		/*console.log('ok he');
		const queryParams=[]
		for(let i in this.props.ings){
			queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.ings[i]))
		}
		queryParams.push('price='+this.props.totalPrice)
		const queryString=queryParams.join('&')*/

		// this.props.history.push({
		// 	pathname:'/checkout',
		// 	search:'?'+queryString
		// });
		console.log('purchase continue');
		this.props.onPurchaseInit();
		this.props.history.push('/checkout');
		
	}

	render(){
		const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
		// {salad: true, meat: false, ...}

		// if(this.props.totalPrice){
		// 	this.setState( { purchasable: true } );
		// }
		// let burger=<h1>There is nothing</h1>

		// if(this.props.ings){
		// 	burger=(
		// 		<Auxiliary>
		// 		<Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}> 
		// 			<OrderSummary ingredients={this.props.ings} purchaseCancelled={this.purchaseCancelledHandler} purchaseContinueHandler={this.purchaseContinueHandler} />
		// 		</Modal>
		// 		<Burger ingredients={this.props.ings}/>
		// 		 <BuildControls
        //             ingredientAdded={this.props.onIngredientAdded}
        //             ingredientRemoved={this.props.onIngredientRemoved}
        //             disabled={disabledInfo}
        //             purchasable={this.updatePurchaseState(this.props.ings)}
        //             price={this.props.totalPrice} 
		// 			ordered={this.purchaseHandler}
        //             />
		// 	</Auxiliary>
		// 	);
		// }
		
		return(
			<Auxiliary>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}> 
					<OrderSummary ingredients={this.props.ings} purchaseCancelled={this.purchaseCancelledHandler} purchaseContinueHandler={this.purchaseContinueHandler} />
				</Modal>
				<Burger ingredients={this.props.ings}/>
				 <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
					price={this.props.totalPrice} 
					isAuth={this.props.isAuthenticated}
					ordered={this.purchaseHandler}
                    />
			</Auxiliary>
		)
	}
}

const mapStateToProps=(state)=>({
	ings:state.burgerBuilder.ingredients,
	totalPrice:state.burgerBuilder.totalPrice,
	error:state.burgerBuilder.error,
	isAuthenticated:state.auth.token !== null
})
const mapDispatchToProps=(dispatch)=>({
	onIngredientAdded:(ingName)=>dispatch(burgurBuilderActions.addIngredient(ingName)),
	onIngredientRemoved:(ingName)=>dispatch(burgurBuilderActions.removeIngredient(ingName)),
	onInitIngredients:()=>dispatch(burgurBuilderActions.initIngredients()),
	onPurchaseInit:()=>dispatch(orderActions.purchaseInit())
})
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));