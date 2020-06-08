import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const Burger=(props)=>{
	var transformedIngredients=Object.keys(props.ingredients)
	.map(igKey=>{
		return [...Array(props.ingredients[igKey])].map((_,i)=>//har element k size ki array generate ho rhi he
			<BurgerIngredient key={igKey+i} type={igKey}/>
		);
	})
	.reduce((arr,el)=>{
		return arr.concat(el);//jo bhi 
	},[])

	// console.log(transformedIngredients)
	if(transformedIngredients.length===0){
		transformedIngredients=<h3>Add some ingredients</h3>
	}


	// var x=[1,2,3,4,5]
	// var sum=x.reduce(function(total,value,index,arr){
	// 	return total+value;
	// },0)
	// console.log(sum);
	// console.log(props.ingredients['cheese']);

	// console.log(transformedIngredients);
	return(
		<div className="Burger" style={{marginTop:'15%'}}>
			<BurgerIngredient type="bread-top"/>
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom"/>
			
		</div>
	)
}

export default Burger;