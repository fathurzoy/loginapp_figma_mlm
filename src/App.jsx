import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/register">
            <h1>Register</h1>

          </Route>

          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/">
            <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
