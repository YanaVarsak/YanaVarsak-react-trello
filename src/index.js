import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { App } from "./components";

class AppWithAuth extends React.Component {
  state = { isAuth: false };

  comeDashboard = () => {
    this.setState({
      isAuth: true,
    });
  };

  render() {
   
    return (
      <Router>
      <Switch>
        <Route path="/login">
          {this.state.isAuth ? (
            <Redirect to="/dashboard" />
          ) : (
            <LoginPage comeTrello={this.comeDashboard }/>
          )}
        </Route>
        <Route path="/dashboard">
          {this.state.isAuth ? <App /> : <Redirect to="/login" />}
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithAuth />, rootElement);

