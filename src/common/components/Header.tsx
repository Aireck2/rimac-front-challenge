import RimacLogo from '@/assets/rimac-logo.svg?react';

import { PhoneFilled } from '@ant-design/icons';
import { Flex } from 'antd';
import { md } from '../constants/breakpoints';

const styleTxt = `
  .show-md{
     display: none;
  }
  @media (min-width: ${md}) {
    .show-md{
       display: block;
    }
  }
`;

export const Header = () => {
  return (
    <>
      <style>{styleTxt}</style>
      <Flex
        align="center"
        justify="space-between"
        style={{ margin: '1rem 1.5rem' }}
      >
        <div>
          <RimacLogo height={70} />
        </div>
        <Flex align="center" gap={'1rem'}>
          <p
            className="show-md"
            style={{ fontSize: '0.8rem', margin: 0, fontWeight: 'bold' }}
          >
            ¡Compra por este medio!
          </p>
          <Flex align="center" gap={5}>
            <PhoneFilled style={{ fontSize: '1.1rem' }} />
            <p style={{ fontSize: '1.1rem', margin: 0, fontWeight: 'bold' }}>
              (01) 411 6001
            </p>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
