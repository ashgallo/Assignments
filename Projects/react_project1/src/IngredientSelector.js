import React from 'react';
import BaseLayerSelect from './BaseLayerSelect';
import MixinSelect from './MixinSelect';
import CondimentSelect from './CondimentSelect';
import SeasoningSelect from './SeasoningSelect';
import ShellSelect from './ShellSelect';

function IngredientSelector() {
  return (
    <form>
      <BaseLayerSelect />
      <MixinSelect />
      <CondimentSelect />
      <SeasoningSelect />
      <ShellSelect />
    </form>
  )
}

export default IngredientSelector;

