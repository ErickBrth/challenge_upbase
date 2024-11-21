
import styled from 'styled-components';

export const NavBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #8000ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavItem = styled.div`
  color: ${(props) => (props.active ? '#fff' : '#ddd')};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  svg {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;
