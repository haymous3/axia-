import { useParams } from "react-router-dom"
import Categories from "../categories/categories.component"
import SignUpAndSignInPage from "../../routes/Sign_Up&Sign_In_Page/Sign_Up&Sign_In.component";
import Services from "../services/services.component";
import ChatDirectories from "../chat_directories/chat_directories.component";
import EachCategories from "../each_categories/each_categories.component";

const NavPagesDisplay = () => {

    const {navPagesDisplay} = useParams()
    // const {} = useParams()

    // console.log(botAndHuman)
    console.log(navPagesDisplay)

    return(
        <div>

            {
                navPagesDisplay === 'home' ? <Categories/> :
                 navPagesDisplay === 'cart' ? <SignUpAndSignInPage/> : 
                 navPagesDisplay === 'services' ? <Services/>:
                 navPagesDisplay === 'bot' ? <ChatDirectories chatTypes={navPagesDisplay}/>:
                 navPagesDisplay  ? <EachCategories/> : null
                 
                

            }
        
        </div>
    )
}

export default NavPagesDisplay