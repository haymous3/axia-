

import CartProduct from "../cart_product/cart_product.component";
import CartDetails from "../cart_details/cart_details.component";
import CartPayment from "../cart_payment/cart_payment.component";

import Button from "../button/button.component";
import './cart_multistep_process.style.scss';


const CartProcesses  = ({steps, processes, nextBtn, previousBtn}) => {

    return(
        <div className="cartprocesses">

            {
                steps === 2 ? 
                <div className="cartprocesses_title">
                    <h3>Shipping Details</h3> 
                </div>
                   
                : null
            }
            {processes[steps - 1].hasOwnProperty('processDetailsOne') ? processes[steps - 1].processDetailsOne.map((product) => <CartProduct key={product.process} steps={steps} product={product}/>): 
            processes[steps - 1].hasOwnProperty('processDetailsTwo') ? processes[steps-1].processDetailsTwo.map((details) => <CartDetails key={details.process} details={details}/>): 
            processes[steps - 1].hasOwnProperty('processDetailsThree') ?  <CartPayment/>:
             
            null 
        
             }
            <div className='cartprocesses_btns'>

                {
                    steps === 1 ? null :
                    <div className='cartprocesses_btns_btns'>
                    <Button eventFunction={previousBtn} buttontype=''>BACT TO {steps === 2 ? 'YOUR CART' : steps === 3 ? 'YOUR DETAILS' : steps === 4 ? 'MAKE PAYMENT' : null}</Button>
                    <Button eventFunction={nextBtn} buttontype='checkout'>PROCEED TO {steps === 2 ? 'YOUR PAYMENT' : steps === 3 ? 'MAKE REVIEW' : steps === 4 ? 'ORDER' : null}</Button>
                    </div>

                }
                
            </div>
              
          
        
        </div>
    )
}


export default CartProcesses