import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import taco1 from './assets/taco1.jpg';
import SelectionDisplay from './SelectionDisplay';

const Home = () => {
  return(
    <Grid stackable columns={2} className="home-display">
      <Grid.Column>
        <Segment className="taco1">
          <Image src={taco1} height={'20px'} width={'20px'}/>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment className="selection-display">
          <SelectionDisplay />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Home;