import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/task1">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
            <li>
              <Link to="/task3">Task 3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/task1" component={Task1} />
          <Route path="/task2" component={Task2} />
          <Route path="/task3" component={Task3} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
