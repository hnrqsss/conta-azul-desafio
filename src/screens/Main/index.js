import React from 'react'

import { Container, CardList, List } from './styles';
import { Header, Card } from '../../components';

export default function Main({
  weathers,
  getWeather
}) {

  return (
    <Container >
        <Header />
        <CardList>
          <List>
            {weathers.map((item, index) => <Card {...item} key={index} requestData={getWeather}/>)}
          </List>
        </CardList>
    </Container>
  );
}
