import React from "react"
import css from './style.module.css'
import { Button } from "../common/Button";
import { Input } from '../common/Input'



export class LoginPage extends React.Component {
state = {
        values: { login: '111', password: '111'},
        errors: { login: '', password: ''},
        loginValid: true,
        passwordValid: true,
     }

     handler = ({ target }) => {
        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [target.name]: target.value,
            }
        }));
    }
    onClick = () => {
        if (this.state.values.login === this.state.errors.login && 
         this.state.values.password === this.state.errors.password){
            alert('Успех')
         } else if (this.state.values.login !== this.state.errors.login) {
             this.setState({loginValid: false})
         } else if (this.state.values.password !== this.state.errors.password) {
             this.setState({passwordValid: false})
         }
    }
 errorMessage =() => {
    if (this.props.description.name.trim() === ""){
        alert('Ghhkk')
    }
 }
    render() {

        return (
            <div className={css.wrapper}>
            <form onSubmit={this.onSubmit}>
              <div>
                  <h3 className={css.login} > Логин:</h3>
                   <Input placeholder="Сюда вводить логин" type="text" name="login" onChange={this.handler}/></div>
              <div>   
              <h3 className={css.login} > Пароль:</h3>
              <Input placeholder=" Сюда вводить пароль" type="password" name="password" onChange={this.handler}/></div>
              <Button className={css.btn} type="submit"   title="Войти"/>
            </form>
            </div>
          );
        }
 }
    

 