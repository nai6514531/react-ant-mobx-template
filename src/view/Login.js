
import React, { Component } from 'react';
import {observer, inject} from 'mobx-react'

@inject("loginStore")
@observer
class Login extends Component{
  clickHandler() {
  }
  render() {
    return(
      <div>
        <h1>this is Login {this.props.loginStore.name}</h1>
      </div>
    )
  }
}
export default Login