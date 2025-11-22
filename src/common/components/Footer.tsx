import RimacLogoWhite from '@/assets/rimac-logo-white.svg?react';

import { Divider, Flex } from 'antd';
import { md } from '../constants/breakpoints';

const styleTxt = `
  .footer-container {
    flex-direction: column;
  }
  .hide-md {
    border-color: #2B304E;
    display: block;
  }
  @media (min-width: ${md}) {
    .footer-container {
      flex-direction: row;
  }
  .hide-md {
     display: none;
    }
  }
`;

export const Footer = () => {
  return (
    <>
      <style>{styleTxt}</style>
      <Flex
        className="footer-container"
        align="center"
        justify="space-between"
        style={{ backgroundColor: '#000000', padding: '2rem 1.5rem' }}
      >
        <div>
          <RimacLogoWhite width={130} />
        </div>
        <Divider className="hide-md" />
        <p
          style={{
            fontSize: '1rem',
            margin: 0,
            color: '#ffffff',
          }}
        >
          © 2023 RIMAC Seguros y Reaseguros.
        </p>
      </Flex>
    </>
  );
};
