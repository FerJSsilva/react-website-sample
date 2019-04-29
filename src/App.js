import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Courses from './pages/Courses';
import Featured from './pages/Featured';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About title='About - Props Example' />} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/teachers/:topic/:name" component={Featured} />
          <Route path="/courses" component={Courses} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
