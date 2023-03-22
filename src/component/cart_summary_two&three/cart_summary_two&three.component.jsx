
import './cart_summary_two&three.style.scss'
const CartSummaryTwoAndThree = ({product}) => {

    const {name, quantity, image, price} = product

    return(

        <div className="cart_summary_two_three">
            <div className="cart_summary_two_three_img">

                <img src={image} alt={name}/>
            
            </div>
            <div className="cart_summary_two_three_details">
                <p>{name}</p>
                <div>
                    <p>{quantity} x</p>
                    <p># {price}</p>
                </div>
              
            </div>
            
        
        </div>
    )
}


export default CartSummaryTwoAndThree