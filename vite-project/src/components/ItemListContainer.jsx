import React from 'react';

function ItemListContainer(props) {
  return (
    <div className="container-greeting">
      <p>{props.greeting}</p>
      {/* Otro contenido del ItemListContainer */}
    </div>
  );
}

export default ItemListContainer;