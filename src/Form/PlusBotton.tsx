import * as React from 'react';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
}

export default function PlusBotton({ onClick, disabled }: Props) {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-block',
        width: '30px',
        height: '30px',
        background: disabled ? 'grey' : '#0a9dad',
        textAlign: 'center',
        color: ' #fff',
        lineHeight: 1.2,
        marginRight: '0.5em',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      +
    </span>
  );
}
