
import css from './style.module.css'

export function Button({ title }) {
    return (
      <button onClick className={css.button}>
        {title}
      </button>
    );
  }

