import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const toolbar=(props)=>(
	<div className="Toolbar">
		
		<Logo/>

		
		<nav>
			<NavigationItems isAuth={props.isAuth}/>
		</nav>
	</div>
)

export default toolbar;