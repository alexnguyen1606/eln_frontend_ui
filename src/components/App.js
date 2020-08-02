import React, { Component, Fragment } from 'react';
import './../css/App.css';
import PreHeader from './PreHeader';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from './../utils/route';
import NotFound from './NotFound';

class App extends Component {
  showRout = (route) => {
    return route.map((itemRout, i) => {
      return <Route key={i} path={itemRout.path} component={itemRout.main} exact={itemRout.exact}  ></Route>
    })
  }
  render() {
    return (
      <Fragment>
        <Router>
          <PreHeader></PreHeader>
          <Switch>
            {this.showRout(route)}
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </Fragment>



    )
  };
}

export default App;
