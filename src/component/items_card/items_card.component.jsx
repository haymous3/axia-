
import './items_card.style.scss'
const ItemsCard = ({product}) => {

    // console.log(product)

    return(
        <div className='itemCard'>
        <div className='opacity'></div>
        <i class='bx bx-cart'></i>
            <img src={product.image} alt={product.name}/>
            <h5>{product.name}</h5>
           
            <span>{product.price}</span>
        
        </div>
    )

   
}

export default ItemsCard