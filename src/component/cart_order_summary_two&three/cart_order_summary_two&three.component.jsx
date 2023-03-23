import { useContext } from "react"
import { CartContexts } from "../../contexts/cart_contexts/cart_contexts";
import CartSummaryTwoAndThree from "../cart_summary_two&three/cart_summary_two&three.component";
import Button from "../button/button.component";


import './cart_order_summary_two&three.style.scss'
const CartOrderSummaryTwoAndThree = () => {

    const {cartItem, totalAmount, taxes, overallAmount} = useContext(CartContexts)


    return(
        <div className="cart_order_summary_two_three">
            <h3 style={{
                color:'#373f50',
                textAlign:'center',
            }}>Order Summary</h3>
            {
                cartItem.map((item) => <CartSummaryTwoAndThree key={item.id} product={item}/>)
            }

            <div className="cart_order_summary_two_three_summary">
                <div className="cart_order_summary_two_three_summary_details">
                    <h5>Subtotal:</h5>
                    <h5>{totalAmount}</h5>
                </div>
                <div className="cart_order_summary_two_three_summary_details">
                    <h5>Shipping:</h5>
                    <h5>---</h5>
                </div>
                <div className="cart_order_summary_two_three_summary_details">
                    <h5>Taxes:</h5>
                    <h5>{taxes}</h5>
                </div>
                <div className="cart_order_summary_two_three_summary_details">
                    <h5>Discount:</h5>
                    <h5>---</h5>
                </div>
            </div>
            <div className="cart_order_summary_two_three_overall">
                <h3>{overallAmount}</h3>
            </div>
            <div className="cart_order_summary_two_three_promo">
                <input type='text' placeholder="Promo Code"/>
                <Button buttontype='promoCode'>Apply Promo Code</Button>
            </div>
        </div>
    )
}

export default CartOrderSummaryTwoAndThree
