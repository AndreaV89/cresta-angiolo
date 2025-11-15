import React from "react";
import { Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h2" component="h1" sx={{ mt: 4 }}>
        Benvenuto sulla Cresta dell'Angiolo
      </Typography>
      <Typography variant="body1">
        Da Siena a Firenze, sui monti del Chianti.
      </Typography>
    </Container>
  );
}
