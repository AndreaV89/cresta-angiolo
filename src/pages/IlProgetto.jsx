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

  // Immagini segnaposto (puoi cambiarle con le tue)
  const imgStoria = aspettiStorici;
  const imgNatura = aspettiNaturalistici;
  const imgGeo = aspettiGeomorfologici;

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

      {/* INTRODUZIONE ESTESA (Il tuo testo completo) */}
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
          frazioni e città, valorizzando una montagna che appartiene a tutti. La
          realizzazione di un Cammino sulla cresta dei Monti del Chianti che
          unisce due città meravigliose: Siena e Firenze, si snoda su strade
          bianche e silenziose, attraverso territori selvaggi se paragonati alle
          dolci colline del Chianti classico [cite: 25-26].
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", textAlign: "justify", lineHeight: 1.8 }}
        >
          Questo prevede in prima battuta la creazione del Cammino di crinale,
          unendo le tre cime principali della catena:{" "}
          <strong>Monte Luco, Monte San Michele, Poggio di San Giusto</strong>,
          che sarà la colonna vertebrale di un organismo ben più
          articolato[cite: 27].
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", textAlign: "justify", lineHeight: 1.8 }}
        >
          Successivamente, rivolgerà la sua attenzione alle dorsali di{" "}
          <strong>
            Castellina in Chianti, Panzano, San Casciano e Tavarnelle e i Monti
            Scalari fino a Poggio alla Croce
          </strong>
          . Su queste verranno individuate le rotte salienti legate alla
          transumanza e al culto micaelico riscoprendo piccole chiese e grandi
          abbazie, recuperando e restituendo al loro antico splendore strade
          lastricate e sentieri fino a pochi anni fa percorsi dai nostri
          antenati [cite: 28-30].
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", textAlign: "justify", lineHeight: 1.8 }}
        >
          Tutto questo senza tralasciare lo studio, il restauro, il recupero di
          patrimoni artistici civili e religiosi legati alle finalità del
          progetto, auspicando su questo la massima collaborazione possibile di
          autorità civili e religiose[cite: 31].
        </Typography>
      </Container>

      {/* --- SEZIONI TEMATICHE A ZIG-ZAG (Con il tuo testo specifico) --- */}

      <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {/* 1. ASPETTI STORICI (Testo SX - Foto DX) */}
        {/* Uso 'sm' invece di 'md' per mantenere il layout affiancato anche su tablet */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={7}>
            <Box sx={{ p: 3, borderLeft: "4px solid #B85C38" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}
              >
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
                militare tra i due comuni medievali di Firenze e Siena, fino
                alla supremazia di Firenze; per finire in epoca moderna con la
                direzione dell’avanzata inglese verso Firenze durante l’estate
                del 1944 [cite: 33-34].
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
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box
              component="img"
              src={imgStoria}
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "2px",
                border: "1px solid #B85C38",
                p: 0.5,
                bgcolor: "#fff",
                transform: "rotate(1deg)",
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        {/* 2. ASPETTI NATURALISTICI (Foto SX - Testo DX) */}
        {/* Qui metto prima il Grid item dell'immagine così sta sicuramente a sinistra */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Box
              component="img"
              src={imgNatura}
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "2px",
                border: "1px solid #4F5D2F",
                p: 0.5,
                bgcolor: "#fff",
                transform: "rotate(-1deg)",
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                p: 3,
                borderRight: { sm: "4px solid #4F5D2F" },
                borderLeft: { xs: "4px solid #4F5D2F", sm: "none" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  gap: 2,
                  justifyContent: { sm: "flex-end" },
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
                  textAlignLast: { sm: "right" },
                }}
              >
                La natura e i panorami che si godono sul tragitto sono
                suggestivi e di estrema variabilità. [cite_start]La vista
                spazierà verso gli Appennini, la valle dell’Arno coi suoi
                calanchi, il Monte Amiata, le colline del Chianti e quelle a sud
                di Firenze [cite: 60-61].
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                  lineHeight: 1.7,
                  textAlignLast: { sm: "right" },
                }}
              >
                A volte il cammino transiterà lambendo vigneti e oliveti, fino a
                salire verso le parti boscose della parte sommitale, ammirando i
                folti sottoboschi di macchia mediterranea e felci.
                [cite_start]Marciando su strade bianche, sono poche le occasioni
                di incontrare persone e tante quelle di poter ascoltare la
                natura [cite: 62-63].
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* 3. ASPETTI GEOMORFOLOGICI (Testo SX - Foto DX) */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={7}>
            <Box sx={{ p: 3, borderLeft: "4px solid #1A1A1A" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}
              >
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
                [cite_start]Quello che comunemente viene definito "Il crinale
                dei monti del Chianti" ha una peculiare forma a base
                triangolare, con tre versanti su cui si distribuiscono vari
                fiumi e torrenti (Pesa, Ema, Greve, Ombrone) [cite: 53-56].
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify", lineHeight: 1.7 }}
              >
                Sul monte San Michele sgorgano le sorgenti di tanti fiumi
                toscani, un punto cardine del culto micaelico: l’acqua.
                [cite_start]Partendo da Siena si attraversa un territorio di
                terreni sabbiosi, per poi salire sul crinale arenaceo del
                "Macigno", e infine scendere verso Firenze incontrando terreni
                argillosi tipici della "pietraforte" [cite: 57-58].
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box
              component="img"
              src={imgGeo}
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "2px",
                border: "1px solid #1A1A1A",
                p: 0.5,
                bgcolor: "#fff",
                transform: "rotate(1deg)",
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <div className="ink-separator"></div>

      {/* OBIETTIVI (Il tuo elenco) */}
      <Box sx={{ my: 8, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
          Obiettivi del Cammino
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            "Creazione di un Cammino regionale stabile",
            "Recupero della sentieristica storica",
            "Valorizzazione del culto micaelico",
            "Sviluppo di un turismo lento e sostenibile",
            "Recupero delle testimonianze storico artistiche",
          ].map((goal, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  height: "100%",
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
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CALL TO ACTION FINALE */}
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
