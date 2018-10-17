import React from 'react';
import BaseLayerSelect from './BaseLayerSelect';
import MixinSelect from './MixinSelect';

function IngredientSelector() {
  return (
    <form>
      <BaseLayerSelect />
      <MixinSelect />
    </form>
  )
}

export default IngredientSelector;

