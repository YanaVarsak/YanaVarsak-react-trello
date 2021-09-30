import { Card } from "../common/Card";
import { Button } from "../common/Button";
import { Input } from '../common/Input'
import React from "react"
import css from './style.modal.css'

export class Dashboard extends React.Component {
    state = {
      value: "",
      isEdit: true,
      tasks: [
        { text: "Create modal", id: 1 },
        { text: "Create dashboard", id: 2 }
      ]
    };

 buttonAddClick = () =>{
    this.setState((prev)=>({
    tasks:[
        ...prev.tasks,
        {text: prev.value, id: prev.tasks.length + 1}
    ],
    value:""
}))

 }
    render() {
      return (
        <div className={css.wrapper}>
          <Card
            title="To do"
            footer = {
              <div>
                <Input value = {this.state.value} onChange={(event) => this.setState({value:event.target.value})}/>
                <Button click = {this.buttonAddClick} title = "Добавить" />
                <Button  title = "Отмена" />
              </div>
                  }
                      >
                  <div className={css.cardDiv}>
                  <ul className={css.list}>
                      {this.state.tasks.map((item) => {
                        return(
                            <li className = {css.listItem}>{item.text}</li>
                        )})}
                  </ul>
              </div>
          </Card>
          <Card title="In progress" />
          <Card title="Done" />
        </div>
      );
    };
  };