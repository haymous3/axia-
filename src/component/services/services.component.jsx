
import { Link, useParams } from 'react-router-dom';
import ChatDirectories from '../chat_directories/chat_directories.component';
import Button from '../button/button.component';
import  customers from '../../asset/b.png';
import bot from '../../asset/a.png';
import './services.style.scss';
const Services = ({chatTypes}) => {
   
    const {navPagesDisplay} = useParams()


    
    console.log(navPagesDisplay)

    return(
        <div className='services'>
            <div className='services_nav'>
                    <div className='services_nav_desktop'>
                        <Link to='bot'>Chat With Bot</Link>
                        <Link>Call Human Recipient</Link>      
                    </div>
                    <div className='services_nav_mobile'>
                        <h3>Select the kind of service you prefer</h3>
                        <div className='services_nav_mobile_bot'>
                            <div className='services_nav_mobile_bot_image' style={{
                                backgroundImage:`url(${bot})` 
                            }}>
                                <div className='services_nav_mobile_bot_image_layer'></div>
                               
                                <div className='services_nav_mobile_bot_image_text'>
                                    <h3>Chat with Bot</h3>
                                    <p>You can ask several question, lodge complaints, find product e.t.c</p>
                                </div>
                                
                            </div>

                            <Button buttontype='chatwithbot'>Chat with Bot</Button>
                        </div>
                        <div className='services_nav_mobile_customer'>
                            <div className='services_nav_mobile_customer_image' style={{
                                backgroundImage: `url(${customers})`
                            }}>
                                <div className='services_nav_mobile_customer_image_layer'></div>
                                <div className='services_nav_mobile_customer_image_text'>

                                    <h3>Call Customer Service</h3>
                                    <p>Place a call directly to a customer service representative to lodge complains</p>

                                </div>
                            </div>


                            <Button buttontype='customerservice'>Dial Customer Service</Button>
                        </div>
                    
                    </div>
            
            </div>
            <ChatDirectories chatTypes={bot}/>
        </div>
    )
}

export default Services