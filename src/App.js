import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
