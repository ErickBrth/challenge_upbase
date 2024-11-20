import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeText = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  background-color: ${(props) => (props.primary ? '#8000FF' : '#CCC')};
  color: ${(props) => (props.primary ? '#FFF' : '#000')};

  &:hover {
    background-color: ${(props) => (props.primary ? '#5a00cc' : '#E0E0E0')};
  }
`;

export const Card = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;
