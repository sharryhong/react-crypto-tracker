import styled from "styled-components";

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: ${(props) => props.theme.lightBgColor};
  border-radius: 0.25em;
`;
export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemLabel = styled.strong`
  font-weight: bold;
  margin-bottom: 0.5em;
`;
export const Description = styled.p`
  margin: 1em 0%;
`;
