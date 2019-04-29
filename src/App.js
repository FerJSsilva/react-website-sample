import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './layout/Header';


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
