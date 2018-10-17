import React, { Component, createContext } from 'react';
import axios from 'axios';

//api endpoints:  condiments, seasonings, shells 

const url = "http://taco-randomizer.herokuapp.com/base_layers/";

const BaseLayerContext = createContext();

export default class BaseLayerProvider extends Component {
  constructor() {
    super();
    this.state = {
      baseLayers: [],
      currentBaseLayer: undefined,
      loading: true,
      err: null
    }
    this.handleSelection = this.handleSelection.bind(this);
  }
  
  _getBaseLayerData = () => {
    return axios.get(url).then(response => response.data)
  }

  handleSelection(index) {
    //choose the layer & update the state with that index
    return ({ target }) => {
      this.setState({ currentBaseLayer: target.value })
    }
  }

  componentDidMount() {
    //get base layer data & set state
    this._getBaseLayerData()
    .then(baseLayers => {
      this.setState( {
        baseLayers,
        currentBaseLayer: 0,
        loading: false,
        err: null
      })
    })
    //handle .catch error here
  }

  render() {
    return (
      <div>
        <BaseLayerContext.Provider 
          value={{ ...this.state, handleSelection: this.handleSelection }}>
          {this.props.children}
        </BaseLayerContext.Provider>
      </div>
    )
  }
}

export const withBaseLayer = C => props => (
  <BaseLayerContext.Consumer>
    {value => <C {...props} {...value} />}
  </BaseLayerContext.Consumer>
)
