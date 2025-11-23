/* eslint-disable @typescript-eslint/no-unused-vars */
import { LeftCircleOutlined } from '@ant-design/icons';
import { Button, Flex, Steps } from 'antd';
import { useLocation } from 'wouter';

import House from '@/assets/Step2/house.svg?react';
import Other from '@/assets/Step2/other.svg?react';
import Plan from '@/assets/Step2/plan.svg?react';
import { getPlans } from '@/services/plans';
import { useUserStore } from '@/store';
import { useEffect, useState } from 'react';
import { PlanCard } from './PlanCard';
import './Step2Page.css';
import { WhoCard } from './WhoCard';

interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

const Step2Page = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [_location, navigate] = useLocation();
  const { age, forWho, setUser } = useUserStore();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getPlans();
        setPlans(data?.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div>
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
          current={0}
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
        className="step2-container"
        style={{ maxWidth: 928, margin: '0 auto' }}
      >
        <Button
          onClick={() => navigate('/cotiza-tu-seguro-rimac')}
          icon={<LeftCircleOutlined />}
          type="link"
        >
          Volver
        </Button>
        <Flex vertical align="center">
          <h2 style={{ margin: '1rem 0 0', fontSize: '2.5rem' }}>
            Rocío ¿Para quién deseas cotizar?
          </h2>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </Flex>
        <Flex justify="center" gap={'2rem'} className="choose-who-container">
          <WhoCard
            title="Para mí"
            content="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            icon={<Plan />}
            checked={forWho === 'SELF'}
            onClick={() => setUser({ forWho: 'SELF' })}
          />
          <WhoCard
            title="Para alguien más"
            content="Realiza una cotización para alguien diferente a ti."
            icon={<Other />}
            checked={forWho === 'OTHER'}
            onClick={() => setUser({ forWho: 'OTHER' })}
          />
        </Flex>
        <div className="choose-plan-container-overflow">
          <div className="choose-plan-container">
            {plans
              .filter((plan) => plan.age < age)
              .map((plan, index) => (
                <PlanCard
                  key={index}
                  onSelect={() => {
                    setUser({
                      plan: plan.name,
                      planNumber: `${index}`,
                      planPrice: plan.price.toString(),
                    });
                    navigate('/cotiza-tu-seguro-rimac/2');
                  }}
                  icon={<House />}
                  title={plan.name}
                  price={plan.price.toString()}
                  items={plan.description}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Page;
