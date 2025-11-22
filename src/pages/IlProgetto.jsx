import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu"; // Icona Storia
import TerrainIcon from "@mui/icons-material/Terrain"; // Icona Geomorfologia
import ForestIcon from "@mui/icons-material/Forest"; // Icona Natura

export default function IlProgetto() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* TITOLO PRINCIPALE */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
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

      {/* INTRODUZIONE / VISIONE [cite: 25-27] */}
      <Box sx={{ my: 6 }}>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.15rem", textAlign: "justify", mb: 3 }}
        >
          <span
            style={{
              fontSize: "3rem",
              float: "left",
              lineHeight: 0.8,
              paddingRight: "10px",
              fontFamily: "UnifrakturMaguntia",
              color: "#B85C38",
            }}
          >
            L
          </span>
          a <strong>"Cresta"</strong> è un progetto pilota che unisce territori,
          frazioni e città, anche molto diversi tra loro, valorizzando una
          montagna che appartiene a tutti. La realizzazione di un Cammino sulla
          cresta dei Monti del Chianti che unisce due città meravigliose: Siena
          e Firenze, che si snoda su strade bianche, silenziose, attraverso
          territori selvaggi, se paragonati alle dolci colline del tanto famoso
          Chianti è soltanto il punto di partenza di un progetto di più ampio
          respiro.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.15rem", textAlign: "justify" }}
        >
          Questo prevede in prima battuta la creazione del Cammino di crinale,
          sui Monti del Chianti, unendo le tre cime principali della catena:
          <strong>Monte Luco, Monte San Michele, Poggio di San Giusto</strong>,
          che sarà la colonna vertebrale di un organismo ben più articolato.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.15rem", textAlign: "justify" }}
        >
          Successivamente, rivolgerà la sua attenzione alle dorsali di{" "}
          <strong>
            Castellina in Chianti, Panzano, San Casciano e Tavarnelle e i Monti
            Scalari fino a Poggio alla Croce
          </strong>
          . Su queste verranno individuate le rotte salienti legate alla
          transumanza e al culto micaelico riscoprendo piccole chiese e grandi
          abbazie; ridisegnando o valorizzando anelli di escursionismo di
          prossimità collegando le piccole frazioni comunali con la Cresta,
          recuperando e restituendo al loro antico splendore strade lastricate e
          sentieri fino a pochi anni fa percorsi dai nostri antenati.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.15rem", textAlign: "justify" }}
        >
          Tutto questo senza tralasciare lo studio, il restauro, il recupero di
          patrimoni artistici civili e religiosi legati alle finalità del
          progetto, auspicando su questo la massima collaborazione possibile di
          autorità civili e religiose.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.15rem", textAlign: "justify" }}
        >
          Nello specifico della Cresta dell’Angiolo, oltre alla vocazione
          principale, cioè la riscoperta del pellegrinaggio che dal meridione
          della penisola muoveva verso i monasteri del nord, legato alla figura
          importantissima dell’Arcangelo Michele, bisogna dire che buona parte
          del cammino ricalca tracciati antichissimi: in particolare quelli
          etruschi che collegavano la Tuscia a Fiesole e alle città etrusche
          sopra gli appennini; la stessa viabilità sarà quella dell’antagonismo
          militare tra i due comuni medievali di Firenze e Siena, con le
          battaglie, gli assedi, le lotte per il predominio, durate per secoli
          fino alla supremazia di Firenze; per finire in epoca moderna con la
          direzione dell’avanzata inglese verso Firenze durante l’estate del
          1944.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.15rem", textAlign: "justify" }}
        >
          Su queste strade nascono e proliferano monasteri benedettini, specie
          Camaldolesi e Vallombrosani, castelli, castellari e torri medievali, e
          si intersecano le millenarie vie delle greggi transumanti che univano
          le pianure costiere ai pascoli montani dell’Appennino. Sul monte San
          Michele sgorgano le sorgenti di tanti fiumi toscani, per non
          tralasciare un altro punto cardine del culto micaelico: l’acqua.
        </Typography>
      </Box>

      {/* --- NUOVE SEZIONI TEMATICHE --- */}

      {/* 1. ASPETTI STORICI [cite: 64-72] */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          border: "1px solid #B85C38",
          backgroundColor: "rgba(184, 92, 56, 0.03)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
          <HistoryEduIcon sx={{ color: "#B85C38", fontSize: 40 }} />
          <Typography variant="h2" sx={{ fontSize: "2.2rem", mb: 0 }}>
            Aspetti Storici
          </Typography>
        </Box>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, textAlign: "justify" }}
        >
          Il territorio della Cresta è centrale nella storia, soprattutto nei
          collegamenti del nostro paese. Escluso l’attraversamento trasversale
          delle greggi transumanti, praticamente mai perduto, fu via di
          collegamento e commercio per gli etruschi, di pellegrinaggio micaelico
          verso nord prima, e cristiano verso Roma poi.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, textAlign: "justify" }}
        >
          È stata una via militare durante le guerre medievali tra Firenze e
          Siena, per finire in epoca moderna con la direzione dell’avanzata
          inglese verso Firenze nell'estate del 1944. Su queste strade nascono e
          proliferano monasteri benedettini, specie Camaldolesi e Vallombrosani,
          castelli, castellari e torri medievali. Da non dimenticare il periodo
          di occupazione longobarda, a cui si deve tanto sulle intitolazioni
          religiose legate al culto di San Michele.
        </Typography>
      </Paper>

      {/* 2. ASPETTI NATURALISTICI [cite: 59-63] */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          border: "1px solid #4F5D2F",
          backgroundColor: "rgba(79, 93, 47, 0.03)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
          <ForestIcon sx={{ color: "#4F5D2F", fontSize: 40 }} />{" "}
          {/* Colore Verde Oliva */}
          <Typography
            variant="h2"
            sx={{ fontSize: "2.2rem", mb: 0, color: "#4F5D2F" }}
          >
            Aspetti Naturalistici
          </Typography>
        </Box>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, textAlign: "justify" }}
        >
          La natura e i panorami che si godono sul tragitto sono suggestivi e di
          estrema variabilità. La vista spazierà verso gli Appennini, la valle
          dell’Arno coi suoi calanchi, il Monte Amiata, le colline del Chianti e
          quelle a sud di Firenze.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, textAlign: "justify" }}
        >
          A volte il cammino transiterà lambendo vigneti e oliveti, fino a
          salire verso le parti boscose della parte sommitale, ammirando i folti
          sottoboschi di macchia mediterranea e felci, tra boschi cedui e di
          conifere. Marciando prevalentemente su strade bianche, sono poche le
          occasioni di incontrare persone e tante quindi quelle di poter
          ascoltare la natura nelle sue varie forme.
        </Typography>
      </Paper>

      {/* 3. ASPETTI GEOMORFOLOGICI [cite: 52-58] */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 6,
          border: "1px solid #1A1A1A",
          backgroundColor: "rgba(0,0,0, 0.02)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
          <TerrainIcon sx={{ color: "#1A1A1A", fontSize: 40 }} />
          <Typography
            variant="h2"
            sx={{ fontSize: "2.2rem", mb: 0, color: "#1A1A1A" }}
          >
            Aspetti Geomorfologici
          </Typography>
        </Box>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, textAlign: "justify" }}
        >
          Quello che comunemente viene definito "Il crinale dei monti del
          Chianti" unisce le cime di Monte Luco (753m) e Poggio di San Giusto
          (642m) passando per la maggiore altura del Monte San Michele (893m
          S.l.m.).
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, textAlign: "justify" }}
        >
          La sua peculiarità è una forma a base triangolare, con tre versanti su
          cui si distribuiscono vari fiumi e torrenti (Pesa, Ema, Greve,
          Ombrone), che scaturiscono prevalentemente dalle arenarie del "Macigno
          del Chianti". Partendo da Siena si attraversa un territorio di colline
          dolci e terreni sabbiosi, per poi salire lungo il crinale arenaceo, e
          infine scendere verso Firenze incontrando terreni argillosi tipici
          della "pietraforte".
        </Typography>
      </Paper>

      <div className="ink-separator"></div>

      {/* OBIETTIVI [cite: 37-41] */}
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
          Obiettivi
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            "Creazione di un Cammino regionale stabile",
            "Recupero della sentieristica storica",
            "Valorizzazione del culto micaelico",
            "Sviluppo di un turismo lento e sostenibile",
            "Recupero delle testimonianze storico artistiche",
          ].map((goal, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{ p: 2, borderBottom: "2px solid rgba(184, 92, 56, 0.3)" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  {goal}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
