
import css from './style.module.css'
import React from "react"
import { Modal } from '../common/Modal';


export class Header extends React.Component {
    state = {isMenuOpen: false}; 
    render() {
        return (
         <header className = {css.header}>
         <Modal isVisible = {this.state.isMenuOpen} onClose={() => this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }))}>
            <li className={css.headerMenu}>Очистить todo</li>
                <li  className={css.headerMenu}>Очистить in progress</li>
                <li  className={css.headerMenu}>Oчистить done</li>
                <li  className={css.headerMenu}>Очистить всё</li>
             </Modal>
             <div onClick={() => this.setState({ isMenuOpen: true })}>menu</div>
        </header>
       
        )
    }

}
