import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems=(props)=>(
	<ul className="NavigationItems">
		{/* <NavigationItem  link="/">BurgerBuilder</NavigationItem>
		<NavigationItem  link="/orders">Orders</NavigationItem> */}
		<NavigationItem isAuthenticated={props.isAuth}/>
	</ul>
)
export default NavigationItems;