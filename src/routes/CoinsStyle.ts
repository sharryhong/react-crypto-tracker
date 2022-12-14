import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0 1em;
  margin: 0 auto;
  max-width: 560px;
`;
export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
export const BackButton = styled(Link)`
  position: absolute;
  left: 0;
  /* color: ${(props) => props.theme.bgColor}; */
  /* background-color: ${(props) => props.theme.bgColor}; */
  border: 0;
  cursor: pointer;
`;
export const CoinList = styled.ul``;
export const Coin = styled.li`
  margin-bottom: 0.5em;
  border-radius: 0.25em;
  /* color: ${(props) => props.theme.textColor}; */
  background-color: ${(props) => props.theme.lightBgColor};
  a {
    display: flex;
    align-items: center;
    padding: 1em;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.accentColor};
`;
export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5em;
`;
export const ThemeButton = styled.button`
  position: absolute;
  right: 0;
  padding: 0.25em 0.5em;
  font-size: 0.875rem;
  border-radius: 0.25em;
`;
