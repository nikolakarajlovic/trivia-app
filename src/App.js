import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TriviaApp from './pages/TriviaApp';

function App() {
  return (
    
    <div className='App'>
      <TriviaApp />
      {/* <a class="navbar-brand" href='/trivia'>TriviaApp</a> */}
      {/* <Router>
        <nav>
          <ul>
            <li>
              <Link to='/trivia'>Trivia</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route exact path='/trivia'>
            <TriviaApp />
          </Route>
          <Route exact path='/'>
            <TriviaApp />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
