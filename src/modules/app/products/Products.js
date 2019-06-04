import React from 'react';
import Product from './product/Product';
import { formatPrice } from '../utils/numbers';

const filterProducts = (products, filters) => {
  const {
    sublevels,
    available,
    minPrice,
    maxPrice,
    minStock,
    maxStock
  } = filters;

  return products.filter(product => {
    return (!sublevels.length || sublevels.includes(product.sublevel_id))
      && (!available || product.available === available)
      && (!minPrice || formatPrice(product.price) >= minPrice)
      && (!maxPrice || formatPrice(product.price) <= maxPrice)
      && (!minStock || product.quantity >= minStock)
      && (!maxStock || product.quantity <= minStock)
  });
}

// Just by ascending order, for example purpose
const orderProducts = (products, priority) => {
  priority.map(criteria => products.sort((a, b) => {
    if (criteria === 'price') {
      return formatPrice(a[criteria]) - formatPrice(b[criteria])
    }
    return a[criteria] - b[criteria]
  }));
  return products;
}

const hasOrder = (criteria, priority) => {
  return priority.includes(criteria) ? '*' : null;
}

const Products = ({ products, filters, priority, handleChange }) => {
  const filteredProducts = filterProducts(products, filters);
  const orderedFilteredProducts = orderProducts(filteredProducts, priority);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col" onClick={() => handleChange('price')}>
            Price {hasOrder('price', priority)}
          </th>
          <th scope="col" onClick={() => handleChange('quantity')}>
            Quantity {hasOrder('quantity', priority)}
          </th>
          <th scope="col" onClick={() => handleChange('available')}>
            NA {hasOrder('available', priority)}
          </th>
        </tr>
      </thead>
      <tbody>
        {orderedFilteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </tbody>
    </table>
  )
};

export default Products;