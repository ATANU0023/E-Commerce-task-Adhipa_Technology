import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHd from '../Components/ProductHd';
import ProductDetails from '../Components/ProductDetails';
import ProductDescription from '../Components/ProductDescription';
import RelatedProducts from '../Components/RelatedProducts';

function Products() {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProducts.find((e)=> e.id === Number(productId))

  if(!product){
    return <div>Product not found!</div>
  }

  return (
    <section className='p-12 py-28 sm:p-32 '>
      <div>
        <ProductHd product={product}/>
        <ProductDetails product={product}/>
        <ProductDescription/>
        <RelatedProducts/>
      </div>
    </section>
  )
}

export default Products
