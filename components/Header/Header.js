import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Box } from '../../styles';
import { Menu } from '../Menu';
import useBetterMediaQuery from '../../hooks/useBetterMediaQuery'

const Header = ({ data }) => {
  const { callToAction, logo } = data.attributes;

  const isMobile = useBetterMediaQuery('(max-width: 1024px)');
  const isTablet = useBetterMediaQuery('(max-width: 1380px)');

  return (
    <>
      <HeaderWrapper>
        <ContentWrapper>
          <Box display="flex" justifyContent="space-between">
            <Box m="-30px 0 -100px 0">
              <img
                style={{ borderRadius: '50%' }}
                height={isMobile ? '100px' : '150px'}
                src={logo.image.data.attributes.formats.small.url}
              />
            </Box>
            <LogoTitle pl={isMobile ? '1px' : '50px'} fontSize={isMobile ? '12px' : '16px'} isMobile={isMobile}>
              Wolna Szkoła Dzika -&nbsp;
              <strong>Szkoła Demokratyczna w Tychach</strong>
            </LogoTitle>
          </Box>
        </ContentWrapper>
      </HeaderWrapper>
      {!isMobile && <ContentWrapper>
        <SlugText>
          <strong>{callToAction} · Organizacja społeczna</strong>
          ul. Jaroszowicka 100, 43-100 Tychy
          <br />
          663 211 208 · szkoladzika@gmail.com
        </SlugText>
      </ContentWrapper>}
      {<Box pl={(isTablet && !isMobile) ? '200px' : '0'}><Menu /></Box>}
    </>
  );
};

export default Header;

const HeaderWrapper = styled(Box)`
  position: relative;
  margin: auto;
  padding: 20px;
  background-color: #fff;

  box-shadow: 4px 4px 25px -9px rgba(66, 68, 90, 0.7);
`;

const ContentWrapper = styled(Box)`
  margin: auto;
  max-width: 1440px;
`;

const LogoTitle = styled(Box)`
  display: flex;
  flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'};
  align-items: center;
`;

const SlugText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding-top: 20px;
  padding-right: 50px;
  text-align: right;
  line-height: 1.6;
`;
