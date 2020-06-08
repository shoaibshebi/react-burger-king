import * as actionTypes from './actionTypes'
// import axios from '../../axios-orders'
import axios from 'axios'


export const purchaseBurgerSuccess=(id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderData:orderData,
        id:id
    }
}
export const purchaseBurgerFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}
export const purchaseBurgerStart=()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
    }
}
export const purchaseInit=()=>{
    return{
        type:actionTypes.PURCHASE_INIT
    }
}
export const purchaseBurger=(orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart())
        // console.log(orderData);
        console.log(orderData)
        axios.post( 'https://react-my-burger-dfced.firebaseio.com/orders.json', orderData )
        .then( response => {
            console.log(response.data);
            dispatch(purchaseBurgerSuccess(response.data.name,orderData))
        } )
        .catch( error => {
            dispatch(purchaseBurgerFail(error));
        } );
    }
}




export const purchaseOrderSuccess=(orders)=>{
    return{
        type:actionTypes.PURCHASE_ORDER_SUCCESS,
        orders:orders
    }
}
export const purchaseOrderFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_ORDER_FAIL,
        error:error
    }
}
export const purchaseOrderStart=()=>{
    return{
        type:actionTypes.PURCHASE_ORDER_START
    }
}

export const fetchOrders=()=>{
    return (dispatch,getState)=>{
        dispatch(purchaseOrderStart())
        const {auth}=getState();
        console.log("token is"+auth.token)// holds entire state
        const order_url='https://react-my-burger-dfced.firebaseio.com/orders.json';
        console.log(order_url);
        axios.get(order_url)
        .then(res=>{

            console.log('fetched orders '+res)

            let fetchOrders=[]
            for(let key in res.data){
                fetchOrders.push({
                    ...res.data[key],
                    id:key
                })
            }
            // console.log(fetchOrders)
            dispatch(purchaseOrderSuccess(fetchOrders));
        })
        .catch(err=>{console.log('error in order fetch ');return dispatch(purchaseOrderFail(err))})
    }
}