import { useContext } from 'react';
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts';
import './items_card.style.scss'
const ItemsCard = ({product}) => {
// console.log(product)
    const {addToCart} = useContext(CartContexts)

const addingToCart = () => addToCart(product)

   

    return(
        <div className='itemCard'>
        <div className='opacity'></div>
       
        <i className='bx bx-cart' onClick={addingToCart}></i>
            <img src={product.image} alt={product.name}/>
            <h5>{product.name}</h5>
           
            <span>{product.price}</span>
            
        </div>
    )

   
}

export default ItemsCard