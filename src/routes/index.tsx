import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Repository from '../Pages/Repository';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;