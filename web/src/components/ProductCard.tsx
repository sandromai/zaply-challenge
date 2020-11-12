import React from 'react';

import { Container } from '../styles/components/product-card';

const ProductCard: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default ProductCard;
