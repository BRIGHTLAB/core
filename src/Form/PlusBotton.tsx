import * as React from 'react';

interface Props {
  onClick: () => void;
}

export default function PlusBotton({ onClick }: Props) {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-block',
        width: '30px',
        height: '30px',
        background: '#0a9dad',
        textAlign: 'center',
        color: ' #fff',
        lineHeight: 1.2,
        marginRight: '0.5em',
        cursor: 'pointer',
      }}
    >
      +
    </span>
  );
}
