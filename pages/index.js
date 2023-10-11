import { Background } from '../styles';
import { Box } from '../styles';

import { Content } from '../components/Content';
import { Header } from '../components/Header';
import styled from 'styled-components';

const Home = ({ data, header }) => {
  const { blocks } = JSON.parse(data.data[0].attributes.content);

  return (
    <>
      <Header data={header.data} />
      <Content blocks={blocks} />
      <Footer color="#666">
        Nasze projekty i inicjatywy:{' '}
        <Box pl="10px">
          <a href="/">KoBaE</a>
        </Box>
      </Footer>
      <Background />
    </>
  );
};

export default Home;

const Footer = styled(Box)`
  width: 1440px;
  margin: 30px auto 0 auto;
  padding: 10px 0 0 10px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #444;
  font-size: 11px;
  text-transform: uppercase;
`;

export const getStaticProps = async () => {
  let data;
  let header;

  const fetchMainData = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  try {
    data = await fetchMainData(
      'https://strapi-wild-6d0b1dc36ec7.herokuapp.com/api/content-pages',
    );
  } catch (e) {
    data = [];
  }

  try {
    header = await fetchMainData(
      'https://strapi-wild-6d0b1dc36ec7.herokuapp.com/api/header?populate=deep',
    );
  } catch (e) {
    header = [];
  }

  return {
    props: {
      data,
      header,
    },
    revalidate: 1,
  };
};
