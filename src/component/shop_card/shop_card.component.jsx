import PageTitle from "../page_title/page_title.component";
import Modal from "../Modal/modal.component";
import UsersNavigation from "../users_navigation/users_navigation.component"
import NavPagesDisplay from "../nav_pages_display/nav_pages_display.component"
import './shop_card.style.scss'

const ShopCard = () => {


    return(
        <div className="shopCard">
            <Modal/>
            <UsersNavigation/> 
            <div className="shopCard_display">
                <PageTitle/>
                <NavPagesDisplay/>
            </div>
            
                   
        </div>
    )
}


export default ShopCard