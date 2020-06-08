import React ,{Component} from 'react'
import Order from '../../components/Order/Order'
// import axios from '../../axios-orders'
import {connect } from 'react-redux'
import * as orderActions from '../../Store/actions/index'

class Orders extends Component{
    // state={
    //     orders:[],
    //     loading:false
    // }
    componentDidMount(){
       this.props.onFetchOrders();
       console.log('these are containers orders '+this.props.orders);
    }
    render(){
        return(
            <div>
                {this.props.orders.map(order=>
                   

                    <Order key={order.id}
                    ingredients={order.ingredients}
                    totalPrice={order.price}
                    />
                    )}

                {console.log(this.props.orders)}
            </div>
            
        );
    }
}

const mapStateToProps=(state)=>({
    orders:state.order.orders,
    // ingredients:state.order.ingredients,
    // totalPrice:state.order.totalPrice,
    loading:state.order.loading
})
const mapDispatchToProps=(dispatch)=>({
    onFetchOrders:()=>dispatch(orderActions.fetchOrders())
})


export default connect(mapStateToProps,mapDispatchToProps)(Orders);