import React from "react";
import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1A1A1A", // Sfondo scuro "Inchiostro"
        color: "#FBF7F0", // Testo color carta
        pt: 8,
        pb: 4,
        mt: "auto", // Spinge il footer in fondo se la pagina è corta
        borderTop: "4px solid #B85C38", // Bordo superiore color Terra di Siena
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* COLONNA 1: IL PROGETTO */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontFamily: "UnifrakturMaguntia", color: "#B85C38" }}
            >
              La Cresta dell'Angiolo
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Montserrat",
                lineHeight: 1.8,
                mb: 2,
                opacity: 0.8,
              }}
            >
              Un cammino di crinale che unisce Siena e Firenze ricalcando orme
              antichissime, dedicato all'Arcangelo Michele.
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Montserrat", opacity: 0.8 }}
            >
              © 2025 Radici in Chianti Aps
            </Typography>
          </Grid>

          {/* COLONNA 2: PROMOTORI [cite: 9-13] */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "UnifrakturMaguntia", color: "#FBF7F0" }}
            >
              Enti Promotori
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li style={{ marginBottom: "8px" }}>Radici in Chianti Aps</li>
              <li style={{ marginBottom: "8px" }}>
                G.E.B Gruppo escursionistico della Berardenga
              </li>
              <li style={{ marginBottom: "8px" }}>
                Gruppo San Michele G.E.V del Chianti
              </li>
              <li style={{ marginBottom: "8px" }}>Chianti Live</li>
            </Box>
          </Grid>

          {/* COLONNA 3: COLLABORAZIONI [cite: 14-19] */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "UnifrakturMaguntia", color: "#FBF7F0" }}
            >
              Collaborazioni
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                fontSize: "0.9rem",
                opacity: 0.9,
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                C.A.I Sezione Valdarno Superiore
              </li>
              <li style={{ marginBottom: "8px" }}>Gruppo Trekking Impruneta</li>
              <li style={{ marginBottom: "8px" }}>Sant’Angelo Aps</li>
              <li style={{ marginBottom: "8px" }}>
                Gruppo Archeologico Salingolpe
              </li>
              <li style={{ marginBottom: "8px" }}>
                F.I.E Federazione Italiana Escursionisti
              </li>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(251, 247, 240, 0.2)" }} />

        {/* LINK RAPIDI A FONDO PAGINA */}
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <Link
              component="button"
              onClick={() => navigate("/contatti")}
              sx={{
                color: "#B85C38",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contatti
            </Link>
          </Grid>
          <Grid item>
            {/* Privacy Policy finta per ora */}
            <Link
              href="#"
              sx={{
                color: "#FBF7F0",
                textDecoration: "none",
                "&:hover": { color: "#B85C38" },
              }}
            >
              Privacy Policy
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
