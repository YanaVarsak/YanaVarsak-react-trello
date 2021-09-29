import css from './style.module.css'

export const Card = ({title, items}) => {
    console.log(items)
    return (
        <div className = {css.card}>
            <h2> {title} </h2>
           {/* <ul> {items.map}</ul>  */}
           
        </div>
        
    )
    
}
