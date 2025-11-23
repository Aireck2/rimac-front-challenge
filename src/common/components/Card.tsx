import { Card as AntdCard, type CardProps } from 'antd';

const stylesCard: CardProps['styles'] = {
  root: {
    boxShadow: '0px 1px 24px 0px #AEACF340',
    borderRadius: '1.5rem',
  },
};
export const Card: React.FC<CardProps> = (props) => {
  return <AntdCard styles={stylesCard} {...props} />;
};
