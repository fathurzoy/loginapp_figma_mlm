import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import Latihan from './pages/latihan/Latihan';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/latihan">
            <Latihan/>
          </Route>

          <Route path="/register">
            <RegisterPage/>

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
