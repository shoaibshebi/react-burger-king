import React from 'react';
import {NavLink} from 'react-router-dom'

import './NavigationItem.css';

const NavigationItem=(props)=>(
	<li className="NavigationItem">
		{/* <NavLink
		exact 
		to={props.link}
		activeClassName="active">
			{props.children}
		</NavLink> */}
		<NavLink exact to="/" activeClassName="active">Burgerbuilder</NavLink>
		{props.isAuthenticated ? <NavLink exact to="/orders" activeClassName="active">Orders</NavLink> : null}
		{!props.isAuthenticated ? 
		<NavLink exact to="/auth" activeClassName="active">Authentication</NavLink>
		: <NavLink exact to="/logout" activeClassName="active">Logout</NavLink>}
	</li> 
)

export default NavigationItem;