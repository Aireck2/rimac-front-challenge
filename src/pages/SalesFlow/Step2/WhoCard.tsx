import { Card } from '@/common/components';
import type { FC, ReactElement } from 'react';
import { CardCheck } from './CardCheck';

export const WhoCard: FC<{
  icon: ReactElement;
  checked: boolean;
  title: string;
  content: string;
  onClick: () => void;
}> = ({ icon, title, checked, content, onClick }) => {
  return (
    <Card className="card-hover relative" onClick={onClick}>
      <div className="card-check">
        <CardCheck isChecked={checked} />
      </div>
      {icon}
      <h2>{title}</h2>
      <p>{content}</p>
    </Card>
  );
};
