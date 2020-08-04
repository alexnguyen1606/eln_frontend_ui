import React, { Component, Fragment, useState, useEffect } from 'react';
import './../css/App.css';
import PreHeader from './PreHeader';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from './../utils/route';
import NotFound from './NotFound';

function App() {
  const [id, setId] = useState(2);

  useEffect(() => {
    getApi();
  }, []);
  const getApi = () => {
    console.log("Call Api", id);
  }
  const showRout = (route) => {
    return route.map((itemRout, i) => {
      return <Route key={i} path={itemRout.path} component={itemRout.main} exact={itemRout.exact}  ></Route>
    })
  }
  const changId = (id) => {
    setId(id)
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
