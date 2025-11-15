import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logoCda from "../assets/logo.png";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const navigate = useNavigate();

  const buildMenuTree = (flatItems) => {
    const map = {};
    const tree = [];
    flatItems.forEach((item) => {
      map[item.ID] = { ...item, child_items: [] };
    });
    flatItems.forEach((item) => {
      if (item.parent_id !== 0 && map[item.parent_id]) {
        map[item.parent_id].child_items.push(map[item.ID]);
      } else {
        tree.push(map[item.ID]);
      }
    });
    return tree;
  };

  useEffect(() => {
    fetch("http://cresta-angiolo-backend.local/wp-json/cresta/v1/menu")
      .then((response) => response.json())
      .then((data) => {
        const treeStructure = buildMenuTree(data);
        setMenuItems(treeStructure);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore menu:", error);
        setLoading(false);
      });
  }, []);

  const handleOpenMenu = (event, menuId) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuId(menuId);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenMenuId(null);
  };

  const handleNavigate = (url) => {
    try {
      const path = new URL(url).pathname;
      navigate(path);
    } catch {
      navigate(url);
    }
    handleCloseMenu();
  };

  if (loading) {
    return (
      <AppBar position="static">
        <Toolbar>
          <CircularProgress color="inherit" />
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="sticky">
      {/* Aumentato il padding verticale (py) a 2.5 per alzare la barra */}
      <Toolbar sx={{ justifyContent: "space-between", py: 2.5 }}>
        {/* LOGO - SOLO SCUDO */}
        <Box
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            // Abbiamo rimosso il gap perché c'è solo l'immagine
          }}
        >
          <img
            src={logoCda}
            alt="Logo La Cresta dell'Angiolo"
            style={{
              height: "100px", // Aumentata la dimensione del logo
              width: "auto",
              filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.15))", // Ombra leggermente più marcata
              transition: "transform 0.3s ease", // Effetto fluido se vuoi animarlo in futuro
            }}
          />
        </Box>

        {/* MENU DI NAVIGAZIONE */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {" "}
          {/* Aumentato il gap tra i pulsanti */}
          {menuItems.map((item) => {
            const hasSubmenu = item.child_items && item.child_items.length > 0;

            if (hasSubmenu) {
              return (
                <div key={item.ID}>
                  <Button
                    color="inherit"
                    endIcon={<ExpandMoreIcon sx={{ color: "#B85C38" }} />}
                    onClick={(e) => handleOpenMenu(e, item.ID)}
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }} // Font leggermente più grande e leggibile
                  >
                    {item.title}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenuId === item.ID}
                    onClose={handleCloseMenu}
                    PaperProps={{
                      sx: {
                        bgcolor: "#FBF7F0",
                        border: "1px solid #B85C38",
                        mt: 1.5, // Distanzia un po' la tendina dalla navbar più alta
                      },
                    }}
                  >
                    {item.child_items.map((subItem) => (
                      <MenuItem
                        key={subItem.ID}
                        onClick={() => handleNavigate(subItem.url)}
                        sx={{
                          fontFamily: "Montserrat",
                          fontSize: "0.95rem",
                          py: 1.5, // Voci del menu più spaziate per facilitare il click
                          "&:hover": { bgcolor: "rgba(184, 92, 56, 0.1)" },
                        }}
                      >
                        {subItem.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              );
            } else {
              return (
                <Button
                  key={item.ID}
                  color="inherit"
                  onClick={() => handleNavigate(item.url)}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.title}
                </Button>
              );
            }
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
