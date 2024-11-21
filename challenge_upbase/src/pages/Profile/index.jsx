import React from "react";
import {
  Container,
  Wrapper,
  WelcomeText,
  ImageProfile,
  Image,
  ProfileName,
  EditButton,
  StyledIcon,
  InfoContainer,
  InfoIcon,
  InfoItem,
  FormContainer,
  CustomTextField,
  EditInfoButton,
} from "../Profile/styles";

import {
    Stack,
    InputAdornment,
    IconButton,
  } from "@mui/material";

import { ArrowBack } from "../../Components/ArrowBack";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import CheckIcon from "@mui/icons-material/Check";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import DateRangeIcon from "@mui/icons-material/DateRange";
const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <ArrowBack />
      </Wrapper>
      <WelcomeText>Meu Perfil</WelcomeText>
      <ImageProfile>
        <Image
          src="https://s3-alpha-sig.figma.com/img/46db/a90c/9e079416f760c0281d83276faaabe0c3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXUKRKpS0k1n4FKUQicT9dIOJNW-dya69A6EOu98q6UM833gNe-71TFk2s86vyE9NDY9XMWzjC6enENGjCCg7Iq28pidzxRktd8IyWyBQAL55tVCPgecFUF9xT3LJV7amdeS9l2sX92x2I903Sja~apN6fHS-mR9koguTBwy~YhCInhfz57LHNJPOFJdaygZAh7TmjLahJZqbRXMft9aDhLwQS5CWoogjQB~sY~fWcmKCESeqmjoI8Ah5OCPSHdV6S6ZVJishMsO-RGoSn1V7~hDlcmUv~J79OI90R9e28cljV0Owu1SHUHiTWjPXX29sv12GoT1VyKXlwpMd6APCw__"
          alt="Circular Image"
        />
        <ProfileName>Henrique Rodrigues</ProfileName>
        <EditButton
          startIcon={<StyledIcon icon={faPenToSquare}/>}
        >
          Editar foto
        </EditButton>
      </ImageProfile>
      <InfoContainer>
          <InfoItem>
            <InfoIcon>
              <CheckIcon />
            </InfoIcon>
            <span>Perfil Verificado</span>
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <StarRoundedIcon />
            </InfoIcon>
            <span>4.5 Avaliações</span>
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <WatchLaterRoundedIcon />
            </InfoIcon>
            <span>10 meses no app</span>
          </InfoItem>
        </InfoContainer>
        <FormContainer>
          <Stack spacing={2}>
            <CustomTextField
              label="Nome e sobrenome"
              defaultValue="Henrique Rodrigues"
              variant="filled"
              fullWidth
              disabled
            />
            <CustomTextField
              label="CPF"
              defaultValue="983.724.162-55"
              variant="filled"
              fullWidth
              disabled
            />
            <CustomTextField
              label="Número de celular"
              defaultValue="(41) 99115-2028"
              variant="filled"
              fullWidth
              disabled
            />
            <CustomTextField
              label="Data de nascimento"
              defaultValue="04/03/1991"
              variant="filled"
              fullWidth
              disabled
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" disabled>
                        <DateRangeIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <CustomTextField
              label="E-mail"
              type="email"
              defaultValue="henrique@e-mail.com.br"
              variant="filled"
              fullWidth
              disabled
            />
            <CustomTextField
              label="Senha"
              type="password"
              defaultValue="********"
              variant="filled"
              fullWidth
              disabled
            />
          </Stack>
          <EditInfoButton>Editar Informações</EditInfoButton>
        </FormContainer>

        

    </Container>
  );
};

export default Profile;
