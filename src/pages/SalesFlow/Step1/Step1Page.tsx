import { Divider, Flex } from 'antd';

import Blur1 from '@/assets/blur1.svg?react';
import Blur2 from '@/assets/blur2.svg?react';
import HeroImage from '@/assets/Step1/hero.png';
import { Footer } from '@/common/components';

import { Step1Form } from './components/Step1Form';

import '@/variables.css';
import './Step1Page.css';

const Step1Page = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Blur1
        style={{
          position: 'absolute',
          bottom: 'var(--blur1-bottom)',
          left: '-100px',
          zIndex: -1,
        }}
      />
      <Blur2
        style={{
          position: 'absolute',
          top: 'var(--blur2-top)',
          right: '0px',
          zIndex: -1,
        }}
      />

      <div>
        <div className="grid-container">
          <div className="hero-image-container">
            <img className="hero-image" src={HeroImage} alt="Step1" />
          </div>
          <Flex
            vertical
            gap={'1rem'}
            style={{ width: '352px', margin: '0 auto' }}
          >
            <div>
              <Flex gap={5} align="center">
                <div>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      height: '24px',
                      width: '100%',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      background:
                        'linear-gradient(86.01deg, #00F4E2 0%, #00FF7F 100%)',
                    }}
                  >
                    ¡Seguro Salud Flexible!
                  </span>
                  <h2 style={{ fontSize: '2rem', margin: '1rem 0 0.5rem' }}>
                    Creado para ti y tu familia
                  </h2>
                </div>
                <img
                  className="hero-image-mobile"
                  src={HeroImage}
                  alt="Step1"
                  width={160}
                />
              </Flex>
              <Divider className="step1-divider" />
              <p style={{ fontSize: '1rem' }}>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>
            <Step1Form />
          </Flex>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Step1Page;
