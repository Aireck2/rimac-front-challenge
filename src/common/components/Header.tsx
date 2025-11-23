/* eslint-disable @typescript-eslint/no-unused-vars */
import RimacLogo from '@/assets/rimac-logo.svg?react';

import { PhoneFilled } from '@ant-design/icons';
import { Flex } from 'antd';
import { useLocation } from 'wouter';

const styles = `
  .text-md{
     display: var(--hero-display);
  }
`;

export const Header = () => {
  const [_location, navigate] = useLocation();
  return (
    <>
      <style>{styles}</style>
      <Flex
        align="center"
        justify="space-between"
        style={{ margin: '1rem 1.5rem' }}
      >
        <div style={{ display: 'flex', cursor: 'pointer' }}>
          <RimacLogo height={70} onClick={() => navigate('/')} />
          <h1 style={{ margin: 0, visibility: 'hidden' }}>Rimac</h1>
        </div>
        <Flex align="center" gap={'1rem'}>
          <p
            className="text-md"
            style={{ fontSize: '0.8rem', margin: 0, fontWeight: 'bold' }}
          >
            ¡Compra por este medio!
          </p>
          <Flex align="center" gap={5}>
            <PhoneFilled style={{ fontSize: '1.1rem' }} />
            <a
              href="tel:+014116001"
              style={{
                fontSize: '1.1rem',
                margin: 0,
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              (01) 411 6001
            </a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
