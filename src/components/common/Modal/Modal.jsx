import css from './modal.module.css'
 export const Modal = ({isVisible, onClose, children}) => {

     if (!isVisible){
         return null
     }
    return (
           <div>
               <div className={css.wrapper}>
                   <div className={css.modal}> {children}
               <div className={css.buttonClose } onClick={onClose}>x</div>
               </div>
               </div>
            </div> 
    )
    
}


