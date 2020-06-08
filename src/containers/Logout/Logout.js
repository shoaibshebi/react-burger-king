import React, { Component } from 'react'
import * as actionTypes from '../../Store/actions/index'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

 class Logout extends Component {
    componentDidMount(){
        this.props.onLogout()
    }

    render() {
        return (
            <div>
                <Redirect to="/" />
            </div>
        )
    }
}
const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({
	onLogout:()=>dispatch(actionTypes.logout())
})


export default connect(mapStateToProps,mapDispatchToProps)(Logout);