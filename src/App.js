import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Staking from './pages/Staking';
import Error from './pages/Error';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/" component={Projects} />
        <Route exact path="/staking/" component={Staking} />
        <Route exact path="/error/" component={Error} />
      </Switch>
    </Provider>
  );
}

export default App;
