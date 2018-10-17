import React from 'react';
import BaseLayerSelect from './BaseLayerSelect';
import MixinSelect from './MixinSelect';
import CondimentSelect from './CondimentSelect';

function IngredientSelector() {
  return (
    <form>
      <BaseLayerSelect />
      <MixinSelect />
      <CondimentSelect />
    </form>
  )
}

export default IngredientSelector;

