import css from './modal.module.css'
 export const Modal = ({isVisible, onClose, children}) => {

     if (!isVisible){
         return null
     }
    return (
           <div>
               <div className={css.wrapper}>
                   <div className={css.modal}>
               <div className={css.buttonClose } onClick={onClose}>x</div>
               {children}
               </div>
               </div>
            </div> 
    )
    
}


