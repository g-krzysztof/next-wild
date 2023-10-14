import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Box } from '../../styles';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Nasza misja',
    slug: 'Jakie są nasze cele, gdzie zmierzamy',
  },
  {
    label: 'Dzika szkoła',
    slug: 'Dlaczego to miejsce jest takie wyjątkowe',
  },
  {
    label: 'Fundacja',
    slug: 'Nasz statut, projekty i plany',
  },
  {
    label: 'Kontakt',
    slug: 'Gdzie możesz nasz znaleźć, jak z nami porozmawiać',
  },
];

const Menu = () => {
  const [activeSlug, setActiveSlug] = useState(
    'Witamy na stronie fundacji dzika',
  );

  return (
    <MenuWrapper>
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
          <FacebookButton
            onMouseEnter={() => setActiveSlug('Odwiedź naszą stronę na Facebooku')}
            onMouseLeave={() =>
              setActiveSlug('Witamy na stronie fundacji dzika')
            }
          >
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
      <MenuSlug>{activeSlug}</MenuSlug>
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
  margin-top: -70px;
  margin-bottom: 70px;
`;

const ButtonItem = styled(Box)`
  padding: 10px 20px;
  margin: 0 10px 0 0;
  cursor: pointer;
  background-color: white;
  box-shadow: 4px 4px 25px -9px rgba(66, 68, 90, 0.7);
  color: #666;
  font-weight: 400;
  border-radius: 5px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  :hover {
    color: darkgreen;
  }
`;

const MenuSlug = styled(Box)`
  margin-top: -45px;
  margin-bottom: 25px;
  padding-left: 10px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  text-shadow: 2px 2px 6px rgba(66, 68, 90, 1);
`;

const FacebookButton = styled(Box)`
  cursor: pointer;
`;
