import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import React from "react";
import { Button } from "@mui/material";


export const ArrowBack = () => {
  const handleClick = () => {
    console.log("Cadastrar imóvel clicado");
    // Adicione a lógica para navegação ou ação aqui
  };

  return (
    <Button
      onClick={handleClick}
      
      sx={{
        color: "#8000ff",
        fontWeight: "bold",
        textTransform: "none",
        padding: 0,
        minWidth: "35px",
        fontFamily: "Jura, sans-serif",
      }}
    >
        <ArrowBackOutlinedIcon fontSize="large"/>
    </Button>
  );
};
