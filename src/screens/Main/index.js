import React from 'react'

import { Container, CardList, List } from './styles';
import { Header, Card } from '../../components';

export default function Main() {
  return (
    <Container >
        <Header />
        <CardList>
          <List>
            <Card />
            <Card />
            <Card />
          </List>
        </CardList>
    </Container>
  );
}
