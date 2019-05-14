import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Container} from 'reactstrap';
// import Routes from './Routes'
import OfferList from './OfferList';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Campus Buddy</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <body>
        <Container>
          <PostForm />
          <OfferList />
        </Container>
      </body>
    </div>
  );
}

export default App;
