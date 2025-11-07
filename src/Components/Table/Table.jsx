import {
  Table,
  Th,
  Td,
  Tr,
  Rank,
  Logo,
  NameBox,
  Name,
  Symbol,
  Price,
  Volume,
  MarketCap,
  ChartBox,
  Actions,
  FavoriteBtn,
  DetailsBtn
} from "./table.styled";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinsTable = ({ coins }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Rank</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>24h Volume</Th>
          <Th>MarketCap</Th>
          <Th>Chart</Th>
          <Th></Th>
        </Tr>
      </thead>

      <tbody>
        {coins.map((coin) => (
          <Tr key={coin.uuid}>
            <Td>
              <Rank>{coin.rank}</Rank>
            </Td>

            <Td>
              <NameBox>
                <Logo src={coin.iconUrl} />
                <div>
                  <Name>{coin.name}</Name>
                  <Symbol>{coin.symbol}</Symbol>
                </div>
              </NameBox>
            </Td>

            <Td>
              <Price>${Number(coin.price).toLocaleString()}</Price>
            </Td>

            <Td>
              <Volume>${Number(coin["24hVolume"]).toLocaleString()}</Volume>
            </Td>

            <Td>
              <MarketCap>${Number(coin.marketCap).toLocaleString()}</MarketCap>
            </Td>

            <Td>
            <ChartBox>
                <Sparklines data={coin.sparkline?.map(Number)}>
                <SparklinesLine style={{ strokeWidth: 2 }} />
                </Sparklines>
            </ChartBox>
            </Td>

            <Td>
              <Actions>
                <FavoriteBtn>❤</FavoriteBtn>
                <DetailsBtn>🔍</DetailsBtn>
              </Actions>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoinsTable;
