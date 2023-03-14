import { useContext, useState } from 'react';
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts';
import CartProgressBar from '../progressbar/progressbar.component';
import CartMultistepProcess from '../cart_multistep_process/cart_multistep_process.component';
import Button from '../button/button.component';
import './my_carts.style.scss'


const MyCart = () => {

    const [index, setIndex] = useState(1)

    const {cartItem} = useContext(CartContexts)

    console.log(cartItem)

    const nextBtn = () => {
        if(index < 4){
            setIndex(nextbutton => nextbutton + 1)
        }
    }

    const previousBtn = () => {
        if(index > 1){
            setIndex(previousButton => previousButton + 1)
        }
    }

  

   



    return(
        <div className='cart'>
           <div className='cart_progress'>
               
                <CartProgressBar steps={index}/>
           </div>

           <CartMultistepProcess/>
           
            <div className='cart_btns'>

                {
                    (index === 2) ?
                        <div>
                            <Button eventFunction={previousBtn}></Button>
                            <Button eventFunction={nextBtn}></Button>
                        </div>
                        
                    : (index === 3) ? 
                        <div>
                        <Button eventFunction={previousBtn}></Button>
                        <Button eventFunction={nextBtn}></Button>
                        </div>

                    :null

                    
                }

            
            </div>
        
        </div>
    )
}

export default MyCart