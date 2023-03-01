// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bro from '../../asset/bro.png'
import Button from '../button/button.component'
// import Loader from '../Loader/loader.component'
import { googleAuthentication } from '../../firebase/firebase'

import './sign_up&sign_in.style.scss'



const SignUpSignIn = () => {

    // const[isLoading, setIsLoading] = useState(true)

    // useEffect(() => {

    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 2500);

    // })


    // const googleAuth = () => {
    //     isLoading ? <Loader/> : googleAuthentication()
    // }

    const Navigate = useNavigate()


    const googleAuthenticationAndNavigate = async() => {

       await googleAuthentication()

        Navigate('/shop/home')
    }


    return(
        <div className='registration_page'>
  
            <div className='registration_img'>
                <div className='registration_opacity_bg'></div>
                <img src={`${bro}`} alt="bro_with_cart"/>
            </div>
            <div className='registration_text'>
                <h2>A Smooth Shopping Experience</h2>
                <p>Get all the stuff you need in one place. Shop Here is there for you</p>
            </div>
            <div className='registration_btns'> 
          
                <Button buttontype='signupwithgoogle' eventFunction={googleAuthenticationAndNavigate}>Sign Up With google</Button>
                <Button buttontype='signin'>Sign Up With google</Button>
            </div>
            
        </div>
    )
}


export default SignUpSignIn;