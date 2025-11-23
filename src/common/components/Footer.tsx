import RimacLogoWhite from '@/assets/rimac-logo-white.svg?react';

import { Divider, Flex } from 'antd';

const styles = `
  .footer-container {
    flex-direction: var(--footer-flex-direction);
  }
  .footer-divider {
    border-color: #2B304E;
    display: var(--hero-display-mobile);
  }
`;

export const Footer = () => {
  return (
    <>
      <style>{styles}</style>
      <Flex
        className="footer-container"
        align="center"
        justify="space-between"
        style={{ backgroundColor: '#000000', padding: '2rem 1.5rem' }}
      >
        <div>
          <RimacLogoWhite width={130} />
        </div>
        <Divider className="footer-divider" />
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
