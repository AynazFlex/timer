import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);