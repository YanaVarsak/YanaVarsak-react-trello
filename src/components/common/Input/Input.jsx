import css from './style.module.css'

export const Input = ({value, onChange, name, type}) => {

    return (
        <div>
            <input type={type}  name={name} value = {value} onChange = {onChange} className={css.input} />
        </div>
    )
}