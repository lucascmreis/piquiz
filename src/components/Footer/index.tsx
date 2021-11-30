import React from 'react';
import { FooterWrapper } from './style';

const Footer: React.FC = props => (
  <FooterWrapper
    {...props}
    animate="show"
    initial="hidden"
    variants={{
      show: { opacity: 1, y: '0' },
      hidden: { opacity: 0, y: '50%' },
    }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  >
    <p>
      criado por Lucas Reis durante o{' '}
      <a href="https://univesp.br/">
        <span>projeto integrador</span>
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
