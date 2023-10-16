import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; // Asegúrate de importar ItemDetail o el componente que utilices para mostrar los detalles del producto

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductById = async (productId) => {
      try {
        const response = await fetch('/src/data/Products.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const selectedProduct = data.find((product) => product.id === Number(productId));
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    getProductById(id);
  }, [id]);

  return (
    <div id='ItemDetailContainer'>
      
      {product ? (
        <ItemDetail product={product} /> // Renderiza el componente ItemDetail con los detalles del producto
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;





