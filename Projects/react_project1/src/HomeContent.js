import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const HomeContent = () => (
  <Segment.Group horizontal className='home-content'>
    <Segment className='taco1'></Segment>
    <Segment>
      <Segment.Group className='taco-go'>
        <Segment className='build-choice'>
          <Link to={'/buildTaco'}><h3>Build</h3></Link>
        </Segment>
        <Segment className='random-choice'>
          <Link to={'/randomtaco'}><h3>Random Taco</h3></Link>
        </Segment>
      </Segment.Group>
    </Segment>
  </Segment.Group>
)

export default HomeContent;



