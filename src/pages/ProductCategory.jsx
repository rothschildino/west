import React from 'react'

const ProductCategory = ({itemsCategory}) => {

  return (


    <>
      { itemsCategory && itemsCategory.map((el) => (

        <h1 key={el.id}>{el.name}</h1>
      ))}
    </>
  )
}

export default ProductCategory