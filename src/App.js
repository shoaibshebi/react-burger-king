import React, { Component } from "react";
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route,Switch,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import * as actions from './Store/actions/index'

import './App.css';
import Logout from "./containers/Logout/Logout";

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSingup()
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout"  component={Checkout}/>
            <Route path="/orders"  component={Orders}/>
            <Route path="/auth"  component={Auth}/>
            <Route path="/logout"  component={Logout}/>
            <Route path="/" exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps=()=>({

})
const mapDispatchToProps=(dispatch)=>({
  onTryAutoSingup:()=>dispatch(actions.authCheckState())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));