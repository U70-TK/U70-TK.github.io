import { Box, Typography } from "@mui/material";
import CVPdf from "../assets/resume.pdf";
import CopyRightBar from "../components/copyright-bar";

const CVSrn = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
            width: "80%",
            maxWidth: { xs: "100%", sm: 720, md: 980, lg: 1100 },
            mx: "auto",
            px: { xs: 2, sm: 3 },
            py: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,

            flex: "1 1 auto",
            minHeight: 0,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600, textAlign: "center" }}>
          Curriculum Vitae
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 400, textAlign: "center" }}>
          Hasn't been updated ... yet
        </Typography>

        <Box
          sx={{
            flex: 1,
            mt: 2,
            minHeight: 0,
          }}
        >
          <Box
            component="iframe"
            src={CVPdf}
            title="CV PDF"
            sx={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: { xs: 0, sm: 2 },
              minHeight: { xs: 720, sm: 960 }
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mt: "auto" }}>
        <CopyRightBar />
      </Box>
    </Box>
  );
};

export default CVSrn;
