import { Card } from "../common/Card";
import {Header } from "./common/Header"
import React from "react"


export const STATUSES = {
    todo: 'todo',
    inProgress: 'inProgress',
    done: 'done',
}
export class Dashboard extends React.Component {
    state = { 
    value: "",
    isEdit: true,
    status: [
      { id: "1", text: "Create modal" },
      { id: "2", text: "Create input"},
    ],
    inProgress: [
      { id: "3", text: "Create button"},
      { id: "4", text: "Create header"},

    ], 
    done: [
      { id: "5", text: "Create button"},
      { id: "6", text: "Create modal "},
    ]};
      render() {
          return(
            <div>
            <Header> 
            {Object.keys(STATUSES).map((status) => <Card title={status} items={this.state.tasks.filter((task) => task.satatus === status)} />)}
            </Header>
        </div>
          )

      }
    }
    
    