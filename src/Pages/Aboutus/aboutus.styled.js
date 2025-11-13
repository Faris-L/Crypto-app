import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  padding: 60px 20px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1100px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: 0.2s ease;

  hr {
    width: 80%;
    margin: 18px auto;
    border: 0;
    border-top: 1px solid #e5e7eb;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  margin-bottom: 18px;
`;

export const Name = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: #1e293b;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 0.94rem;
  color: #334155;
  line-height: 1.45;
  width: 80%;
  margin: 0 auto 20px;
`;

export const GitHubIcon = styled.i`
  font-size: 48px;
  color: #0f172a;
  transition: 0.2s ease;

  &:hover {
    color: #1e40af;
    transform: scale(1.1);
  }
`;
