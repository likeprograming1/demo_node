import { createGlobalStyle } from 'styled-components';

const variables = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --boxColor : #333;  
  }
`;

export default variables;