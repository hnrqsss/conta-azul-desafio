import React from 'react'

import { Container, CardList, List } from './styles';
import { Header, Card } from '../../components';

export default function Main({
  weathers,
  getWeathers
}) {
  return (
    <Container >
      {console.log(weathers)}
        <Header />
        <CardList>
          <List>
            {weathers.map((weather, index) => <Card  key={weather.name} {...weather} />)}
          </List>
        </CardList>
    </Container>
  );
}
