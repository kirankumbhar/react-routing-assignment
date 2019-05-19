import React, { Component } from 'react';
import {Link, BrowserRouter ,Redirect , Route, Switch} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NavLink from './Components/UI/NavLink/NavLink';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <NavLink linkURL = '/users' linkText = 'Users'/>
              <NavLink linkURL = '/courses' linkText = 'Courses'/>
            </ul>
          </nav>
          <Switch>
            <Route path="/users" exact component={Users}/>
            <Route path="/courses" component={Courses}/>
            <Redirect from="/" to="/users"/>
            <Route render={() => <h1>404 page Not Found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
