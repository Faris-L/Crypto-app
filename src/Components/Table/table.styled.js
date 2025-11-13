import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
  font-size: 17px;
`;


export const Tr = styled.tr`
  border-bottom: 1px solid #e8e8e8;
  transition: background-color 0.15s ease;
  height: 72px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 14px 18px;
  font-weight: 600;
  font-size: 17px;
  color: #222;
`;

export const Td = styled.td`
  padding: 14px 18px;
  font-size: 16px;
  vertical-align: middle;
`;

export const Rank = styled.div`
  font-weight: 600;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Logo = styled.img`
  width: 38px;
  height: 38px;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 17px;
`;

export const Symbol = styled.div`
  font-size: 14px;
  color: #777;
`;

export const Price = styled.div`
  font-weight: 600;
  color: #000;
`;

export const Volume = styled.div`
  color: #444;
`;

export const MarketCap = styled.div`
  color: #444;
`;

export const ChartBox = styled.div`
  width: 160px;
  height: 46px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Actions = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const FavoriteBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #e66;
  transition: transform 0.12s ease, color 0.12s ease;
  &:hover {
    transform: scale(1.25);
    color: #ff4d4d;
  }
`;

export const DetailsBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.12s ease, color 0.12s ease;
  &:hover {
    transform: scale(1.25);
    color: #1e90ff;
  }
`;
