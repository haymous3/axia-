import { useContext } from 'react';
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts';
import Button from '../button/button.component';
import './cart_product.style.scss';



const CartProduct = ({product}) => {

    const {name, price, image, quantity} = product

    const {increment, decrement, deleteItem} = useContext(CartContexts)


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
                <h3>Quantity</h3>
                <Button buttontype='increaseCartBtn'>
                    <span>
                        {quantity}
                    </span>
                    <span>
                        <i className='bx bx-up-arrow-alt' onClick={increaseQuantity}></i>
                        <i className='bx bx-down-arrow-alt' onClick={decreaseQuantity}></i>
                    </span>
               
               
                </Button>
                <div>
                <i class='bx bx-x-circle' onClick={deleteItems}></i>
                 <span>Remove</span>
                </div>
               
            </div>
            
      
        </div>

    )
}       


export default CartProduct