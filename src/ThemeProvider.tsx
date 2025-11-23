import { ConfigProvider } from 'antd';
import type { PropsWithChildren } from 'react';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4f4fff',
          colorPrimaryHover: '#7272FF',
          colorLink: '#4f4fff',
          colorLinkHover: '#7272FF',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
