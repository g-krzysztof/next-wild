import styled from 'styled-components';
import { Box } from '../../styles';
import Markdown from 'markdown-to-jsx';
import { Paragraph, Delimiter } from './ContentParts';

const getContentPartByBlockType = (blockType, data) => {
  switch (blockType) {
    case 'paragraph':
      return (
        <Box py="space05" width="55%">
          <Paragraph>
            <Markdown>{data.text.replaceAll('class', 'className')}</Markdown>
          </Paragraph>
        </Box>
      );
    case 'delimiter':
      return <Delimiter />;
    case 'header':
      return (
        <Box py="space10">
          <h4>
            <Markdown>{data.text}</Markdown>
          </h4>
        </Box>
      );
    case 'image':
      return (
        <StyledImage>
          <img width="40%" src={data.file.url} />
        </StyledImage>
      );
    case 'list':
      return null;
    default:
      return null;
  }
};

const Content = ({ blocks }) => {
  return (
    <ContentWrapper>
      {blocks.map(({ id, type, data }) => (
        <Box key={id}>{getContentPartByBlockType(type, data)}</Box>
      ))}
    </ContentWrapper>
  );
};

export default Content;

const StyledImage = styled(Box)`
  position: relative;
  img {
    width: 40%;
    position: absolute;
    right: -180px;
    top: 0;
  }
`;

const ContentWrapper = styled(Box)`
  position: relative;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  max-width: 1024px;
  border-radius: 5px;
`;
