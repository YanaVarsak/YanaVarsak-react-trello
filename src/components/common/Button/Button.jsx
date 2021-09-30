
import css from './style.module.css'

export function Button({ click,title }) {
    return (
      <button onClick = {click} className={css.button}>
        {title}
      </button>
    );
  }

