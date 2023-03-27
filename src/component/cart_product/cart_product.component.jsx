import { useContext } from 'react';
import { ModalContexts } from '../../contexts/modal_contexts/modal_contexts';
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts';
import Button from '../button/button.component';

import './cart_product.style.scss';



const CartProduct = ({product, steps}) => {

    const {name, price, image, quantity} = product

    const {increment, decrement, deleteItem} = useContext(CartContexts)

    const {openModal, setOpenModal} = useContext(ModalContexts)

    const modalDisplay = () => setOpenModal(true)


    console.log(openModal)
 


    const increaseQuantity = () => increment(product)
    const decreaseQuantity = () => decrement(product)
    const deleteItems = () => deleteItem(product)
    
    return(
        <div className="cart_product">
            
            <div className="cart_product_details">
                <div className="cart_product_details_img">
                    <img src={image} alt={name}/>
                </div>
                <div className="cart_product_details_title">
                    <h3>{name}</h3>
                    <h4>Price: #{price}</h4>
                    <h4>Brand:{name}</h4>
                
                </div>
            </div>
            <div className="cart_product_quantites">
                <div>
                <h3>Quantity</h3> 
                {
                    steps === 4 ? <span> {quantity}</span> : null
                }
                </div>
                
                {
                    steps === 1 ?
                    
                        <Button buttontype='increaseCartBtn'>
                            <span>
                                {quantity}
                            </span>
                            <span>
                                <i className='bx bx-up-arrow-alt' onClick={increaseQuantity}></i>
                                <i className='bx bx-down-arrow-alt' onClick={decreaseQuantity}></i>
                            </span>
               
               
                        </Button>
                      
                 
                    : null
                    
                }
                <div>
                {
                    steps === 1 ? 
                    <div>
                    <i className='bx bx-x-circle' onClick={deleteItems}></i>
                    <span>Remove</span>
                    </div>
                    :
                    <div>
                        <i className='bx bx-edit' onClick={modalDisplay}></i>
                        <span>Edit</span>
                    </div>
                }
                
                </div>
              
               
            </div>
            
      
        </div>

    )
}       


export default CartProduct