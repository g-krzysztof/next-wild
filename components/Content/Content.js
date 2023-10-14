import styled from 'styled-components';
import { Box } from '../../styles';
import Markdown from 'markdown-to-jsx';
import { Paragraph, Delimiter } from './ContentParts';
import useBetterMediaQuery from '../../hooks/useBetterMediaQuery'

const getContentPartByBlockType = (blockType, data) => {
  switch (blockType) {
    case 'paragraph':
      return (
        <Box pt="space05" pb="space20" width="100%">
          <Paragraph>
            <Markdown>{data.text.replaceAll('class', 'className')}</Markdown>
          </Paragraph>
        </Box>
      );
    case 'delimiter':
      return <Delimiter />;
    case 'header':
      return (
        <Box pt="space10" pb="space10">
          <h4>
            <Markdown>{data.text}</Markdown>
          </h4>
        </Box>
      );
    case 'image':
      return (
        <StyledImage>
          <img src={data.file.url} />
        </StyledImage>
      );
    case 'list':
      return null;
    default:
      return null;
  }
};

const Content = ({ blocks }) => {

  const isMobile = useBetterMediaQuery('(max-width: 1024px)');

  return (
    <ContentWrapper isMobile={isMobile}>
      {blocks.map(({ id, type, data }) => (
        <Box key={id}>{getContentPartByBlockType(type, data)}</Box>
      ))}
    </ContentWrapper>
  );
};

export default Content;

const StyledImage = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  img {
    width: 100%;
  }
`;

const ContentWrapper = styled(Box)`
  position: relative;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  max-width: 1024px;
  border-radius: ${({ isMobile }) => isMobile ? 0 : 5}px;
`;
