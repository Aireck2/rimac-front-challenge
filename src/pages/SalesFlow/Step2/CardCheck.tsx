import { CheckCircleFilled } from '@ant-design/icons';
import type { FC } from 'react';

export const CardCheck: FC<{ isChecked: boolean }> = ({ isChecked }) => {
  return (
    <div className="card-check">
      {isChecked ? (
        <CheckCircleFilled />
      ) : (
        <div
          style={{
            borderRadius: '50%',
            border: '1px solid gray',
            height: 24,
            width: 24,
          }}
        ></div>
      )}
    </div>
  );
};
