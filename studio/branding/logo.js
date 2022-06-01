import React from 'react';
import styled, { css } from 'styled-components';

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1000.000000pt"
        height="1280.000000pt"
        viewBox="0 0 1000.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="#fff"
          stroke="none"
        >
          <path
            d="M0 6400 l0 -6400 1600 0 1600 0 0 2036 c0 1119 4 2033 8 2030 5 -3
652 -919 1438 -2035 l1429 -2031 1948 0 c1071 0 1947 3 1947 6 0 3 -1076 1462
-2392 3242 -1315 1780 -2391 3242 -2392 3248 -1 8 3695 4847 4732 6196 l83
108 -1963 -2 -1963 -3 -1426 -1989 c-785 -1093 -1432 -1993 -1438 -1999 -8 -8
-11 542 -11 1991 l0 2002 -1600 0 -1600 0 0 -6400z"
          />
        </g>
      </svg>
    </Icon>
  );
};

const Icon = styled.div`
  display: block;
  width: auto;
  height: 2em;
  max-width: 100%;
  margin: -0.75rem auto;
  color: white;

  ${(props) =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;
      width: 90px;
      height: 90px;
      color: black;
    `}

  svg {
    display: block;
    margin: 0 auto;
    height: 100% !important;
    width: auto;
    fill: currentColor;
  }
`;

export default Logo;
