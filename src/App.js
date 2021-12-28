import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';
// import { Route } from 'react-router';
import Home from './pages/home';
import Destination from './pages/destination';
import Crew from './pages/crew';
import Technology from './pages/technology';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path="/destination" component={Destination}/>
        <Route path="/crew" component={Crew}/>
        <Route path="/technology" component={Technology}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
