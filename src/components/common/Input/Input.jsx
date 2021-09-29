import css from './style.module.css'

export const Input = ({value, onChange}) => {
    return (
        <p>
            <input value = {value} onChange = {onChange} placeholder='Ввведите таску' className={css.input} />
        </p>
    )
}