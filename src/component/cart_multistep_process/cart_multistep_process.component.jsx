

import CartProduct from "../cart_product/cart_product.component"
import CartDetails from "../cart_details/cart_details.component";
import './cart_multistep_process.style.scss';


const CartProcesses  = ({steps, processes}) => {

    return(
        <div className="cartprocesses">

            {
                steps === 2 ? 
                <div style={{
                    width:'100%'
                }}>
                <h3>Shipping Details</h3> 
                </div>
                
                : null
            }<br/>
            {processes[steps - 1].hasOwnProperty('processDetailsOne') ? processes[steps - 1].processDetailsOne.map((product) => <CartProduct key={product.process_one} product={product}/>): 
            processes[steps - 1].hasOwnProperty('processDetailsTwo') ? processes[steps-1].processDetailsTwo.map((details) => <CartDetails key={details.label} details={details}/>): 
            
            
            null 
        
        }
        
        </div>
    )
}


export default CartProcesses