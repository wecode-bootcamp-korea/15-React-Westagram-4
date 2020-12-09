import React from 'react';
import Login from './Pages/yeongjae/Login/Login';
import Main from './Pages/yeongjae/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Main" component={Main} />
      </Switch>
    </Router>
  )
}

export default App;
