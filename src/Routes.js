import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginGwang from './Pages/younggwang/Login/Login';
import MainGwang from './Pages/younggwang/Main/Main';

import LoginYong from './Pages/yongseok/Login/Login';
import MainYong from './Pages/yongseok/Main/Main';

import LoginJae from './Pages/yeongjae/Login/Login';
import MainJae from './Pages/yeongjae/Main/Main';

import LoginOh from './Pages/kyungoh/Login/Login';
import MainOh from './Pages/kyungoh/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/loginGwang" component={LoginGwang} />
          <Route exact path="/mainGwang" component={MainGwang} />
          <Route exact path="/loginYong" component={LoginYong} />
          <Route exact path="/mainYong" component={MainYong} />
          <Route exact path="/loginJae" component={LoginJae} />
          <Route exact path="/mainJae" component={MainJae} />
          <Route exact path="/loginOh" component={LoginOh} />
          <Route exact path="/mainOh" component={MainOh} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
