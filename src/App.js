import './App.css';
import Home from './components/Home';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TutorPage from './components/TutorPage';
import User from './components/User';
import Login from './components/Login';


function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <Switch>
          <Route path="/tutorpage">
              <TutorPage />
          </Route>
        <Route path="/user">
            <User />
        </Route>
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/">
        <Home />
        </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
