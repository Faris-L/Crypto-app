import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #e8e8e8;
`;

export const Th = styled.th`
  text-align: left;
  padding: 14px 10px;
  font-weight: 600;
  font-size: 15px;
  color: #333;
`;

export const Td = styled.td`
  padding: 12px 10px;
  font-size: 15px;
`;

export const Rank = styled.div`
  font-weight: 600;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

export const Symbol = styled.div`
  font-size: 12px;
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
  width: 140px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const FavoriteBtn = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #e66;
  &:hover {
    scale: 1.15;
  }
`;

export const DetailsBtn = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    scale: 1.15;
  }
`;
