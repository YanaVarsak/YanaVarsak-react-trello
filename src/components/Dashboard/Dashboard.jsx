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
        { text: "Create modal", id: 1, status: 'todo' },
        { text: "Create dashboard", id: 2, status: 'done' },
        { text: "Create dashboard", id: 3, status: 'in_process' }
    
      ],
    };
    toStartProcess = (id) => {
      this.setState((prev) =>({
        tasks: !prev.tasks.map((tasks) => tasks.id !==id ? tasks :{...tasks, status: "in_process"}  )
      }))
    }
    
    clearTasks = () => {
      this.setState({ tasks: [ ] });
    };

 buttonAddClick = () =>{
    this.setState((prev)=>({
    tasks:[
        ...prev.tasks,
        {text: prev.value, id: +(new Date())} 

    ],
    value:""
  }))

 
  



 }
    render() {
      return (
       
        <div className={css.wrapper}>

          {['todo', 'in_progress','done'].map((status)=>(


          <Card
         
          title={status}
          
          footer={<div>

            <Input value={this.state.value} onChange={(event) => this.setState({ value: event.target.value })} />
            <Button click={this.buttonAddClick} title="Добавить" />
            <Button click={this.clearTasks} title="Удалить" />
          </div>}>
          <div className={css.cardDiv}>
            <ul className={css.list}>
              
            {this.state.tasks.filter((tasks) => tasks.status === status)
                .map((item) => {
                
                return (
                  <li onClick={ ()=> this.toStartProcess(item.id)} className={css.listItem} key={item.id}>{item.text}</li>
                );
              })}
            </ul>
          </div>
        </Card>

          ))}
         
        </div>
      
      );
    };
};

  