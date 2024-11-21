import styled from "styled-components";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, TextField } from "@mui/material";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
`;

export const WelcomeText = styled.h1`
  font-size: 24px;
  align-self: start;
`;

export const ImageProfile = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 114px; 
  height: 114px;
  border-radius: 50%;
  object-fit: cover;
  
`;

export const ProfileName = styled.p`
  margin-top: 15px;
  display: flex;
  font-weight: bold;
  font-size: 20px;
`;

export const EditButton = styled(Button)`
  display: flex;
  align-items: center;
  color: #8000ff !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-size: 20px !important;
  font-family: "Jura", sans-serif !important;
  padding: 8px 16px;
  background-color: transparent;

  &:hover {
    background-color: rgba(128, 0, 255, 0.1);
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #8000ff;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  width: 100%;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
`;


export const InfoIcon = styled.div`
  color: #8000ff;
  margin-bottom: 5px;
  font-size: 24px ;
`;

export const FormContainer = styled(Box)`
background-color: #FFF;
padding: 16px;
margin-top: 16px;
`;

export const CustomTextField = styled(TextField)(() => ({
    fontFamily: '"Jura", sans-serif',
    "& .MuiInputBase-root": {
      fontFamily: '"Jura", sans-serif',
      "&.Mui-disabled": {
        backgroundColor: "#D9D9D9",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: '"Jura", sans-serif',
    },
  }));

  export const EditInfoButton = styled(Button)`
  background-color: #8000ff !important;
  color: white !important;
  text-transform: none;
  margin-top: 20px !important;
  width: 100%;
  font-family: "Jura", sans-serif !important;
  font-size: 16px !important;
  font-weight: bold;
  border-radius: 20px;
  &:hover {
    background-color: #6a00cc;
  }
`;