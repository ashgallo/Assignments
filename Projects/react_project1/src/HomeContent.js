import React from 'react';
import { Segment, Image } from 'semantic-ui-react';

const taco1 = './assets/taco1.jpg'

const HomeContent = () => ( 
      <Segment.Group horizontal>
        <Segment className='taco1'>
          <Image src={taco1} size='medium' floated='left' />
        </Segment>
        <Segment.Group stacked className='taco-go'>
          <Segment>
            <h3>Recipes</h3>
          </Segment>
          <Segment>
            <h3>Random Recipe</h3>
          </Segment>
        </Segment.Group>
      </Segment.Group>
)

export default HomeContent;



