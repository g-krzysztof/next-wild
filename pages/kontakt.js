import { Background } from '../styles';
import { Box } from '../styles';

import { Content } from '../components/Content';
import { Header } from '../components/Header';
import styled from 'styled-components';

const serviceToModelData = (data) => {
  const dataArray = data.data;
  const modelData = dataArray.map((item) => {
    return {
      slug: item.attributes.slug,
      content: JSON.parse(item.attributes.content),
      title: item.attributes.title,
    }
  })
  return modelData
}

const getObjectBySlug = (object, value) => {
  return object.find(({ slug }) => slug === value)
}

const Home = ({ data, header }) => {

  const modelData = serviceToModelData(data)

  const { blocks } = getObjectBySlug(modelData, 'kontakt').content;

  return (
    <>
      <Header data={header.data} />
      <Content blocks={blocks} />
      <Footer color="#333">
        <FooterContent>
          <Box display="flex" p="5px">
            Nasze projekty i inicjatywy:{' '}
            <Box pl="10px">
              <a href="/">KoBaE</a>
            </Box>
          </Box>
        </FooterContent>
      </Footer>
      <Background />
    </>
  );
};

export default Home;

const Footer = styled(Box)`
  padding: 30px 30px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #444;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  background-image: url("/images/yellow_no_pattern.jpg");
  background-size: cover;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterContent = styled(Box)`
  width: 1440px;
  margin: 0 auto;
  display: flex;
`

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
