import styled, { keyframes } from "styled-components";

const FloatsUp = keyframes`
  0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
`;

export const LightSpace = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
`;

export const Lights = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 7s infinite linear;
  -moz-animation: ${FloatsUp} 7s infinite linear;
  -o-animation: ${FloatsUp} 7s infinite linear;
  animation: ${FloatsUp} 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
`;
export const Lights2 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 2.5s infinite linear;
  -moz-animation: ${FloatsUp} 2.5s infinite linear;
  -o-animation: ${FloatsUp} 2.5s infinite linear;
  animation: ${FloatsUp} 2.5s infinite linear;
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -o-transform: scale(0.5);
  transform: scale(0.5);
  left: 15%;
`;
export const Lights3 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 4.5s infinite linear;
  -moz-animation: ${FloatsUp} 4.5s infinite linear;
  -o-animation: ${FloatsUp} 4.5s infinite linear;
  animation: ${FloatsUp} 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -15%;
`;
export const Lights4 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 8s infinite linear;
  -moz-animation: ${FloatsUp} 8s infinite linear;
  -o-animation: ${FloatsUp} 8s infinite linear;
  animation: ${FloatsUp} 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -34%;
`;
export const Lights5 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 3s infinite linear;
  -moz-animation: ${FloatsUp} 3s infinite linear;
  -o-animation: ${FloatsUp} 3s infinite linear;
  animation: ${FloatsUp} 3s infinite linear;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  left: -57%;
`;
export const Lights6 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 5.3s infinite linear;
  -moz-animation: ${FloatsUp} 5.3s infinite linear;
  -o-animation: ${FloatsUp} 5.3s infinite linear;
  animation: ${FloatsUp} 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: -81%;
`;
export const Lights7 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 4.7s infinite linear;
  -moz-animation: ${FloatsUp} 4.7s infinite linear;
  -o-animation: ${FloatsUp} 4.7s infinite linear;
  animation: ${FloatsUp} 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 37%;
`;
export const Lights8 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 4.1s infinite linear;
  -moz-animation: ${FloatsUp} 4.1s infinite linear;
  -o-animation: ${FloatsUp} 4.1s infinite linear;
  animation: ${FloatsUp} 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 62%;
`;
export const Lights9 = styled.div`
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: var(--color-white-mode) 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  -webkit-animation: ${FloatsUp} 2s infinite linear;
  -moz-animation: ${FloatsUp} 2s infinite linear;
  -o-animation: ${FloatsUp} 2s infinite linear;
  animation: ${FloatsUp} 2s infinite linear;
  -webkit-transform: scale(2.3);
  -moz-transform: scale(2.3);
  -o-transform: scale(2.3);
  transform: scale(2.3);
  left: 85%;
`;
