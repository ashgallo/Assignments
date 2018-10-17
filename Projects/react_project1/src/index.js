import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BaseLayerProvider from './BaseLayerProvider';
import MixinProvider from './MixinProvider';
import './assets/styles.css';

render(
  <BrowserRouter>
    <BaseLayerProvider>
    <MixinProvider>
        <App />
    </MixinProvider>
    </BaseLayerProvider>
  </BrowserRouter>,
  document.getElementById("root")
)