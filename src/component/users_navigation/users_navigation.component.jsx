import { useState } from 'react'
import { Link } from 'react-router-dom'
import './users_navigation.style.scss'

const UsersNavigation = () => {

    const [subLinks, setSubLinks] = useState(false)

    // const navigate = useNavigate();

    // const goToService = () => {
    //     navigate('shop/services')
    // }


    const displaySubLinks = () => {
        setSubLinks(!subLinks)
        // goToService()

    }
   
    return(

        <div className='user_links'>
            <div className='user_links_desktop'>
                <h4>Logo</h4>
                <Link to='home'>Home</Link>
                <Link to='cart'>Discount</Link>
                <Link to='cart'>My Cart</Link>
                <Link to='cart'>Notification</Link>
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
                    <Link to='cart'>Cart</Link>
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