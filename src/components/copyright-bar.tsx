import {
    Box,
    Typography 
} from "@mui/material";

const CopyRightBar = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "3rem",
                backgroundColor: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: "#ffffff",
                    opacity: 0.8,
                    fontSize: "0.9rem",
                }}
            >
                © {new Date().getFullYear()} Felix (Tiankuan) Wang. All rights reserved.
            </Typography>
        </Box>
    );
}

export default CopyRightBar;