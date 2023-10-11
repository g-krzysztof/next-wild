import styled from 'styled-components';
import { Box } from '../../../styles';

export const Paragraph = ({ children }) => {
  return <ParagraphWrapper>{children}</ParagraphWrapper>;
};

const ParagraphWrapper = styled(Box)`
  position: relative;
  color: #333;
  line-height: 1.6;
`;
