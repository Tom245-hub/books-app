import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/globalStyles';
import Theme from './theme/theme';

import StoreProvider from './store/StoreProvider';

const rootElement = document.getElementById('root');

if(rootElement) {
  ReactDOM.render(
    <StoreProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreProvider>
    
  , rootElement);
}

reportWebVitals();
