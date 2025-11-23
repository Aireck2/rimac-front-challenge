/* eslint-disable @typescript-eslint/no-unused-vars */
import UserGroup from '@/assets/icons/user-group.svg?react';
import { LeftCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Steps } from 'antd';
import { useLocation } from 'wouter';

import { Card } from '@/common/components';
import { useUserStore } from '@/store';

import '../variables.css';
import './ResumePage.css';

const ResumePage = () => {
  const [_location, navigate] = useLocation();
  const { documentType, documentNumber, phoneNumber, plan, planPrice, forWho } =
    useUserStore();

  return (
    <>
      <Flex
        className="steps-container"
        justify="center"
        align="center"
        style={{ background: '#EDEFFC', height: '56px' }}
      >
        <Steps
          size="small"
          style={{
            width: '360px',
          }}
          current={2}
          items={[
            {
              title: 'Planes y coberturas',
            },
            {
              title: 'Resumen',
            },
          ]}
        />
      </Flex>
      <div
        className="resume-container"
        style={{ maxWidth: 928, margin: '0 auto' }}
      >
        <Button
          onClick={() => navigate('/cotiza-tu-seguro-rimac/1')}
          icon={<LeftCircleOutlined />}
          type="link"
        >
          Volver
        </Button>
        <Flex>
          <h2>Resumen del seguro</h2>
        </Flex>
        <Card>
          <p className="subtitle--min">Precios calculados para:</p>
          <Flex gap={5} align="center" style={{ fontSize: '1.5rem' }}>
            <UserGroup />
            <span>Rocio Miranda Díaz</span>
          </Flex>
          <Divider></Divider>
          <p className="subtitle">Responsable de pago</p>
          <p>
            {documentType}: {documentNumber}
          </p>
          <p>Celular: {phoneNumber}</p>
          <p className="subtitle">Plan Elegido</p>
          <p>{plan}</p>
          <p>
            Costo del Plan: $
            {forWho === 'OTHER' ? (
              <>
                <s>{planPrice}</s>
                <span> {Number(planPrice) * 0.95} </span>
              </>
            ) : (
              planPrice
            )}
            <span> al mes</span>
          </p>
        </Card>
      </div>
    </>
  );
};
export default ResumePage;
