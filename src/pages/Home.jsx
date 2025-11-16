import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Immagini
import logoFull from "../assets/logo-full.jpg";
import heroImage from "../assets/hero-bg.jpg";
import imgTappa1 from "../assets/tappa1.jpg";
import imgTappa2 from "../assets/tappa2.jpg";
import imgTappa3 from "../assets/tappa3.jpg";
import imgTappa4 from "../assets/tappa4.jpg";
import imgTappa5 from "../assets/tappa5.jpg";
import imgTappa6 from "../assets/tappa6.jpg";
import imgTappa7 from "../assets/tappa7bis.jpg";

// Dati delle tappe
const tappeData = [
  {
    id: 1,
    title: "Tappa 1: Siena – Castelnuovo",
    slug: "tappa-1",
    img: imgTappa1,
  },
  {
    id: 2,
    title: "Tappa 2: Castelnuovo – Montebenichi",
    slug: "tappa-2",
    img: imgTappa2,
  },
  {
    id: 3,
    title: "Tappa 3: Montebenichi – La Massa",
    slug: "tappa-3",
    img: imgTappa3,
  },
  {
    id: 4,
    title: "Tappa 4: La Massa – Monte San Michele",
    slug: "tappa-4",
    img: imgTappa4,
  },
  {
    id: 5,
    title: "Tappa 5: Monte San Michele – Chiocchio",
    slug: "tappa-5",
    img: imgTappa5,
  },
  {
    id: 6,
    title: "Tappa 6 bis: Chiocchio – San Casciano",
    slug: "tappa-6-bis",
    img: imgTappa6,
  },
  {
    id: 7,
    title: "Tappa 7: San Casciano – Firenze",
    slug: "tappa-7",
    img: imgTappa7,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 8 }}>
      {/* --- SEZIONE HERO (INVARIATA) --- */}
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "85vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0, 0.3)",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Paper
            elevation={10}
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              backgroundColor: "rgba(251, 247, 240, 0.95)",
              backdropFilter: "blur(5px)",
              borderRadius: "4px",
              border: "1px solid #B85C38",
              outline: "4px double #B85C38",
              outlineOffset: "-10px",
            }}
          >
            <Box
              component="img"
              src={logoFull}
              alt="La Cresta dell'Angiolo"
              sx={{
                width: "100%",
                maxWidth: "450px",
                height: "auto",
                mixBlendMode: "multiply",
                mb: 2,
              }}
            />

            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ color: "text.primary", fontStyle: "italic" }}
            >
              Da Siena a Firenze
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              sx={{ color: "secondary.main", mb: 4, fontWeight: 400 }}
            >
              Dedicato all'Arcangelo Michele, ricalcando orme antichissime.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/il-progetto")}
              sx={{ px: 5, py: 1.5, fontSize: "1.1rem" }}
            >
              Scopri il Progetto
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* --- SEZIONE INTRODUZIONE --- */}
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        <div className="ink-separator" style={{ marginBottom: "40px" }}></div>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Un cammino di crinale
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", lineHeight: 1.9, textAlign: "justify" }}
        >
          La <span style={{ color: "#B85C38", fontWeight: 600 }}>"Cresta"</span>{" "}
          è un progetto pilota che unisce territori, frazioni e città,
          valorizzando una montagna che appartiene a tutti.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", lineHeight: 1.9, textAlign: "justify" }}
        >
          Un percorso che si snoda su strade bianche e silenziose, attraverso
          territori selvaggi se paragonati alle dolci colline del Chianti
          classico. Unisce le tre cime principali della catena:{" "}
          <span style={{ fontStyle: "italic" }}>
            Monte Luco, Monte San Michele e Poggio di San Giusto.
          </span>
        </Typography>
      </Container>

      {/* --- SEZIONE CARDS TAPPE (SCROLL ORIZZONTALE) --- */}
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: 4 } }}>
        <div className="ink-separator" style={{ marginBottom: "40px" }}></div>{" "}
        {/* Padding ridotto su mobile per sfruttare tutto lo schermo */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 4, color: "#1A1A1A" }}
        >
          Le Tappe del Cammino
        </Typography>
        {/* CONTENITORE SCROLLABILE */}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto", // Abilita lo scroll orizzontale
            gap: 3, // Spazio tra le card
            py: 4, // Padding verticale per non tagliare le ombre
            px: { xs: 2, md: 4 }, // Padding laterale interno

            // Stile della barra di scorrimento (Scrollbar)
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-track": {
              background: "#EFEBE2",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#B85C38",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": { background: "#8f452b" },

            // Supporto per lo scorrimento fluido su touch screen
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {tappeData.map((tappa) => (
            <Card
              key={tappa.id}
              sx={{
                // DIMENSIONI FISSE PER L'ASPETTO VERTICALE
                width: { xs: "280px", md: "320px" }, // Larghezza fissa
                height: "500px", // Altezza notevole (Verticale)

                flexShrink: 0, // Impedisce alle card di schiacciarsi
                borderRadius: "2px",
                border: "1px solid #B85C38",
                position: "relative",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)", // Si alza invece di zoomare
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardActionArea
                onClick={() => navigate(`/${tappa.slug}`)}
                sx={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${tappa.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "flex-end",
                    position: "relative",
                    // Sfumatura più alta per coprire bene il testo verticale
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "70%",
                      background:
                        "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.6) 50%, rgba(0,0,0,0) 100%)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      pb: 4,
                    }}
                  >
                    {/* Numero Tappa decorativo */}
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#B85C38",
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      TAPPA {tappa.id}
                    </Typography>

                    {/* Titolo */}
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        color: "#FBF7F0",
                        fontSize: "2.2rem", // Titolo grande
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        lineHeight: 1,
                        mt: 1,
                        fontFamily: "UnifrakturMaguntia",
                      }}
                    >
                      {tappa.title.replace(/Tappa \d+:? /, "")}{" "}
                      {/* Rimuove "Tappa X" dal titolo per non ripeterlo */}
                    </Typography>

                    <Button
                      variant="text"
                      sx={{
                        color: "#B85C38",
                        mt: 2,
                        p: 0,
                        fontSize: "0.9rem",
                        "&:hover": {
                          bgcolor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Scopri il percorso &rarr;
                    </Button>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
