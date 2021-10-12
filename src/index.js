import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { App } from "./components";
import {UserPage}from './components/UserPage/UserPage';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

class AppWithAuth extends React.Component {
  state = { isAuth: false };

onAuthSucces = () =>{
    this.setState((prevState) => ({
      isAuth: !prevState.isAuth,
    }));
  };

  

  render() {
    return (
      <BrowserRouter>
       <Header/>
      <Switch>
        <Route path="/login">
          {this.state.isAuth ? (<Redirect to="/dashboard" />
          ) : (
            <LoginPage  onAuthSucces={this.onAuthSucces}/>
          )}
        </Route>
        <Route path="/dashboard">
          {this.state.isAuth ? <App/> : <Redirect to="/login" />}
        </Route>
        <Route path="/config">
        {this.state.isAuth ? <App /> : <Redirect to="/login" />}
            <UserPage />
          </Route>
        <div>Страница не найдена. Вернуться на главную.</div>

        <Route path="/task/:id">
        <Tasks/>
    </Route>
      </Switch>
    </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithAuth />, rootElement);

