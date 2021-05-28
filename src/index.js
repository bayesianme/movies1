import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Movies from './movies';
import TVSeries from './tvSeries';
import SignIn from './signIn';
import Profile from './profile';


const App = () => {
  return (
    <Router>
      <div> 
      <Switch>
        <Route path = '/' exact>
          <Home/>
        </Route>
        <Route path = '/movies'>
          <Movies/>
        </Route>
        <Route path = '/tvSeries'>
          <TVSeries/>
        </Route>
        <Route path = '/signIn'>
          <SignIn/>
        </Route>
        <Route path = '/profile'>
          <Profile/>
        </Route>
      </Switch> 
      </div>
    </Router>
  )
};



ReactDOM.render(<App/>, document.getElementById("root"));