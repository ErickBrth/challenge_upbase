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
} from './styles';
import RegisterPropertyButton from '../../Components/RegisterButton';

function Home() {
  return (
    <Container>
      <WelcomeText>Bem-vindo, Raphael!</WelcomeText>
      <RegisterPropertyButton></RegisterPropertyButton>
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


