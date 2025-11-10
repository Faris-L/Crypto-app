import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HeaderSpace = styled.div`
  height: 70px;
`;

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  max-width: 1000px;
  margin-right: auto;
  margin-bottom: 5vh;
  padding: 25px 5%;
  box-sizing: border-box;
  gap: 5%;
  color: #111;
  font-family: "Poppins", sans-serif;
  background-color: linear-gradient(45deg, #037d9fff, #00eaffff);

  img {
    width: 42%;
    height: auto;
    object-fit: contain;
  }

  .hero-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: left;

    h1 {
      font-size: 2.6rem;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(90deg, #00c6ff, #0072ff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: 1.3rem;
      font-weight: 500;
      color: #333;
      margin: 0;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: #555;
      margin-top: 5px;
      line-height: 1.6;
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    img {
      width: 65%;
    }

    .hero-text {
      width: 100%;
      text-align: center;
    }
  }
`;
