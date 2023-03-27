import { useContext } from 'react';
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts';
import './cart_payment.style.scss';


const CartPayment = () => {

     const {overallAmount} = useContext(CartContexts)
    return(
        <div className='cart_payment'>
           <div className='cart_payment_account'>
                <h4>Account Balance</h4>
                <h4>0</h4>
           </div>
           <div className='cart_payment_bought'>
                <h4>About to Pay</h4>
                <h4>{overallAmount}</h4>
           </div>
           <div className='cart_payment_balance'>
                <h4>Remaining Balance</h4>
                <h4>0</h4>
           </div>
        
        </div>
    )
}

export default CartPayment