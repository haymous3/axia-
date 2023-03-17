import { useState } from "react";
import Button from "../button/button.component";
import './cart_order_summary_one.style.scss';





const CartOrderSummaryOne = () => {

    const [open, setOpen] = useState(false)


    const openAndClose = () => setOpen(!open)

    return(
        <div className="order_summary_one">
           <div className="order_summary_one_title">
                <h4>Subtotal</h4>
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
                        <Button>Apply promo Code</Button>

                    </div> :
                null
                }
                 
           </div>
        </div>
    )
}

export default CartOrderSummaryOne; 