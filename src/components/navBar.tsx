import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

type NavItem = {
  label: string;
  path: string;
  external_link?: string;
};

type NavBarProps = {
  navItems: NavItem[];
};

const NavBar = ({ navItems }: NavBarProps) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (path: string, external_link?: string) => {
    setMobileOpen(false);

    if (external_link) {
      window.open(external_link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: '#ffffff',
          borderBottom: '3px solid #bdbdbd',
        }}
      >
        <Toolbar
          sx={{
            minHeight: '4rem',
            px: { xs: 1.5, sm: 3 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: 'flex', sm: 'none' },
              color: '#424242',
              marginLeft: "0.5rem"
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 2,
              flexGrow: 1,
              justifyContent: 'flex-end',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.path, item.external_link)}
                sx={{
                  color: '#424242',
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  borderRadius: 2,
                  px: 2,
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() =>
                    handleNavClick(item.path, item.external_link)
                  }
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
