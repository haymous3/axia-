// import React from "react";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './progressbar.style.scss'
 
const CartProgressBar = ({steps}) => {
 
    return (
        
        <ProgressBar
        percent={(steps - 1) * 100 / 3}
        filledBackground="linear-gradient(to right, #fafafa, #fff)"
      >
            <Step transition="scale">
            {({ accomplished, index}) => (
                <span className={`step ${accomplished ? 'completed' : ""}`}>
                1
                <p>Cart</p>
                </span>
           
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index }) => (
                <span className={`step ${accomplished ? 'completed' : ""}`}>
                    2
                    <p>Your Details</p>
                </span>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index }) => (
                <span className={`step ${accomplished ? 'completed' : ""}`}>
                    3
                    <p>Make Payment</p>
                </span>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index }) => (
                <span className={`step ${accomplished ? 'completed' : ""}`}>
                    4
                    <p>Review</p>
                </span>
            )}
            </Step>
      </ProgressBar>
    
 
    )
  
}


export default CartProgressBar