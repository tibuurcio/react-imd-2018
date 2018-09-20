import React from 'react';
import { Appear } from 'mdx-deck';

export default ({ title, items }) => {
  return [
    <h1>{title}</h1>,
    <ul style={{ textAlign: 'left' }}>
      <Appear>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </Appear>
    </ul>
  ];
};
