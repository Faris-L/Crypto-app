import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 220px;
  margin: 30px auto 10px auto;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: #384152;
  color: #cfd8de;
  border: none;
  border-radius: 10px;
  padding: 10px 12px 10px 40px;
  font-size: 15px;
  height: 38px;
  outline: none;
  transition: all 0.2s ease;

  ::placeholder {
    color: #9aa3ab;
  }

  &:focus {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
  }
`;

export const Icon = styled.i`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-48%);
  font-size: 18px;
  color: #cbd5e1;
  pointer-events: none;
  transition: color 0.2s ease;
`;
