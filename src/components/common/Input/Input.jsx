import css from './style.module.css'

export const Input = ({value, onChange, errorMesage}) => {

    return (
        <div>
            <input  errorMessage = {errorMesage} value = {value} onChange = {onChange} className={css.input} />
        </div>
    )
}