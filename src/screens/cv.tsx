import { Box, Typography } from "@mui/material";
import CVPdf from "../assets/resume.pdf";

const CVSrn = () => {
    return (
        <Box
            sx={{
                width: "80vw",
                height: "calc(100vh - 6rem)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 600,
                    px: 3,
                    py: 2,
                }}
            >
                Curriculum Vitae
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 400,
                    px: 3,
                    py: 2,
                }}
            >
                Hasn't been updated ... yet
            </Typography>

            <Box
                sx={{
                    flexGrow: 1,
                    px: 3,
                }}
            >
                <iframe
                    src={CVPdf}
                    title="CV PDF"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                />
            </Box>
        </Box>
    );
};

export default CVSrn;
