import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";

// Import Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageTemplate from "./pages/PageTemplate";

// --- DEFINIZIONE DEL TEMA "CARTA & INCHIOSTRO" ---
const theme = createTheme({
  palette: {
    background: {
      default: "#FBF7F0", // Carta Ingiallita/Crema
      paper: "#FBF7F0", // Anche i "fogli" sopra lo sfondo hanno lo stesso colore
    },
    primary: {
      main: "#B85C38", // Terra di Siena (Accent Principale: Link, Bottoni)
      contrastText: "#FBF7F0",
    },
    secondary: {
      main: "#4F5D2F", // Verde Oliva Scuro (Natura)
    },
    text: {
      primary: "#1A1A1A", // Nero Inchiostro (non puro)
      secondary: "#4F5D2F", // Usiamo il verde oliva per sottotitoli o info meno importanti
    },
    action: {
      active: "#B85C38", // Colore icone attive
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif', // Default per il corpo
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      color: "#1A1A1A",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      color: "#B85C38", // I titoli H2 in Terra di Siena
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontStyle: "italic", // Per citazioni o titoli decorativi
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: "none", // Niente tutto maiuscolo, più naturale
    },
  },
  shape: {
    borderRadius: 2, // Bordi leggermente smussati, ma li modificheremo con CSS
  },
  components: {
    // Personalizzazione Bottoni per sembrare "Timbri" o elementi naturali
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid transparent",
          "&:hover": {
            backgroundColor: "rgba(184, 92, 56, 0.1)", // Leggero tocco siena
            border: "1px solid #B85C38",
            borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px", // Bordo irregolare "schizzo"
          },
        },
        contained: {
          boxShadow: "none",
          borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px", // Effetto timbro irregolare
          "&:hover": {
            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
          },
        },
      },
    },
    // Personalizzazione Navbar per togliere l'aspetto "App" e renderla parte della pagina
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FBF7F0", // Stesso colore della carta
          color: "#1A1A1A", // Testo scuro
          boxShadow: "none", // Niente ombreggiatura 3D
          borderBottom: "2px solid #B85C38", // Una linea di inchiostro siena come separatore
        },
      },
    },
  },
});

// Stili Globali extra per effetti "Carta" e bordi irregolari
const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/paper-fibers.png")', // Texture carta opzionale
      },
      // Classe per le immagini stile "Polaroid Antica"
      ".polaroid": {
        backgroundColor: "#fff",
        padding: "10px 10px 40px 10px",
        boxShadow: "3px 3px 8px rgba(0,0,0,0.2)",
        transform: "rotate(-1deg)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "rotate(0deg) scale(1.02)",
          zIndex: 10,
        },
      },
      // Classe per separatori ornamentali
      ".ink-separator": {
        border: 0,
        height: "1px",
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(184, 92, 56, 0.75), rgba(0, 0, 0, 0))",
        margin: "40px 0",
      },
    }}
  />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/il-progetto"
            element={<PageTemplate title="Il Progetto" />}
          />
          <Route path="/il-logo" element={<PageTemplate title="Il Logo" />} />
          <Route
            path="/credenziale"
            element={<PageTemplate title="La Credenziale" />}
          />
          <Route
            path="/testimonium"
            element={<PageTemplate title="Testimonium" />}
          />
          <Route
            path="/ricettivita"
            element={<PageTemplate title="Ricettività" />}
          />
          <Route
            path="/tappa-1"
            element={<PageTemplate title="Tappa 1: Siena – Castelnuovo" />}
          />
          <Route
            path="/tappa-2"
            element={
              <PageTemplate title="Tappa 2: Castelnuovo – Montebenichi" />
            }
          />
          <Route
            path="/tappa-3"
            element={<PageTemplate title="Tappa 3: Montebenichi – La Massa" />}
          />
          <Route
            path="/tappa-4"
            element={
              <PageTemplate title="Tappa 4: La Massa – Monte San Michele" />
            }
          />
          <Route
            path="/tappa-5"
            element={
              <PageTemplate title="Tappa 5: Monte San Michele – Chiocchio" />
            }
          />
          <Route
            path="/tappa-6-bis"
            element={
              <PageTemplate title="Tappa 6 bis: Chiocchio – San Casciano" />
            }
          />
          <Route
            path="/tappa-7"
            element={<PageTemplate title="Tappa 7: San Casciano – Firenze" />}
          />
          <Route path="/news" element={<PageTemplate title="News" />} />
          <Route path="/gallery" element={<PageTemplate title="Gallery" />} />
          <Route path="/contatti" element={<PageTemplate title="Contatti" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
