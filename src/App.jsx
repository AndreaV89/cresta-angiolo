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
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import PageTemplate from "./pages/PageTemplate";
import TappaPage from "./pages/TappaPage";

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
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontFamily: '"UnifrakturMaguntia", cursive', // FONT GOTICO
      fontSize: "3.5rem",
      fontWeight: 400,
      color: "#1A1A1A",
      letterSpacing: "0.05em", // Il gotico respira meglio con un po' di spazio
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"UnifrakturMaguntia", cursive',
      fontSize: "2.8rem",
      fontWeight: 400,
      color: "#B85C38",
      letterSpacing: "0.04em",
    },
    h3: {
      fontFamily: '"UnifrakturMaguntia", cursive',
      fontSize: "2.2rem",
      fontWeight: 400,
      letterSpacing: "0.03em",
    },
    h4: {
      // Per i sottotitoli, magari usiamo il Montserrat in corsivo per staccare dal gotico pesante
      fontFamily: '"Montserrat", sans-serif',
      fontStyle: "italic",
      fontSize: "1.5rem",
      color: "#4F5D2F",
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"UnifrakturMaguntia", cursive',
      fontSize: "1.8rem",
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.05em",
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.7, // Migliora la leggibilità del testo lungo
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

          {/* Pagine statiche */}
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

          {/* LE TAPPE - Ora collegate tramite "slug" */}
          <Route path="/tappa-1" element={<TappaPage slug="tappa-1" />} />
          <Route path="/tappa-2" element={<TappaPage slug="tappa-2" />} />
          <Route path="/tappa-3" element={<TappaPage slug="tappa-3" />} />
          <Route path="/tappa-4" element={<TappaPage slug="tappa-4" />} />
          <Route path="/tappa-5" element={<TappaPage slug="tappa-5" />} />
          <Route
            path="/tappa-6-bis"
            element={<TappaPage slug="tappa-6-bis" />}
          />
          <Route path="/tappa-7" element={<TappaPage slug="tappa-7" />} />

          <Route path="/news" element={<PageTemplate title="News" />} />
          <Route path="/gallery" element={<PageTemplate title="Gallery" />} />
          <Route path="/contatti" element={<PageTemplate title="Contatti" />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
