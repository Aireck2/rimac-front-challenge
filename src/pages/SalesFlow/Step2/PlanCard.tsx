import { Card } from '@/common/components';
import { Button, Divider, Flex, type ButtonProps, type CardProps } from 'antd';
import type { FC, ReactElement } from 'react';

const stylesButton: ButtonProps['styles'] = {
  root: {
    backgroundColor: '#FF1C44',
    borderRadius: '2rem',
  },
  content: {
    color: '#ffffff',
  },
};

const stylesCard: CardProps['styles'] = {
  body: {
    paddingBottom: 100,
    width: 288,
  },
};

export const PlanCard: FC<{
  icon: ReactElement;
  title: string;
  price: string;
  items: string[];
  onSelect: () => void;
}> = ({ icon, title, price, items, onSelect }) => {
  return (
    <Card styles={stylesCard}>
      <Flex justify="space-between" gap={10}>
        <h2>{title}</h2>
        {icon}
      </Flex>
      <p>Costo del plan</p>
      <p>${price} al mes</p>
      <Divider></Divider>
      <ul style={{ margin: 0 }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div
        style={{
          position: 'absolute',
          padding: 20,
          width: '100%',
          left: 0,
          bottom: 0,
          boxSizing: 'border-box',
        }}
      >
        <Button
          block
          size="large"
          styles={stylesButton}
          style={{
            alignSelf: 'flex-end',
          }}
          onClick={() => onSelect()}
        >
          Seleccionar plan
        </Button>
      </div>
    </Card>
  );
};
