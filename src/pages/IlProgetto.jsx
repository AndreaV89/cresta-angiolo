import React from "react";
import { Container, Typography, Box, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import TerrainIcon from "@mui/icons-material/Terrain";
import ForestIcon from "@mui/icons-material/Forest";
import VerifiedIcon from "@mui/icons-material/Verified";

// Immagini
import aspettiStorici from "../assets/aspetti-storici.jpg";
import aspettiNaturalistici from "../assets/aspetti-naturalistici.jpg";
import aspettiGeomorfologici from "../assets/aspetti-geomorfologici.jpg";

export default function IlProgetto() {
  const navigate = useNavigate();

  // Immagini segnaposto
  const imgStoria = aspettiStorici;
  const imgNatura = aspettiNaturalistici;
  const imgGeo = aspettiGeomorfologici;

  // Stile comune per le immagini "Flottanti"
  const imageStyleBase = {
    width: "100%", // Mobile: larghezza piena
    maxWidth: "450px", // PC: larghezza massima fissa
    height: "300px",
    objectFit: "cover",
    borderRadius: "2px",
    boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
    marginBottom: "20px", // Spazio sotto l'immagine
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* TITOLO PRINCIPALE */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Il Progetto
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "italic",
            color: "secondary.main",
          }}
        >
          Una dorsale di storia, natura e fede tra Siena e Firenze
        </Typography>
      </Box>

      <div className="ink-separator"></div>

      {/* INTRODUZIONE ESTESA */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.2rem",
            textAlign: "justify",
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          <span
            style={{
              fontSize: "3.5rem",
              float: "left",
              lineHeight: 0.7,
              paddingRight: "15px",
              fontFamily: "UnifrakturMaguntia",
              color: "#B85C38",
            }}
          >
            L
          </span>
          a <strong>"Cresta"</strong> è un progetto pilota che unisce territori,
          frazioni e città, valorizzando una montagna che appartiene a tutti.
          [cite_start]La realizzazione di un Cammino sulla cresta dei Monti del
          Chianti che unisce due città meravigliose: Siena e Firenze, si snoda
          su strade bianche e silenziose [cite: 25-26].
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", textAlign: "justify", lineHeight: 1.8 }}
        >
          Questo prevede in prima battuta la creazione del Cammino di crinale,
          unendo le tre cime principali della catena:{" "}
          <strong>Monte Luco, Monte San Michele, Poggio di San Giusto</strong>.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", textAlign: "justify", lineHeight: 1.8 }}
        >
          Successivamente, rivolgerà la sua attenzione alle dorsali di{" "}
          <strong>
            Castellina in Chianti, Panzano, San Casciano e Tavarnelle
          </strong>
          . [cite_start]Su queste verranno individuate le rotte salienti legate
          alla transumanza e al culto micaelico riscoprendo piccole chiese e
          grandi abbazie [cite: 28-30].
        </Typography>
      </Container>

      {/* --- SEZIONI CON FLOAT (Stile Giornalistico/Libro) --- */}

      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {/* 1. ASPETTI STORICI (Immagine Flotta a DESTRA) */}
        <Box sx={{ p: { md: 2 } }}>
          {" "}
          {/* Container */}
          {/* IMMAGINE FLOAT RIGHT */}
          <Box
            component="img"
            src={imgStoria}
            sx={{
              ...imageStyleBase,
              border: "1px solid #B85C38",
              // RESPONSIVE FLOAT:
              float: { xs: "none", md: "right" }, // Mobile: Nessuno | PC: Destra
              marginLeft: { md: "40px" }, // Spazio a sinistra del testo
              transform: { md: "rotate(2deg)" }, // Leggera inclinazione solo su PC
            }}
          />
          {/* TESTO (Avvolge l'immagine) */}
          <Box sx={{ borderLeft: "4px solid #B85C38", pl: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
              <HistoryEduIcon sx={{ color: "#B85C38", fontSize: 36 }} />
              <Typography variant="h2" sx={{ fontSize: "2rem", mb: 0 }}>
                Aspetti Storici
              </Typography>
            </Box>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", lineHeight: 1.7 }}
            >
              Nello specifico della Cresta dell’Angiolo, oltre alla riscoperta
              del pellegrinaggio legato alla figura dell’Arcangelo Michele,
              bisogna dire che buona parte del cammino ricalca tracciati
              antichissimi: in particolare quelli etruschi che collegavano la
              Tuscia a Fiesole.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", lineHeight: 1.7 }}
            >
              [cite_start]La stessa viabilità sarà quella dell’antagonismo
              militare tra i due comuni medievali di Firenze e Siena, fino alla
              supremazia di Firenze; per finire in epoca moderna con la
              direzione dell’avanzata inglese verso Firenze durante l’estate del
              1944 [cite: 33-34].
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", lineHeight: 1.7 }}
            >
              Su queste strade nascono monasteri benedettini, castelli e torri
              medievali, e si intersecano le millenarie vie delle greggi
              transumanti.
            </Typography>
          </Box>
          {/* Clearfix per sicurezza (pulisce il float dopo il blocco) */}
          <Box sx={{ clear: "both" }} />
        </Box>

        {/* 2. ASPETTI NATURALISTICI (Immagine Flotta a SINISTRA) */}
        <Box sx={{ p: { md: 2 } }}>
          {/* IMMAGINE FLOAT LEFT */}
          <Box
            component="img"
            src={imgNatura}
            sx={{
              ...imageStyleBase,
              border: "1px solid #4F5D2F",
              float: { xs: "none", md: "left" }, // Mobile: Nessuno | PC: Sinistra
              marginRight: { md: "40px" }, // Spazio a destra del testo
              transform: { md: "rotate(-2deg)" },
            }}
          />

          <Box
            sx={{
              borderRight: { md: "4px solid #4F5D2F" },
              borderLeft: { xs: "4px solid #4F5D2F", md: "none" },
              pl: { xs: 3, md: 0 },
              pr: { md: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                gap: 2,
                justifyContent: { md: "flex-end" },
              }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: "2rem", mb: 0, color: "#4F5D2F" }}
              >
                Aspetti Naturalistici
              </Typography>
              <ForestIcon sx={{ color: "#4F5D2F", fontSize: 36 }} />
            </Box>
            <Typography
              variant="body1"
              paragraph
              sx={{
                textAlign: "justify",
                lineHeight: 1.7,
                textAlignLast: { md: "right" },
              }}
            >
              La natura e i panorami che si godono sul tragitto sono suggestivi
              e di estrema variabilità. [cite_start]La vista spazierà verso gli
              Appennini, la valle dell’Arno coi suoi calanchi, il Monte Amiata,
              le colline del Chianti e quelle a sud di Firenze [cite: 60-61].
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                textAlign: "justify",
                lineHeight: 1.7,
                textAlignLast: { md: "right" },
              }}
            >
              A volte il cammino transiterà lambendo vigneti e oliveti, fino a
              salire verso le parti boscose della parte sommitale, ammirando i
              folti sottoboschi di macchia mediterranea e felci.
              [cite_start]Marciando su strade bianche, sono poche le occasioni
              di incontrare persone e tante quelle di poter ascoltare la natura
              [cite: 62-63].
            </Typography>
          </Box>
          <Box sx={{ clear: "both" }} />
        </Box>

        {/* 3. ASPETTI GEOMORFOLOGICI (Immagine Flotta a DESTRA) */}
        <Box sx={{ p: { md: 2 } }}>
          {/* IMMAGINE FLOAT RIGHT */}
          <Box
            component="img"
            src={imgGeo}
            sx={{
              ...imageStyleBase,
              border: "1px solid #1A1A1A",
              float: { xs: "none", md: "right" },
              marginLeft: { md: "40px" },
              transform: { md: "rotate(1deg)" },
            }}
          />

          <Box sx={{ borderLeft: "4px solid #1A1A1A", pl: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
              <TerrainIcon sx={{ color: "#1A1A1A", fontSize: 36 }} />
              <Typography
                variant="h2"
                sx={{ fontSize: "2rem", mb: 0, color: "#1A1A1A" }}
              >
                Aspetti Geomorfologici
              </Typography>
            </Box>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", lineHeight: 1.7 }}
            >
              [cite_start]Quello che comunemente viene definito "Il crinale dei
              monti del Chianti" ha una peculiare forma a base triangolare, con
              tre versanti su cui si distribuiscono vari fiumi e torrenti (Pesa,
              Ema, Greve, Ombrone) [cite: 53-56].
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", lineHeight: 1.7 }}
            >
              Sul monte San Michele sgorgano le sorgenti di tanti fiumi toscani,
              un punto cardine del culto micaelico: l’acqua.
              [cite_start]Partendo da Siena si attraversa un territorio di
              terreni sabbiosi, per poi salire sul crinale arenaceo del
              "Macigno", e infine scendere verso Firenze incontrando terreni
              argillosi tipici della "pietraforte" [cite: 57-58].
            </Typography>
          </Box>
          <Box sx={{ clear: "both" }} />
        </Box>
      </Box>

      <div className="ink-separator"></div>

      {/* OBIETTIVI */}
      <Box sx={{ my: 8, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
          Obiettivi del Cammino
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {[
            "Creazione di un Cammino regionale stabile",
            "Recupero della sentieristica storica",
            "Valorizzazione del culto micaelico",
            "Sviluppo di un turismo lento e sostenibile",
            "Recupero delle testimonianze storico artistiche",
          ].map((goal, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                p: 3,
                width: "300px",
                borderTop: "3px solid #B85C38",
                bgcolor: "#FBF7F0",
              }}
            >
              <VerifiedIcon sx={{ color: "#B85C38", mb: 1, opacity: 0.7 }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              >
                {goal}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>

      {/* CALL TO ACTION */}
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
          p: 4,
          backgroundColor: "rgba(184, 92, 56, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#1A1A1A" }}>
          Pronto a partire?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/tappa-1")}
          sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
        >
          Esplora il Percorso
        </Button>
      </Box>
    </Container>
  );
}
