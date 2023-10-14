import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Box } from '../../styles';
import { Menu } from '../Menu';

const Header = ({ data }) => {
  const { callToAction, logo } = data.attributes;

  return (
    <>
      <HeaderWrapper>
        <ContentWrapper>
          <Box display="flex" justifyContent="space-between">
            <Box m="-30px 0 -100px 0">
              <img
                style={{ borderRadius: '50%' }}
                height="150px"
                src={logo.image.data.attributes.formats.small.url}
              />
            </Box>
            <LogoTitle>
              Wolna Szkoła Dzika -&nbsp;
              <strong>Szkoła Demokratyczna w Tychach</strong>
            </LogoTitle>
            {/*  {callToAction}*/}
          </Box>
        </ContentWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <SlugText>
          <strong>{callToAction} · Organizacja społeczna</strong>
          ul. Jaroszowicka 100, 43-100 Tychy
          <br />
          663 211 208 · szkoladzika@gmail.com
        </SlugText>
      </ContentWrapper>
      <Menu />
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
  align-items: center;
  padding-left: 50px;
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
