import React,{Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css'
import {connect} from 'react-redux'

class layout extends Component{
	render(){
		return(
			<Auxiliary>
				<Toolbar isAuth={this.props.isAuthenticated}/>
				<div>SideDraer, Backdrop</div>
				<main className="content">

					{this.props.children}
				</main>
			</Auxiliary>
		)
	}
}
	

const mapStateToProps=(state)=>({
	isAuthenticated:state.auth.token !== null
})


export default connect(mapStateToProps)(layout);