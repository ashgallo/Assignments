import React from 'react';
import BaseLayerDisplay from './BaseLayerDisplay';
import MixinDisplay from './MixinDisplay';
import CondimentDisplay from './CondimentDisplay';
import SeasoningDisplay from './SeasoningDisplay';

function TacoDisplay() {
  return (
    <div>
     <BaseLayerDisplay /> 
     <MixinDisplay />
     <CondimentDisplay />
     <SeasoningDisplay />
    </div>
  )
}

export default TacoDisplay;
