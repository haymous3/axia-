import { useContext, useState } from 'react';
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts';
import CartProgressBar from '../progressbar/progressbar.component';
import CartMultistepProcess from '../cart_multistep_process/cart_multistep_process.component';
import Button from '../button/button.component';
import './my_carts.style.scss'


const MyCart = () => {

    const [index, setIndex] = useState(2)

    const {cartItem} = useContext(CartContexts)

    console.log(cartItem)

    const nextBtn = () => {
        if(index < 4){
            setIndex(nextbutton => nextbutton + 1)
        }
    }

    const previousBtn = () => {
        if(index > 1){
            setIndex(previousButton => previousButton - 1)
        }
    }

  

   



    return(
        <div className='cart'>
           <div className='cart_progress'>
                <h3>{index === 1 ? 'My Cart' : index === 2 ? 'My Details' : index === 3 ? 'Make Payment' : index === 4 ? 'Review your Cart' : null}</h3>
                <CartProgressBar steps={index}/>
           </div>

           <CartMultistepProcess steps={index}/>
           
            <div className='cart_btns'>

               <Button eventFunction={previousBtn}>BACT TO {index === 2 ? 'YOUR CART' : index === 3 ? 'YOUR DETAILS' : index === 4 ? 'MAKE PAYMENT' : null}</Button>
               <Button eventFunction={nextBtn}>PROCEED TO {index === 2 ? 'YOUR DETAILS' : index === 3 ? 'MAKE PAYMENT' : index === 4 ? 'REVIEW CART' : null}</Button>

            
            </div>
        
        </div>
    )
}

export default MyCart