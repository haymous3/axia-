import { useContext, Fragment } from "react";
import { ModalContexts } from "../../contexts/modal_contexts/modal_contexts";
import './modal.style.scss'


const Modal = () => {

    const {openModal, setOpenModal} = useContext(ModalContexts)

    const closeModal = () => setOpenModal(false)

    return(
        <Fragment>
        {
            openModal ? 
            <div>
                <div className="modal">
                   
            
                </div>
                <div className="modal_block">
                    <div className="modal_block_container">
                        <i className='bx bx-x' onClick={closeModal}></i>
                        <h3>Hi modal</h3>
                    </div>
                </div>
                
            
            </div>
          
            
            : null
        }
        
        </Fragment>
       
       
    )
}

export default Modal