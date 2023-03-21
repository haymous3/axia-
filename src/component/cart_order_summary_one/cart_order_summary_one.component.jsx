
import { useState, useContext } from "react";
import { CartContexts } from "../../contexts/cart_contexts/cart_contexts";
import Button from "../button/button.component";
import './cart_order_summary_one.style.scss';





const CartOrderSummaryOne = ({nextBtn}) => {

    const [open, setOpen] = useState(false)
    const {totalAmount} = useContext(CartContexts)

    const openAndClose = () => setOpen(!open)


    return(
        <div className="order_summary_one">
           <div className="order_summary_one_title">
                <h4>Subtotal</h4>
                <h3> # {totalAmount}</h3>
           </div>
           <div className="order_summary_one_comment">
                <div>
                    <p>Note</p>
                    <p>Additional Comment</p>
                </div>
                <div>
                     <textarea></textarea>
                </div>
           </div>
           <div className="order_summary_one_promo">
                <div className="order_summary_one_promo_title">
                    <h4>Apply promo code</h4>
                    <div>
                        {
                            open === false ?  <i className='bx bx-down-arrow' onClick={openAndClose}></i> : <i className='bx bx-up-arrow' onClick={openAndClose}></i>
                        }
                       
                        
                        
                    </div>  
                </div>

                {
                    open ? 
                    <div className="order_summary_one_promo_code">

                        <input type='text'/>
                        
                        <Button buttontype='promoCode'>Apply promo Code</Button>

                    </div> :
                null
                }
                 
           </div>
           <div>
          
        <Button buttontype='checkout' eventFunction={nextBtn}>
        <i class='bx bx-wallet'></i>
        Proceed to Details
        </Button>
        
                
           </div>
        </div>
    )
}

export default CartOrderSummaryOne; 