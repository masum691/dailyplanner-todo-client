import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AddList from './Pages/AddList/AddList';
import UpdateList from './Pages/UpdateList/UpdateList';

function App() {
  return (
    <div className="app-main">
      <div className='app-container'>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/add-item">
              <AddList></AddList>
            </Route>
            <Route path="/update/:id">
              <UpdateList></UpdateList>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
