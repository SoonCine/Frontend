import React from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useState } from 'react';

const HeartLike = ({ count }) => {
  const [heartLike, setHeartLike] = useState({ ischecked: false });

  console.log('11111111111111111', count);
  const onClick = () => {
    heartLike.isChecked
      ? setHeartLike({ isChecked: false })
      : setHeartLike({ isChecked: true });
  };

  return (
    <div>
      {count !== '0.0%' ? (
        <HeartFilled
          style={{ color: 'red', fontSize: '17px', margin: '3px 5px' }}
        />
      ) : (
        <HeartOutlined style={{ fontSize: '17px', margin: '3px 5px' }} />
      )}
    </div>
  );
};

export default HeartLike;
