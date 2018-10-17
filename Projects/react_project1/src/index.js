import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BaseLayerProvider from './BaseLayerProvider';
import MixinProvider from './MixinProvider';
import CondimentProvider from './CondimentProvider';
import SeasoningProvider from './SeasoningProvider';
import './assets/styles.css';

render(
  <BrowserRouter>
    <BaseLayerProvider>
    <MixinProvider>
    <CondimentProvider>
    <SeasoningProvider>
      <App />
    </SeasoningProvider>
    </CondimentProvider>
    </MixinProvider>
    </BaseLayerProvider>
  </BrowserRouter>,
  document.getElementById("root")
)