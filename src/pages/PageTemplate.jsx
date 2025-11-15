import React from "react";
import { Typography, Container } from "@mui/material";

export default function PageTemplate({ title }) {
  return (
    <Container>
      <Typography variant="h3" component="h1" sx={{ mt: 4 }}>
        {title}
      </Typography>
      <Typography variant="body1">Contenuto in arrivo...</Typography>
    </Container>
  );
}
