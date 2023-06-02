import styled from 'styled-components';
import Login from '../Login/login';

const MainBox = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  return (
  <MainBox>
    <Login />
  </MainBox>
  );
}

export default Main;