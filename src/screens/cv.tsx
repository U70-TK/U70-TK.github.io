import { Box, Typography } from "@mui/material";
import CVPdf from "../assets/resume.pdf";

const CVSrn = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 0, sm: 0 },
        py: { xs: 0, sm: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 720, md: 980, lg: 1100 },
          height: { xs: "calc(100vh - 32px)", sm: "calc(100vh - 64px)" },
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
            variant="h3"
            sx={{ fontWeight: 600 }}
        >
          Curriculum Vitae
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            px: { xs: 1, sm: 3 },
            py: { xs: 1, sm: 2 },
          }}
        >
          Hasn't been updated ... yet
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            px: { xs: 0, sm: 3 },
            pb: { xs: 1, sm: 2 },
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
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CVSrn;
