
import css from './style.module.css'

export function Button({ click,title,type }) {
    return (
      <button onClick = {click} className={css.button} type ={type}>
        {title}
      </button>
    );
  }

