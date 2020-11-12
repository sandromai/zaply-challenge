import React from 'react';

import { Container } from '../styles/components/product-card';

const ProductCard: React.FC<{editable: boolean}> = ({ children, editable }) => (
  <Container className={editable ? 'editable' : ''}>
    {children}
  </Container>
);

export default ProductCard;
