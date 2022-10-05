import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 1em;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  margin-bottom: 0.5em;
  border-radius: 0.25em;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.lightBgColor};
  a {
    display: block;
    padding: 1em;
    transition: color 0.3s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.accentColor};
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      <CoinList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinList>
    </Container>
  );
}

export default Coins;
