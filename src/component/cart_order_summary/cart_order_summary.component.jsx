
import CartOrderSummaryFour from '../cart_order_summary_four/cart_order_summary_four.component';
import CartOrderSummaryOne from '../cart_order_summary_one/cart_order_summary_one.component';
import CartOrderSummaryTwoAndThree from '../cart_order_summary_two&three/cart_order_summary_two&three.component';

import './cart_order_summary.style.scss'
const CartOrderSummary = ({steps, nextBtn}) => {

    return(
        <div className='cart_order_summary'>
            {
                steps === 1 ? <CartOrderSummaryOne steps={steps} nextBtn={nextBtn}/> : steps <= 3   ? <CartOrderSummaryTwoAndThree /> : steps === 4 ? <CartOrderSummaryFour/>: null
            }        
        </div>
    )
}

export default CartOrderSummary