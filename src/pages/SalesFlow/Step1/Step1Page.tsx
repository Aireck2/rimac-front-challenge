import { Divider, Flex } from 'antd';

import HeroImage from '@/assets/Step1/hero.png';
import { Footer } from '@/common/components';

import { Step1Form } from './components/Step1Form';
import './Step1Page.css';

export const Step1Page = () => {
  return (
    <>
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
              <Flex gap={12} align="center">
                <div>
                  <p style={{ fontSize: '1rem' }}>¡Seguro Salud Flexible!</p>
                  <h2 style={{ fontSize: '2rem' }}>
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
    </>
  );
};
