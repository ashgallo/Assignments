import React from 'react';
import BaseLayerSelect from './BaseLayerSelect';
import MixinSelect from './MixinSelect';
import CondimentSelect from './CondimentSelect';
import SeasoningSelect from './SeasoningSelect';

function IngredientSelector() {
  return (
    <form>
      <BaseLayerSelect />
      <MixinSelect />
      <CondimentSelect />
      <SeasoningSelect />
    </form>
  )
}

export default IngredientSelector;

