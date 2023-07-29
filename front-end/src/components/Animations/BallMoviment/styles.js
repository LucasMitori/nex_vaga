import styled, { keyframes } from "styled-components";

const BallMoviment = keyframes`
  100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
`;

export const BallSection = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  background-color: var(--color-quinternary);
  overflow: hidden;
  z-index: 1;

  & > span {
    width: 12vmin;
    height: 12vmin;
    border-radius: 12vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: ${BallMoviment};
    animation-duration: 37;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  & > span:nth-child(0) {
    color: var(--color-primary);
    top: 30%;
    left: 96%;
    animation-duration: 102s;
    animation-delay: -35s;
    transform-origin: 6vw 10vh;
    box-shadow: 24vmin 0 3.5854249893144345vmin currentColor;
  }
  & > span:nth-child(1) {
    color: var(--color-bubbles-blue);
    top: 86%;
    left: 26%;
    animation-duration: 54s;
    animation-delay: -29s;
    transform-origin: -21vw 16vh;
    box-shadow: 24vmin 0 3.0184302068977846vmin currentColor;
  }
  & > span:nth-child(2) {
    color: var(--color-bubbles-blue);
    top: 12%;
    left: 8%;
    animation-duration: 68s;
    animation-delay: -78s;
    transform-origin: 23vw 25vh;
    box-shadow: -24vmin 0 3.423841763246573vmin currentColor;
  }
  & > span:nth-child(3) {
    color: var(--color-primary);
    top: 73%;
    left: 84%;
    animation-duration: 58s;
    animation-delay: -55s;
    transform-origin: 17vw 11vh;
    box-shadow: -24vmin 0 3.5566358476011937vmin currentColor;
  }
  & > span:nth-child(4) {
    color: var(--color-bubbles-blue);
    top: 26%;
    left: 46%;
    animation-duration: 15s;
    animation-delay: -91s;
    transform-origin: 5vw 24vh;
    box-shadow: 24vmin 0 3.3125338850597386vmin currentColor;
  }
  & > span:nth-child(5) {
    color: var(--color-primary);
    top: 88%;
    left: 75%;
    animation-duration: 103s;
    animation-delay: -93s;
    transform-origin: 14vw 23vh;
    box-shadow: 24vmin 0 3.947349520551759vmin currentColor;
  }
  & > span:nth-child(6) {
    color: var(--color-bubbles-blue);
    top: 81%;
    left: 43%;
    animation-duration: 83s;
    animation-delay: -105s;
    transform-origin: -3vw 3vh;
    box-shadow: -24vmin 0 3.3052880362739976vmin currentColor;
  }
  & > span:nth-child(7) {
    color: var(--color-bubbles-blue);
    top: 50%;
    left: 34%;
    animation-duration: 56s;
    animation-delay: -124s;
    transform-origin: -6vw 1vh;
    box-shadow: 24vmin 0 3.6739456964137425vmin currentColor;
  }
  & > span:nth-child(8) {
    color: var(--color-bubbles-pink);
    top: 39%;
    left: 85%;
    animation-duration: 67s;
    animation-delay: -128s;
    transform-origin: -10vw -9vh;
    box-shadow: 24vmin 0 3.475045011845067vmin currentColor;
  }
  & > span:nth-child(9) {
    color: var(--color-primary);
    top: 35%;
    left: 34%;
    animation-duration: 132s;
    animation-delay: -34s;
    transform-origin: 3vw -17vh;
    box-shadow: -24vmin 0 3.2380780652613685vmin currentColor;
  }
  & > span:nth-child(10) {
    color: var(--color-primary);
    top: 32%;
    left: 99%;
    animation-duration: 100s;
    animation-delay: -41s;
    transform-origin: 13vw -23vh;
    box-shadow: 24vmin 0 3.3330987233319878vmin currentColor;
  }
  & > span:nth-child(11) {
    color: var(--color-bubbles-pink);
    top: 90%;
    left: 84%;
    animation-duration: 56s;
    animation-delay: -130s;
    transform-origin: -19vw 21vh;
    box-shadow: -24vmin 0 3.2290579978562555vmin currentColor;
  }
  & > span:nth-child(12) {
    color: var(--color-bubbles-pink);
    top: 38%;
    left: 80%;
    animation-duration: 117s;
    animation-delay: -96s;
    transform-origin: -6vw -23vh;
    box-shadow: 24vmin 0 3.660159581058795vmin currentColor;
  }
  & > span:nth-child(13) {
    color: var(--color-bubbles-blue);
    top: 65%;
    left: 73%;
    animation-duration: 119s;
    animation-delay: -93s;
    transform-origin: 17vw -7vh;
    box-shadow: -24vmin 0 3.139022429204411vmin currentColor;
  }
  & > span:nth-child(14) {
    color: var(--color-primary);
    top: 27%;
    left: 95%;
    animation-duration: 134s;
    animation-delay: -63s;
    transform-origin: 8vw 7vh;
    box-shadow: 24vmin 0 3.425090123896947vmin currentColor;
  }
  & > span:nth-child(15) {
    color: var(--color-bubbles-pink);
    top: 17%;
    left: 44%;
    animation-duration: 87s;
    animation-delay: -106s;
    transform-origin: -11vw 7vh;
    box-shadow: -24vmin 0 3.840184236222324vmin currentColor;
  }
  & > span:nth-child(16) {
    color: var(--color-bubbles-pink);
    top: 60%;
    left: 66%;
    animation-duration: 52s;
    animation-delay: -106s;
    transform-origin: 6vw -22vh;
    box-shadow: -24vmin 0 3.497829546204402vmin currentColor;
  }
  & > span:nth-child(17) {
    color: var(--color-bubbles-pink);
    top: 23%;
    left: 71%;
    animation-duration: 100s;
    animation-delay: -74s;
    transform-origin: 4vw -1vh;
    box-shadow: 24vmin 0 3.783967630810511vmin currentColor;
  }
  & > span:nth-child(18) {
    color: var(--color-bubbles-blue);
    top: 37%;
    left: 50%;
    animation-duration: 121s;
    animation-delay: -58s;
    transform-origin: -24vw -4vh;
    box-shadow: 24vmin 0 3.2885904471786533vmin currentColor;
  }
  & > span:nth-child(19) {
    color: var(--color-primary);
    top: 54%;
    left: 54%;
    animation-duration: 124s;
    animation-delay: -28s;
    transform-origin: -20vw -1vh;
    box-shadow: -24vmin 0 3.367751389207024vmin currentColor;
  }
  & > span:nth-child(20) {
    color: var(--color-bubbles-blue);
    top: 12%;
    left: 22%;
    animation-duration: 12s;
    animation-delay: -87s;
    transform-origin: 10vw -8vh;
    box-shadow: 24vmin 0 3.017251013809715vmin currentColor;
  }
  & > span:nth-child(21) {
    color: var(--color-bubbles-pink);
    top: 9%;
    left: 84%;
    animation-duration: 39s;
    animation-delay: -53s;
    transform-origin: -20vw 4vh;
    box-shadow: 24vmin 0 3.414857851231252vmin currentColor;
  }
  & > span:nth-child(22) {
    color: var(--color-bubbles-pink);
    top: 60%;
    left: 11%;
    animation-duration: 81s;
    animation-delay: -96s;
    transform-origin: 22vw -3vh;
    box-shadow: -24vmin 0 3.026308598023318vmin currentColor;
  }
  & > span:nth-child(23) {
    color: var(--color-bubbles-blue);
    top: 28%;
    left: 17%;
    animation-duration: 51s;
    animation-delay: -24s;
    transform-origin: 3vw -4vh;
    box-shadow: 24vmin 0 3.6890961331794334vmin currentColor;
  }
  & > span:nth-child(24) {
    color: var(--color-primary);
    top: 30%;
    left: 26%;
    animation-duration: 77s;
    animation-delay: -56s;
    transform-origin: 23vw -3vh;
    box-shadow: 24vmin 0 3.6023576282921557vmin currentColor;
  }
  & > span:nth-child(25) {
    color: var(--color-primary);
    top: 65%;
    left: 14%;
    animation-duration: 130s;
    animation-delay: -14s;
    transform-origin: -7vw 8vh;
    box-shadow: 24vmin 0 3.3085860834349354vmin currentColor;
  }
  & > span:nth-child(26) {
    color: var(--color-bubbles-pink);
    top: 52%;
    left: 40%;
    animation-duration: 40s;
    animation-delay: -112s;
    transform-origin: 2vw 1vh;
    box-shadow: -24vmin 0 3.61112184393336vmin currentColor;
  }
  & > span:nth-child(27) {
    color: var(--color-bubbles-blue);
    top: 9%;
    left: 74%;
    animation-duration: 54s;
    animation-delay: -97s;
    transform-origin: 21vw -7vh;
    box-shadow: 24vmin 0 3.1739054455108198vmin currentColor;
  }
  & > span:nth-child(28) {
    color: var(--color-bubbles-pink);
    top: 59%;
    left: 63%;
    animation-duration: 13s;
    animation-delay: -48s;
    transform-origin: 2vw -21vh;
    box-shadow: -24vmin 0 3.4269760840458057vmin currentColor;
  }
  & > span:nth-child(29) {
    color: var(--color-primary);
    top: 95%;
    left: 26%;
    animation-duration: 134s;
    animation-delay: -14s;
    transform-origin: 24vw 3vh;
    box-shadow: 24vmin 0 3.304969574161514vmin currentColor;
  }
`;
