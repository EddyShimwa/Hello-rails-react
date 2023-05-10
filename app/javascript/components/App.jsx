// in app/javascript/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
      </Switch>
    </Router>
  );
};

export default App;