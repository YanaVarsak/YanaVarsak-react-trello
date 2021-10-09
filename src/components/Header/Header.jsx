import React from "react"
import { Modal } from '../common/Modal';
import css from './style.module.css'



export class Header extends React.Component {
    state = {
      
      test: false,
      value: "",
      titles: [ 
      {text:'Очистить todo',id: 1, status: 'todo'},
      {text:'Очистить in progress', id: 2, status: 'inProgress'},
      {text:'Очистить done', id: 3, status: 'done'},
      {text:'Очистить всё', id: 4, status: 'todo'}
    ],
    
    };
  
    render() {
      return (
        <div className={css.headerWrapper}>
          <div className={css.headerLogo}> Trello </div>
          <div className={css.headerMenu}>
            <Modal isVisible={this.state.test}onClose={() => this.setState({ test: false })}>
              <ul className={css.headerMenuList} >
              {this.state.titles.map((item) => {
                        return(
                <li className = {css.headerMenuItem} key={item.id}> {item.text}  </li>)})}
              </ul>
            </Modal>
            <div className={css.headerMenuLogo} onClick={() => this.setState({ test: true })}>menu</div>
          </div>
        </div>
      );
    };
  };
