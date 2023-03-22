import { useContext } from "react"
import { CartContexts } from "../../contexts/cart_contexts/cart_contexts";
import CartSummaryTwoAndThree from "../cart_summary_two&three/cart_summary_two&three.component";
const CartOrderSummaryTwoAndThree = () => {

    const {cartItem} = useContext(CartContexts)


    return(
        <div>
            <h3 style={{
                color:'#373f50',
                textAlign:'center',
            }}>Order Summary</h3>
          {
            cartItem.map((item) => <CartSummaryTwoAndThree key={item.id} product={item}/>)
          }
        </div>
    )
}

export default CartOrderSummaryTwoAndThree
