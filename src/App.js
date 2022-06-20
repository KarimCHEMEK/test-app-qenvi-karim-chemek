import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Albums from './components/Albums';
import Users from './components/Users';
import AlbumsPhotos from './components/AlbumsPhotos'

export default function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/user" exact component={Users} />
          <Route path={"/user/:userId"} excat component={Albums} />
          <Route path={"/albums/:albumId/photos"} excat component={AlbumsPhotos} />
          <Redirect to={"/user"} />
        </Switch>
      </div>
    </Router>
  );
}