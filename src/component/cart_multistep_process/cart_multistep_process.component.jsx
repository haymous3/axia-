

import CartProduct from "../cart_product/cart_product.component"
import './cart_multistep_process.style.scss';


const CartProcesses  = ({steps, processes}) => {

    return(
        <div className="cartprocesses">
          {processes[steps - 1].hasOwnProperty('processDetailsOne') ? processes[steps - 1].processDetailsOne.map((product) => <CartProduct key={product.id} product={product}/>): null}
        
        </div>
    )
}


export default CartProcesses