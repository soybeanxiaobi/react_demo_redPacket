import React, { Component } from 'react';
//引入react-route-dom
import{ BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

//引入路由组件 组件首字母需要大写
import SetCom from './component/setRedPacket/setRedPacket'
import OpenCom from './component/openRedPacket/openRedPacket'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Switch>
              <Route exact path="/" component={SetCom} />
              <Route path="/openPacket" component={OpenCom} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
 