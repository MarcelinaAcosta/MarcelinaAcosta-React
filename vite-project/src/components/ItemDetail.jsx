const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail">
      <img src={product.img} alt={product.title} className="imgCard"/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetail;



