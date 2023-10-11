import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Box } from '../../styles';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Nasza misja',
    slug: 'Jakie są nasze cele, gdzie zmierzamy.',
  },
  {
    label: 'Dzika szkoła',
    slug: 'Dlaczego to miejsce jest takie wyjątkowe',
  },
  {
    label: 'Fundacja',
    slug: 'Nasz statut, projekty i plany.',
  },
  {
    label: 'Kontakt',
    slug: 'Gdzie możesz nasz znaleźć, jak z nami porozmawiać.',
  },
];

const Menu = () => {
  const [activeSlug, setActiveSlug] = useState(
    'Witamy na stronie fundacji dzika',
  );

  return (
    <MenuWrapper>
      <MenuSlug>{activeSlug}</MenuSlug>
      <ButtonsWrapper>
        {menuItems.map(({ label, slug }) => (
          <ButtonItem
            key={label}
            onMouseEnter={() => setActiveSlug(slug)}
            onMouseLeave={() =>
              setActiveSlug('Witamy na stronie fundacji dzika')
            }
          >
            {label}
          </ButtonItem>
        ))}
        <Box pl="10px">
          <FacebookButton>
            <svg viewBox="0 0 36 36" fill="currentColor" height="40" width="40">
              <path
                fill="#2566ff"
                d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"
              />
              <path
                fill="#ffffff"
                d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"
              />
            </svg>
          </FacebookButton>
        </Box>
      </ButtonsWrapper>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled(Box)`
  margin: auto;
  max-width: 1024px;
`;

const ButtonsWrapper = styled(Box)`
  display: flex;
  margin-top: -50px;
  margin-bottom: 50px;
`;

const ButtonItem = styled(Box)`
  padding: 10px 20px;
  margin: 0 10px 0 0;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #fff;
  color: #666;
  font-weight: 400;
  border-radius: 5px;
  transition: 0.2s;
  :hover {
    color: darkgreen;
  }
`;

const MenuSlug = styled(Box)`
  margin-top: -60px;
  margin-bottom: 60px;
  padding-left: 10px;
  font-size: 10px;
  text-transform: uppercase;
  color: #666;
`;

const FacebookButton = styled(Box)`
  cursor: pointer;
`;
