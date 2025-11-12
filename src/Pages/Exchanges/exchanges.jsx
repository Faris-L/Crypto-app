import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { ExchangesWrapper } from "./exchanges.styled";

export default function Exchanges() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // da, namerno sam koristio useEffect ovde.
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ExchangesWrapper>
      {!showMessage ? (
        <Loader color="blue" size="lg" />
      ) : (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1>
            Ok zasto si ovde vise od 10 sekundi? Receno nam je da ne radimo ovu
            stranicu, ok dobro evo ti nagradu. [insert prize here]... da nemam ti
            nagradu, ada idi samo do coinsa vise ne citaj ovo.
          </h1>
          <NavLink
            to="/coins"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              fontSize: "1.2rem",
              textDecoration: "none",
              color: "#007bff",
            }}
          >
            Go to Coins →
          </NavLink>
        </div>
      )}
    </ExchangesWrapper>
  );
}
