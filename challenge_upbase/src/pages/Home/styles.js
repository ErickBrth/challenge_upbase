import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
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

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 6px 20px;
  border: ${(props) => (props.primary ? "none" : "1px solid #00000029")};
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  line-height: 16px;
  font-family: "Jura", sans-serif;

  background-color: ${(props) => (props.primary ? "#8000FF" : "#FFF")};
  color: ${(props) => (props.primary ? "#FFF" : "#000")};

  &:hover {
    background-color: ${(props) => (props.primary ? "#5a00cc" : "#E0E0E0")};
  }
`;

export const Card = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 24px;
  overflow: hidden;
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardContent = styled.div`
  margin-top: 18px;
`;

export const CardTitleLine = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  display: flex;
  color: #333;
  margin: 0 0 0 0;
`;

export const CardSubtitle = styled.p`
  font-size: 16px;
  display: flex;
  margin: 0;
`;
export const Infos = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const CardPrice = styled.p`
  font-size: 16px;
  display: flex;
  margin: 0;
  font-weight: 400;
`;

export const StarIcon = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const DailyRate = styled.h3`
  font-size: 16px;
  display: flex;
  margin: 0;
  gap: 4px;
`;

export const DailyText = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: bold;
`;
