import css from './style.module.css'

export const Card = ({title, children, footer }) => {
    return (
        <div className = {css.card}>
            <h2 className={css.card_title}> {title} </h2>
               {children}
           {footer}
        </div>
        
    )
    
}
