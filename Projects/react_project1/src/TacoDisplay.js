import React from 'react';
import BaseLayerDisplay from './BaseLayerDisplay';
import MixinDisplay from './MixinDisplay';
import CondimentDisplay from './CondimentDisplay';
import SeasoningDisplay from './SeasoningDisplay';
import ShellDisplay from './ShellDisplay';

function TacoDisplay() {
  return (
    <div>
     <BaseLayerDisplay /> 
     <MixinDisplay />
     <CondimentDisplay />
     <SeasoningDisplay />
     <ShellDisplay />
    </div>
  )
}

export default TacoDisplay;
