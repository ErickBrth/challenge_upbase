import React from 'react';
import {
  Container,
  WelcomeText,
  ButtonGroup,
  Button,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle,
  Wrapper
} from './styles';
import { RegisterButton } from '../../Components/RegisterButton'
import { ArrowBack } from '../../Components/ArrowBack';

function Home() {
  return (
    <Container>
      <Wrapper>
        <ArrowBack />
        <RegisterButton />
      </Wrapper>
      <WelcomeText>Bem-vindo, Raphael!</WelcomeText>
      
      <ButtonGroup>
        <Button primary>Todos os flats</Button>
        <Button>Indisponíveis</Button>
      </ButtonGroup>
      <Card>
        <CardImage src="https://via.placeholder.com/400" alt="Flat" />
        <CardContent>
          <CardTitle>Poundsflats Aquário</CardTitle>
          <CardSubtitle>Santos, SP - Diária: R$97</CardSubtitle>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Home;


