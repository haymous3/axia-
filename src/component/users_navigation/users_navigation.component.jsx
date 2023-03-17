import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContexts } from '../../contexts/cart_contexts/cart_contexts'
import './users_navigation.style.scss'

const UsersNavigation = () => {

    const [subLinks, setSubLinks] = useState(false)

   const {cartItemQuantity} = useContext(CartContexts)

//    console.log(cartItemQuantity)

    const displaySubLinks = () => {
        setSubLinks(!subLinks)
       

    }
   
    return(

        <div className='user_links'>
            <div className='user_links_desktop'>
                <h4>Logo</h4>
                <Link to='home'>Home</Link>
                <Link to='discount'>Discount</Link>
                <Link to='mycart'>My Cart 

                {
                   cartItemQuantity ? <span>{cartItemQuantity}</span> : null
                }
                 
                </Link>
                <Link to='notification'>Notification</Link>
                <Link onClick={displaySubLinks} to="services">Customer Service</Link>
                {
                    subLinks ? <Link to='bot'  >Bot</Link> : null
                }
                {
                    subLinks ? <Link>Human</Link> : null
                }
                <Link to='cart'>Settings</Link>
                <Link to='cart'>Log out</Link>
            </div>
            <div className='user_links_mobile'>
                <div className='user_links_mobile_home'>
                    <i class='bx bx-home'></i>
                    <Link to='home'>Home</Link>
                </div>
                <div className='user_links_mobile_cart'>
                    <i class='bx bx-cart' ></i>
                    <Link to='mycart'>Cart
                        <span>
                            {cartItemQuantity}
                        </span> 
                    
                    </Link>
                </div>
                <div className='user_links_mobile_help'>
                    <i class='bx bx-message' ></i>
                    <Link to='services'>Help</Link>
                </div>
                <div className='user_links_mobile_profile'>
                    <i class='bx bx-cog' ></i>
                    <Link to='cart'>Profile</Link>
                </div>
                
                
                
                
            </div>
           
        
        </div>
        
        
    )
}

export default UsersNavigation