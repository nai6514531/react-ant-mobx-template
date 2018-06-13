import React from 'react'
import { Switch, Route,  BrowserRouter as Router, } from 'react-router-dom'
import Loadable from 'react-loadable';
import { Provider } from "mobx-react"
import stores from '../model/'


const LoginComponent = Loadable({
  loader: () => import('../view/Login'),
  loading: () =><div />,
});


function RouterConfig() {
  return (
    <Provider {...stores}>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginComponent}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default RouterConfig
