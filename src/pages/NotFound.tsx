import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    >
      해당하는 페이지는 존재하지 않습니다.
    </div>
  );
};

export default NotFound;
