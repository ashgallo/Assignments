import React from 'react';
import BaseLayerDisplay from './BaseLayerDisplay';
import MixinDisplay from './MixinDisplay';
import CondimentDisplay from './CondimentDisplay';

function TacoDisplay() {
  return (
    <div>
     <BaseLayerDisplay /> 
     <MixinDisplay />
     <CondimentDisplay />
    </div>
  )
}

export default TacoDisplay;
