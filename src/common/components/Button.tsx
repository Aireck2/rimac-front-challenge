import { Button as AntdButton, type ButtonProps } from 'antd';

const stylesButton: ButtonProps['styles'] = {
  root: {
    backgroundColor: '#03050F',
    borderRadius: '2rem',
    height: 'var(--button-size)',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  content: {
    color: '#ffffff',
  },
};

export const Button: React.FC<ButtonProps> = (props) => {
  return <AntdButton styles={stylesButton} size="large" {...props} />;
};
