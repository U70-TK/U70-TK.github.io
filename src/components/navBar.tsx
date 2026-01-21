import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

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

    const handleNavClick = (path: string, external_link?: string) => {
        if (external_link) {
            window.open(external_link, "_blank", "noopener,noreferrer");
        } else {
            navigate(path);
        }
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                width: '100%',
                left: 0,
                backgroundColor: '#ffffff',
                borderBottom: '3px solid #bdbdbd',
                boxSizing: 'border-box',
            }}
        >
            <Toolbar
                sx={{
                    minHeight: '4rem',
                    px: 3,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                    }}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item.path}
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
    );
};

export default NavBar;
