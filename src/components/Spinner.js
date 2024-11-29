import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container my-5 ">
        <div className="loader">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
          <div className="circle circle-4" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.container{
overflow:hidden
}
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .circle {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    box-shadow: inset 0 0 0 2px #fff;
    transform-origin: center;
    animation: fill 1.5s ease-in-out infinite;
  }

  .circle-1 {
    animation-delay: 0s;
  }

  .circle-2 {
    animation-delay: -0.4s;
  }

  .circle-3 {
    animation-delay: -0.8s;
  }

  .circle-4 {
    animation-delay: -1.2s;
  }

  @keyframes fill {
    0% {
      transform: scale(1);
    }

    50% {
      box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 6px #1c1c1e;
      transform: scale(1.5);
    }

    100% {
      box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 6px #fff;
      transform: scale(1);
    }
  }`;

export default Loader;
