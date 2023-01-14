import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;  
  margin-bottom: 16px;
  box-shadow: 0px 5px 5px grey;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active, &:hover{
    color: orangered;
  }
`;
