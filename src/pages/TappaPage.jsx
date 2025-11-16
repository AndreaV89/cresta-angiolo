import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import HikingIcon from "@mui/icons-material/Hiking";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Ora accettiamo lo "slug" (il nome nell'URL) invece dell'ID numerico
export default function TappaPage({ slug }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // API: Cerchiamo le pagine filtrando per "slug"
    fetch(
      `http://cresta-angiolo-backend.local/wp-json/wp/v2/pages?slug=${slug}`
    )
      .then((res) => res.json())
      .then((pageData) => {
        // WordPress restituisce sempre un array (lista), anche se trova una sola pagina.
        // Prendiamo il primo risultato (pageData[0])
        if (pageData && pageData.length > 0) {
          setData(pageData[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );

  // Se non troviamo la pagina (es. slug sbagliato)
  if (!data)
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <Typography>Pagina non trovata.</Typography>
      </Container>
    );

  const acf = data.dettagli_tappa || {};
  const content = data.content.rendered;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* TITOLO TAPPA (Gothic) */}
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", mb: 1 }}
      >
        {data.title.rendered}
      </Typography>

      <div className="ink-separator"></div>

      {/* SCHEDA DATI */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          my: 4,
          backgroundColor: "rgba(184, 92, 56, 0.05)",
          border: "1px dashed #B85C38",
          borderRadius: "2px",
        }}
      >
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          <Grid item xs={4} md={3}>
            <HikingIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
            >
              Lunghezza
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "UnifrakturMaguntia", color: "text.primary" }}
            >
              {acf.chilometri ? acf.chilometri : "--"} km
            </Typography>
          </Grid>
          <Grid item xs={4} md={3}>
            <LandscapeIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 1 }}
            />
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
            >
              Dislivello
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "UnifrakturMaguntia", color: "text.primary" }}
            >
              {acf.dislivello ? acf.dislivello : "--"}
            </Typography>
          </Grid>
          <Grid item xs={4} md={3}>
            <AccessTimeIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 1 }}
            />
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
            >
              Difficoltà
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontFamily: "UnifrakturMaguntia", color: "text.primary" }}
            >
              {acf.difficolta ? acf.difficolta : "--"}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* DESCRIZIONE */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "italic",
            color: "secondary.main",
          }}
        >
          Il Percorso
        </Typography>
        <Typography
          component="div"
          dangerouslySetInnerHTML={{ __html: content }}
          sx={{
            fontFamily: "Montserrat",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            "& p": { marginBottom: 2 },
          }}
        />
      </Box>

      {/* MAPPA PLACEHOLDER */}
      <Box
        sx={{
          mt: 6,
          height: "400px",
          bgcolor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #1A1A1A",
        }}
      >
        <Typography variant="h5">Mappa GPX in arrivo...</Typography>
      </Box>
    </Container>
  );
}
