import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  margin: 25px auto;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #e8e8e8;
  transition: background-color 0.15s ease;
  height: 52px;
  cursor: pointer;
`;

export const Th = styled.th`
  text-align: left;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

export const Td = styled.td`
  padding: 8px 10px;
  font-size: 14px;
  vertical-align: middle;
`;

export const Rank = styled.div`
  font-weight: 600;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 26px;
  height: 26px;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
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
  width: 120px;
  height: 32px;
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
  font-size: 17px;
  cursor: pointer;
  color: #e66;
  transition: transform 0.12s ease;
  &:hover {
    transform: scale(1.15);
  }
`;

export const DetailsBtn = styled.button`
  background: none;
  border: none;
  font-size: 17px;
  cursor: pointer;
  transition: transform 0.12s ease;
  &:hover {
    transform: scale(1.15);
  }
`;
