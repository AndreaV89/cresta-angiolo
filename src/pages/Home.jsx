import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Immagini
import logoFull from "../assets/logo-full.png";
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
      {/* --- SEZIONE HERO (MODIFICATA) --- */}
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh", // Ancora più alto per impatto scenico
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
            // Scuriamo un po' di più lo sfondo per far leggere bene il logo e il testo bianco
            backgroundColor: "rgba(0,0,0, 0.5)",
          },
        }}
      >
        <Container
          maxWidth="md"
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          {/* 1. IL LOGO FULL (Galleggiante) */}
          <Box
            component="img"
            src={logoFull}
            alt="La Cresta dell'Angiolo"
            sx={{
              width: "100%",
              maxWidth: "550px", // Bello grande
              height: "auto",
              mb: 3,
              // Effetto "Glow" bianco intorno al logo per staccarlo dallo sfondo scuro
              // Utile se il logo ha scritte nere
              filter: "drop-shadow(0 0 15px rgba(255,255,255, 0.6))",
            }}
          />

          {/* 2. I TITOLI (Ora in Bianco/Crema) */}
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: "#FBF7F0", // Colore Carta
              fontStyle: "italic",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)", // Ombra nera per leggibilità
            }}
          >
            Da Siena a Firenze
          </Typography>

          <Typography
            variant="h5"
            component="h3"
            sx={{
              color: "#B85C38", // Terra di Siena (Spicca bene sul nero)
              mb: 5,
              fontWeight: 400,
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Dedicato all'Arcangelo Michele, ricalcando orme antichissime.
          </Typography>

          {/* 3. BOTTONE AZIONE */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/il-progetto")}
            sx={{
              px: 6,
              py: 1.5,
              fontSize: "1.2rem",
              border: "1px solid #FBF7F0", // Bordo chiaro per eleganza
              boxShadow: "0 0 20px rgba(184, 92, 56, 0.4)", // Alone luminoso arancio
            }}
          >
            Scopri il Progetto
          </Button>
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

      {/* --- SEZIONE CARDS TAPPE --- */}
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: 4 } }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 4, color: "#1A1A1A" }}
        >
          Le Tappe del Cammino
        </Typography>

        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            py: 4,
            px: { xs: 2, md: 4 },
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
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {tappeData.map((tappa) => (
            <Card
              key={tappa.id}
              sx={{
                width: { xs: "280px", md: "320px", lg: "400px" },
                height: "500px",
                flexShrink: 0,
                borderRadius: "2px",
                border: "1px solid #B85C38",
                position: "relative",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
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
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        color: "#FBF7F0",
                        fontSize: "2.2rem",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        lineHeight: 1,
                        mt: 1,
                        fontFamily: "UnifrakturMaguntia",
                      }}
                    >
                      {tappa.title.replace(/Tappa \d+:? /, "")}
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
