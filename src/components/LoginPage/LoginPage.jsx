import React from "react"
import css from './style.module.css'
import { Button } from "../common/Button";
import { Input } from '../common/Input'



export class LoginPage extends React.Component {
state = {
        values: { login: '', password: ''},
        errors: { login: ' Неверный логин', password: 'Неверный пароль'},
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
        if (this.state.values.login === '111' && this.state.values.password === '111'){
            this.props.onAuthSucces()
         } else if (this.state.values.login !=='111' && this.state.values.password !== '111') {
         alert('Неверный логин и пароль') 
         } else if (this.state.values.password !=='111'){
            alert('Неверный пароль')
        } else if ( this.state.values.login !=='111'){
            alert('Неверный логин')
        }
    }
 
    render() {

        return (
            <div className={css.wrapper}>
            <form >
              <div>
                  <h3 className={css.login} > Логин:</h3>
                   <Input placeholder="Сюда вводить логин" type="text" name="login" onChange={this.handler}/></div>
                   <div className={css.wrongLogin}>Неверный логин</div>
              <div>   
              <h3 className={css.login} > Пароль:</h3>
              <Input placeholder=" Сюда вводить пароль" type="password" name="password" onChange={this.handler}/></div>
              <div className={css.wrongPass}>Неверный пароль</div>
              <Button  click={this.onClick} className={css.btn} type="button"   title="Войти"/>
            </form>
            </div>
          );
        }
 }
    

 