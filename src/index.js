import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from './contexts/cart_contexts/cart_contexts';
import { CartMultistepProcessContextsProvider } from './contexts/cart_multistep_process_contexts/cart_multistep_process_contexts';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <CartMultistepProcessContextsProvider>
            <App />
        </CartMultistepProcessContextsProvider>
        
      </CartProvider>
      
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
