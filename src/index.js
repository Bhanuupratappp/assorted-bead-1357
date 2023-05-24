import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './AuthContextProvider/ThemeContextProvider';
import {ChakraProvider} from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContextProvider>
  <BrowserRouter>
  {/* <ChakraProvider> */}
  <App />

  {/* </ChakraProvider> */}
  
  
  

  </BrowserRouter>
  </ThemeContextProvider>


);


reportWebVitals();
