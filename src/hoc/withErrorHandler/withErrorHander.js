import React,{Component} from 'react'

// import Modal from '../../components/UI/Modal/Modal'
import Auxiliary from '../Auxiliary/Auxiliary'
// import axios from '../../axios-orders'


const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:true
        }
        componentDidMount(){
            //ye tab he jab request computer se nikalti he ya nai
            axios.interceptors.request.use(req=>{
                this.setState({error:false})
            })
            //ye he jab response a jata he ya nai
            axios.interceptors.response.use(null,error=>{
                this.setState({error:error})
            })
        }
        errorConfirmedHandler=()=>{
            this.setState({error:false})
        }

        render (){
            return (
                <Auxiliary>
                    
                  
                    <WrappedComponent {...this.props}/>
                </Auxiliary>
            )
        }
    }
    
    
}

export default withErrorHandler;