import { useContext } from 'react';
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts';

import './my_carts.style.scss'


const MyCart = () => {

    const {cartItem} = useContext(CartContexts)

    console.log(cartItem)

    return(
        <div>
        
        </div>
    )
}

export default MyCart