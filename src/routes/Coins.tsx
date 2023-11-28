import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.5s ease-in;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.div`
  text-align: center;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
`;
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });
  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                }}
                state={{
                  name: coin.name,
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={`${coin.symbol} icon`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}
export default Coins;
