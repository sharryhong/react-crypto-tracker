import { useOutletContext } from "react-router-dom";
import { QuotesType } from "./Coin";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  line-height: 2;
  border-bottom: 1px solid #eee;
`;
const Title = styled.span`
  font-weight: bold;
  flex: 1 1 0;
`;
const Value = styled.span`
  flex: 1 1 0;
`;

function CoinPrice() {
  const { price } = useOutletContext<QuotesType>();

  return (
    <ul>
      {price &&
        Object.entries(price).map(([key, value]) => (
          <Item key={key}>
            <Title>{key} : </Title>
            <Value> {value}</Value>
          </Item>
        ))}
    </ul>
  );
}

export default CoinPrice;
