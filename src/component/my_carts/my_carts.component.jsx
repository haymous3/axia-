import { useContext, useState } from 'react';

import CartProgressBar from '../progressbar/progressbar.component';
import { CartMultistepProcessContexts } from '../../contexts/cart_multistep_process_contexts/cart_multistep_process_contexts';
import CartOrderSummary from '../cart_order_summary/cart_order_summary.component';
import CartProcesses from '../cart_multistep_process/cart_multistep_process.component';
import Button from '../button/button.component';
import './my_carts.style.scss'


const MyCart = () => {

    const [index, setIndex] = useState(1)

   
    const {cartProcess} = useContext(CartMultistepProcessContexts)
    

    console.log(cartProcess)

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
           <div className='cart_summaries'>
                <CartProcesses steps={index} processes={cartProcess}/>
                <CartOrderSummary steps={index}/>
           </div>
           
         
           
            <div className='cart_btns'>

               <Button eventFunction={previousBtn}>BACT TO {index === 2 ? 'YOUR CART' : index === 3 ? 'YOUR DETAILS' : index === 4 ? 'MAKE PAYMENT' : null}</Button>
               <Button eventFunction={nextBtn}>PROCEED TO {index === 2 ? 'YOUR DETAILS' : index === 3 ? 'MAKE PAYMENT' : index === 4 ? 'REVIEW CART' : null}</Button>

            
            </div>
            
        </div>
    )
}

export default MyCart