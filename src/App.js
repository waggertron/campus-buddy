import React from 'react';
import './App.css';

import {Container} from 'reactstrap';
// import Routes from './Routes'
import OfferList from './OfferList';
import PostForm from './PostForm';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="title">Campus Buddy</h1>
          <div className="nav">
            <NavLink to="/" exact className="navItem">
              Posts
            </NavLink>
            <NavLink to="/newPost" className="navItem">
              Create Post
            </NavLink>
          </div>
        </header>
        <Container className="main">
          <Route path="/" exact onlyActiveOnIndex component={OfferList} />
          <Route path="/newPost" exact component={PostForm} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
