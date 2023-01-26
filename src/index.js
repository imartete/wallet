import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles/theme';
import Media from 'components/Media/Media';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/wallet-team-project">
      <ChakraProvider theme={theme}>
        <Media>
          <App />
        </Media>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
