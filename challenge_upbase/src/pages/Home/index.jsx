import React from "react";
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
  CardPrice,
  Infos,
  CardTitleLine,
  StarIcon,
  DailyRate,
  DailyText,
  Wrapper,
} from "./styles";
import { RegisterButton } from "../../Components/RegisterButton";
import { ArrowBack } from "../../Components/ArrowBack";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

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
        <CardImage
          src="https://s3-alpha-sig.figma.com/img/9180/3c60/56cde7387c7af8e5d3fad83849a7ed02?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hG4qQ5~YrU1afncg6fLjpbGk9Jt0AyRTdtoyA00ZddYT9M8fv~DAU2CmgTa4-DGLwclcNsR4-AIiq-lESvqY-1YSUCNH4UBO7-Aw23YlJmj3rJXTzMVMgdRlcCf9roE5JiOhnhDAH9E6jKtZCpzHa~vbnAnf8-uJlt9WYQKn2neb5y03NJ84hm-N3M-Yh63d5RBUm17IT1KHnia3U3nDrWJxptR~8mQ9CSXGbqOQmxuDpiULAydNM5orYxy7HN8TUZ87mWldlMLDVq8ltdwWi2imXzWpUbTvRALxWNqHmFouLd5uvWpZ6EzakIIFpQ1KIYdCvvxa5rzTtdjn0dHCoQ__"
          alt="Flat"
        />
      </Card>
      <CardContent>
        <CardTitleLine>
          <CardTitle>Poundsflats Aquário</CardTitle>
          <StarIcon>
            <StarRoundedIcon sx={{color: "#7B2CBF"}}></StarRoundedIcon>
            4,5
          </StarIcon>
        </CardTitleLine>
        <Infos>
          <CardSubtitle>Santos, SP</CardSubtitle>
          <DailyRate>
            <DailyText>Diária:</DailyText>
            <CardPrice>R$97</CardPrice>
          </DailyRate>
        </Infos>
      </CardContent>
    </Container>
  );
}

export default Home;
