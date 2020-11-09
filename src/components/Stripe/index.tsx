import React from 'react';
import { Container, Content } from './styles';

const Stripe: React.FC<{ primary?: boolean }> = ({ primary, children }) => {
  return (
    <Container primary={primary}>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default Stripe;