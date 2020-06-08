import React,{Component} from 'react';
import Button from '../../UI/Button/Button';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';



class OrderSummary extends Component{
	componentWillUpdate(){
		console.log('OrderSummary will update')
	}
	render(){
		const ingredientsSummary=Object.keys(this.props.ingredients)
			.map((igKey,i)=>{
				return <li key={igKey+i}><span>{igKey}: {this.props.ingredients[igKey]}</span></li>
			})
		return(
			<Auxiliary>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingrediwnts</p>
				<ul>
					{ingredientsSummary}
				</ul>
				<p>Continue to check out</p>
				<Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancal</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinueHandler}>Continue</Button>
			</Auxiliary>
		)
	}

}
export default OrderSummary;