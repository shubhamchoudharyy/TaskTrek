import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
        <Content>
          <Card>
            <Head>
              <h2>Number of Events </h2>
              <span >: 10</span>
            </Head>
          </Card>
          <Card>
            <Head>
              <h2>Number of Co-ordinators </h2>
              <span>: 10</span>
            </Head>
          </Card>
          <Card>
            <Head>
              <h2>Number of Teachers </h2>
              <span>: 10</span>
            </Head>
          </Card>
          <Card>
            <Head>
              <h2>Number of Students </h2>
              <span>: 10</span>
            </Head>
          </Card>
        </Content>
        </Main>
       
        <Sidebar />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin-left: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const Main=styled.div`
  min-height: calc(100vh - 60px - 30px); /* Adjusted to consider Header and margin-top */

`;
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  width: 400px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 0px -25px 20px -20px rgba(0, 0, 0, 0.45),
    25px 0 20px -20px rgba(0, 0, 0, 0.45),
    0px 25px 20px -20px rgba(0, 0, 0, 0.45),
    -25px 0 20px -20px rgba(0, 0, 0, 0.45);
`;

const Head = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  height: 100%;
  padding-left: 20px;
  h2 {
    font-size: 2rem;
    width: 250px;
  }
  span {
    font-weight: 600;
    font-size: 1.7rem;
    width: 42px;
  }
`;

export default Home;
