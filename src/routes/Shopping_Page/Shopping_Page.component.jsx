import {Routes, Route} from 'react-router-dom';
// import EachCategories from '../../component/each_categories/each_categories.component'
import CategoriesPages from '../categories_page/categories_page.component';
import NavPagesDisplay from '../../component/nav_pages_display/nav_pages_display.component';
import ShopCard from '../../component/shop_card/shop_card.component';
import ServicesPage from '../services_page/services_page.component';


const ShoppingPage = () => {
  // <Route path=':navPagesDisplay/*' element={<CategoriesPages/>}/>

    return(
      <Routes>
      
       
        <Route path='/'  element={<ShopCard/>}>
        <Route path=':navPagesDisplay/*' index element={<NavPagesDisplay/>}/>
        
        </Route>
        
      </Routes>
    )
}

export default ShoppingPage