import { Link } from "react-router-dom";

const Item = ({product}) => {
  return (
    <div className="containerCardItem">
      <img src={product.img} alt={product.title} className="imgCard"/>
    <h2>{product.title}</h2>
    <h3>{product.price}</h3>
    
    <Link to={`/item/${product.id}`}  >Ver mas</Link>
    </div>

  )
};

export default Item;
