import { useContext } from "react";
import { CartContexts } from "../../contexts/cart_contexts/cart_contexts";


const Alert = () => {

    const {cartItem} = useContext(CartContexts)

    console.log(cartItem)

    return(
        <div className="alert">

          {
            cartItem.map((name) => <h5>{name.name}</h5>)
          }
                

           
           

        
        </div>
    )
}



export default Alert;