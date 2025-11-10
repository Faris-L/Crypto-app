import { useParams, Link } from "react-router-dom";
import { useCoin, useCoinHistory } from "../../queries/coins";
import { Sparklines } from "react-sparklines";
import { FaEuroSign, FaBitcoin, FaMedal, FaWater } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import { RiStockLine } from "react-icons/ri";
import {
  Page, Top, Left, Right, Rank, Icon, Name, Sym, Price,
  Divider, Bar, BarCol, ChartBox,
  H2, TwoCol, TwoColMt, StatList, StatRow, K, V, Card, LinksList, LinkItem, DescBox,
  Muted, Change, GlowLine, MainLine,IconWrap
} from "./coinpage.styled";


export default function CoinPage() {
  const { uuid } = useParams();
  const { data: coin, isLoading, isError } = useCoin(uuid);
  const { data: history = [] } = useCoinHistory(uuid, "7d");

  if (isLoading) return <Page>Loading…</Page>;
  if (isError || !coin) return <Page>Greška ili nema podataka.</Page>;
  console.log("uuid =", uuid);
  const n = (x, d = 2) =>
    x == null ? "—" : Number(x).toLocaleString(undefined, { maximumFractionDigits: d });

  const high = history.length ? Math.max(...history.map((p) => Number(p.price))) : null;


  let data = (history?.length
    ? history.map((h) => Number(h.price))
    : (coin.sparkline || []).map(Number)
  ).filter(Number.isFinite);

  if (data.length > 1) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    if (max - min === 0) {
      const bump = (min || 1) * 0.001;
      data = data.map((v, i) => v + (i % 2 ? bump : -bump));
    }
  }

  const updatedAgo = coin?.supply?.timestamp
    ? Math.round((Date.now() - coin.supply.timestamp * 1000) / 60000)
    : null;

 const stats = [
  { icon: <FaEuroSign />, k: "Price to EUR", v: n(coin.price) },
  { icon: <FaBitcoin />, k: "Price to BTC", v: `$ ${n(coin.btcPrice)}` },
  { icon: <FaMedal />, k: "Rank", v: `# ${coin.rank ?? "—"}` },
  { icon: <IoWaterOutline />, k: "24h volume", v: `$ ${n(coin["24hVolume"])}` },
  { icon: <RiStockLine />, k: "Market cap", v: `$ ${n(coin.marketCap)}` },
  {
    icon: <RiStockLine />,
    k: "Fully diluted market cap",
    v: `$ ${n(coin.fullyDilutedMarketCap)}`,
  },
  {
    icon: <FaWater />,
    k: "All-time high (daily avg.)",
    v: `$ ${n(coin.allTimeHigh?.price)}`,
  },
];

  return (
    <Page>
      <Top>
        <Left>
          <Rank>{coin.rank ?? "—"}</Rank>
          <Icon src={coin.iconUrl} alt={coin.name ?? "icon"} />
          <Name>{coin.name}</Name>
          <Sym>{coin.symbol}</Sym>
          <Price>${n(coin.price, 3)}</Price>
        </Left>
        <Right>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
        </Right>
      </Top>

      <Divider />

 
      <Bar>
        <BarCol align="left">Price chart</BarCol>
        <BarCol align="center">
          24h{" "}
          <Change $positive={Number(coin.change) >= 0}>
            {Number(coin.change) >= 0 ? "+" : ""}
            {n(coin.change, 2)} %
          </Change>
        </BarCol>
        <BarCol align="right">
          High <b>${n(high, 3)}</b>
        </BarCol>
      </Bar>

      <ChartBox>
        <Sparklines data={data} margin={8}>
          <GlowLine />
          <MainLine />
        </Sparklines>
      </ChartBox>

   
      <TwoCol>
        <div>
          <H2>Value statistics</H2>
          <Muted>
            An overview showing the statistics of {coin.name}, such as the base and quote
            currency, the rank, and trading volume.
          </Muted>

          <StatList>
            {stats.map((s) => (
              <StatRow key={s.k}>
                <IconWrap>{s.icon}</IconWrap>
                <K>{s.k}</K>
                <V>{s.v}</V>
              </StatRow>
            ))}
          </StatList>
        </div>

        <div>
          <H2>Supply information</H2>
          <Muted>
            View the total and circulating supply of {coin.name}, including details on how the
            supplies are calculated.
          </Muted>

          <Card>
            <StatRow $noBorder>
              <K>✅ <span>Verified supplies</span></K>
              <V />
            </StatRow>
            {updatedAgo != null && (
              <StatRow>
                <K>Updated</K>
                <V>{updatedAgo} minutes ago</V>
              </StatRow>
            )}
            <StatRow><K>Total supply</K><V>$ {n(coin.supply?.total)}</V></StatRow>
            <StatRow><K>Max supply</K><V>$ {coin.supply?.max ? n(coin.supply.max) : "—"}</V></StatRow>
            <StatRow><K>Circulating supply</K><V>$ {n(coin.supply?.circulating)}</V></StatRow>
          </Card>
        </div>
      </TwoCol>

     
      <TwoColMt>
        <div>
          <H2>What is {coin.name}</H2>
          {coin.description ? (
            <DescBox dangerouslySetInnerHTML={{ __html: coin.description }} />
          ) : (
            <DescBox>—</DescBox>
          )}
        </div>

        {Array.isArray(coin.links) && coin.links.length > 0 && (
          <div>
            <H2>Links</H2>
            <LinksList>
              {coin.links.map((l) => (
                <LinkItem key={(l.url || l.name || l.type) + Math.random()}>
                  <span className="kind">{l.name || l.type || "link"}</span>
                  <a
                    href={/^https?:\/\//i.test(l.url) ? l.url : `https://${l.url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.url?.replace(/^https?:\/\//i, "")}
                  </a>
                </LinkItem>
              ))}
            </LinksList>
          </div>
        )}
      </TwoColMt>
    </Page>
  );
}
