// example Layout.js
import React from 'react';

export default ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children.props.children);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        alignItems: 'center'
      }}>
      <div style={{ marginRight: '64px' }}>{a}</div>
      <div>{rest}</div>
    </div>
  );
};
