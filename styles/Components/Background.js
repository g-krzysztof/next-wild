import styled from 'styled-components';
import { Box } from './Box';

export const Background = () => {
  return (
    <Box backgroundColor="white">
      <StyledBackground className="noisy" />
      <GradientBackground />
    </Box>
  );
};

const StyledBackground = styled.div`
  overflow: hidden;
  height: 40%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -3;
  background-color: #f8f8f8;
`;

const GradientBackground = styled.div`
  overflow: hidden;
  height: 40%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.3)
  );
`;
