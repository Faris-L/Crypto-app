import styled from "styled-components";
import { SparklinesLine, SparklinesSpots } from "react-sparklines";


export const Page = styled.div`
  padding: 16px 16px 40px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Right = styled.div`
  display: flex;
  gap: 18px;
  a {
    color: #3b82f6;
    text-decoration: none;
  }
`;

export const Rank = styled.span`
  font-weight: 600;
`;

export const Icon = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  display: block;
`;

export const Name = styled.strong`
  font-size: 18px;
`;

export const Sym = styled.span`
  opacity: 0.75;
`;

export const Price = styled.b`
  margin-left: 6px;
`;

export const Divider = styled.div`
  height: 1px;
  background: #c7d2fe;
  margin: 10px 0 6px;
`;


export const Bar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #c7d2fe;
  margin-bottom: 10px;
`;

export const BarCol = styled.div`
  text-align: ${({ align }) => align || "left"};
  font-weight: ${({ align }) => (align ? 600 : 400)};
`;

export const Change = styled.b`
  color: ${({ $positive }) => ($positive ? "green" : "crimson")};
`;


export const ChartBox = styled.div`
  width: 100%;
  height: 440px;
  background: #eaf0ff66;
  border: 1px solid #c9d6ff;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 24px;

  svg {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }
`;

export const GlowLine = styled(SparklinesLine).attrs(() => ({
  style: {
    stroke: "rgba(17, 60, 255, 0.28)",
    strokeWidth: 1,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
}))``;


export const MainLine = styled(SparklinesLine).attrs(() => ({
  style: {
    stroke: "#113cff",
    strokeWidth: 1,
    fill: "#113cff",
    fillOpacity: 0.14,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
}))``;


export const H2 = styled.h2`
  font-size: 28px;
  margin: 8px 0 8px;
`;

export const Muted = styled.p`
  opacity: 0.75;
  margin: 0 0 8px 0;
`;

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
`;


export const TwoColMt = styled(TwoCol)`
  margin-top: 24px;
`;

export const StatList = styled.div`
  border: 1px solid #dbe4ff;
  border-radius: 8px;
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
  border-top: ${({ $noBorder }) => ($noBorder ? "0" : "1px solid #eef2ff")};
`;

export const K = styled.span`
  opacity: 0.8;
`;

export const V = styled.strong``;

export const Card = styled.div`
  background: #eef5ff;
  border: 1px solid #d6e4ff;
  border-radius: 8px;
  padding: 8px 10px;
`;

export const LinksList = styled.div`
  border: 1px solid #dbe4ff;
  border-radius: 8px;
`;

export const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 12px 14px;
  border-top: 1px solid #eef2ff;

  &:first-child {
    border-top: 0;
  }

  .kind {
    opacity: 0.8;
    min-width: 90px;
    display: inline-block;
  }

  a {
    color: #3b82f6;
    text-decoration: none;
  }
`;

export const DescBox = styled.div`
  border: 1px solid #dbe4ff;
  border-radius: 8px;
  padding: 12px 14px;
`;
export const IconWrap = styled.div`
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;   
  font-size: 20px;
`;