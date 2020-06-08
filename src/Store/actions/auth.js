import * as actionTypes from './actionTypes'
// import axios from '../../axios-orders'
import axios from 'axios'


export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START,
    }
}
export const authSuccess=(idToken,localId)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        token:idToken,
        userId:localId
    }
}
export const authFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}
export const logout=()=>{
    // localStorage.removeItem('token')
    // localStorage.removeItem('expirationDate')
    // localStorage.removeItem('userId')
    return{
        type:actionTypes.AUTH_INITIATE_LOGOUT,
    }
}

export const checkAuthTimeout=(ExpireTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout());
        },9000)
    }
}


export const auth=(email,password,isSignup)=>{
    return dispatch=>{
        dispatch(authStart())
        // console.log(email,password);
        const data={
            email:email,
            password:password,
            returnSecureTokene:true
        }
        // console.log(orderData)
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCp44h75XScqHqcJRj71ArI_H3MLfK49gE';
        if(!isSignup){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCp44h75XScqHqcJRj71ArI_H3MLfK49gE';
        }
        axios.post( url, data )
        .then( response => {
            // console.log(response.data)
            // const expirationDate=new Date(new Date().getTime() + response.data.expiresIn * 1000)
            // const expirationDate=new Date();
            // console.log('expires in time ',response.data.expiresIn);
            // console.log(expirationDate);
            localStorage.setItem('token',response.data.idToken)
            // localStorage.setItem('expirationDate',expirationDate)
            // localStorage.setItem('userId',response.data.userId)
            dispatch(authSuccess(response.data.idToken,response.data.localId))
            // dispatch(checkAuthTimeout(response.data.expiresIn))
            // dispatch(checkAuthTimeout())
        })
        .catch( error => {
            dispatch(authFail(error.response.data.error));
        });
    }
}


export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }else{
            const expirationDate=new Date(localStorage.getItem('expirationDate')) 
            if(expirationDate < new Date()){
                dispatch(logout())
            }else{
                const userId=localStorage.getItem('userId')
                dispatch(token,userId)
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000))
            }
        }
    }
}