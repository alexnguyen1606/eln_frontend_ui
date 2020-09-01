import React, { Component, Fragment, useState, useEffect } from 'react';
import './../css/App.css';
import PreHeader from './PreHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from './../utils/route';
import NotFound from './NotFound';
import { useSelector } from 'react-redux'
import { isEmpty } from '././../utils/ObjectUtils'
import { useHistory, Redirect } from 'react-router-dom';
import Login from './Login';
function App() {
  const history = useHistory();
  const userInfo = useSelector(state => state.userInfo);
  const showRout = (route) => {
    let router = route.map((itemRout, i) => {
      return <Route key={i} path={itemRout.path} component={itemRout.main} exact={itemRout.exact}  ></Route>
    })
    return router;

  }
  return (
    <Fragment>
      <Router>
        <PreHeader></PreHeader>
        <Switch>
          {showRout(route)}
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </Fragment>
  )

}

export default App;
