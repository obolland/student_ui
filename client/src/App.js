import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/about';
import HomePage from './pages/home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;