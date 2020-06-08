import React,{Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './Modal.css'


class Modal extends Component {
	componentWillUpdate(){
		// console.log('Modal will update')
	}
	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.show !== this.props.show){
			return true;
		}else {return false}
	}
	render(){
		return(
			<Auxiliary>
				<Backdrop clicked={this.props.modalClosed} clicked={this.props.errorConfirmedHandler} show={this.props.show}/>
				<div className="Modal" style={{
		                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
		                opacity: this.props.show ? '1' : '0'
		            }}>
				 {this.props.children}
				</div>
			</Auxiliary>
		)
	}
}

export default Modal;