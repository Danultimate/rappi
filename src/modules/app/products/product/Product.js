import React from 'react';
import './Product.css';

const Product = ({
  quantity,
  price,
  name,
  available
}) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <td>{available ? null : 'NA'}</td>
  </tr>
)

export default Product;