import {Routes, Route} from 'react-router-dom'
import HomePage from './routes/Home_Page/Home_Page.componet';
import SignUpAndSignInPage from './routes/Sign_Up&Sign_In_Page/Sign_Up&Sign_In.component';
import ShoppingPage from './routes/Shopping_Page/Shopping_Page.component';
// import ShopCard from './component/shop_card/shop_card.component';

const App = () =>  {
  return (
    <Routes>

      <Route path='/' element={<HomePage/>}>
        
      </Route>
      <Route path='register' element={<SignUpAndSignInPage/>}/> 
      <Route path='shop/*' element={<ShoppingPage/>}/>
      
      
      
    
    </Routes>
  );
}

export default App;

