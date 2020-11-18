import React from 'react';
import Reel from 'react-reel';
import styled from '@emotion/styled';

const Condition = ({ temp, status }) => {
  return (
    <>
      <Reel text={`${temp} ℃`} theme={reelStyle} />
      <State>{status}</State>
    </>
  );
};

export default Condition;

const State = styled.h3`
  margin-top: 5px;
  font-size: 1rem;
  font-family: sans-serif;
`;

const reelStyle = {
  group: {
    transitionDelay: '0ms',
    transitionTimingFunction: 'ease-in-out',
    transform: 'translate(0, 0)',
  },

  number: {
    height: '20px',
  },
  reel: {
    display: 'flex',
    alignItems: 'flex-end',
    overflowY: 'hidden',
    height: '20px',
    lineHeight: '20px',
    fontSize: '20px',
  },
};
