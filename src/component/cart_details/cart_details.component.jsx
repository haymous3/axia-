import { useState } from 'react'
import './cart_details.style.scss'

const CartDetails = ({details}) => {

    const [lga, setLga] = useState([])


    const selectedValue = (event) => {

        setLga(event.target.value)

    }

    
    return(
        
        <div className='cart_details'>

      

           
        
        {
            details.type === 'text' ? 
            <div className='cart_details_input'>
                <label>{details.label}</label>
                <input type='text'/>
            </div>
            
    
            : 
            
            details.type === 'number' ?

            <div className='cart_details_input'>
                <label>{details.label}</label>
                <input type='number'/>
            
            </div>

            : 

            details.type === 'email' ?

            <div className='cart_details_input'>

                <label>{details.label}</label>
                <input type='email'/>
            
            </div>

            : 

            details.type === 'select' ? 

            <div className='cart_details_input'>
            
                <label>{details.label}</label>
                <select>
                {
                    details.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)
                }
                </select>
            
            </div>

            :

            details.type === 'selects' ? 

            <div className='cart_details_input select'>
                <label>{details.label}</label><br/>
                <select onChange={selectedValue}>

                  {
                    details.options.map((opt) => <option key={opt.state}  value={opt.state}>{opt.state || opt}</option>) 

                  }
                    
                
                </select>
                <select>
                {
                
                    details.options.map((opt) => lga === opt.state ? opt.lga.map((hey) => <option key={hey} value={hey}>{hey}</option> ) : null)
                    
                    }

                </select>
                
            
            </div>

            : 
            null
        }
   
        </div> 
      
        

            
    )
}




export default CartDetails