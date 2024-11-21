import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export const RegisterButton = () => {
  const handleClick = () => {
    console.log('Cadastrar imóvel clicado');
  };

  return (
    <Button
      onClick={handleClick}
      variant="text"
      startIcon={<AddIcon />}
      sx={{
        color: '#8000ff', 
        fontWeight: 'bold', 
        textTransform: 'none',
        fontSize: '16px',
        fontFamily: 'Jura, sans-serif'

      }}
    >
      Cadastrar imóvel
    </Button>
  );
};


