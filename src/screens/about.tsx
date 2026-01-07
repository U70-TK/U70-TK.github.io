import {
  Box,
  Typography,
  Divider,
  Avatar,
  Grid,
} from "@mui/material";

import CopyRightBar from "../components/copyright-bar";

import IconButton from "@mui/material/IconButton";
import Portrait from "../assets/portrait.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const AboutSrn = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "clip",
      }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: { xs: "100%", sm: 720, md: 980, lg: 1100 },
          mx: "auto",
          px: { xs: 2, sm: 3 },
          py: { xs: 3, sm: 6 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, sm: 6 },
          // extra safety
          overflowX: "clip",
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="flex-start"
        >
          {/* Portrait: show on top for mobile, on the right for desktop */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              order: { xs: 0, md: 1 },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "flex-start",
              minWidth: 0, // IMPORTANT: prevents flex overflow on small screens
            }}
          >
            <Box
              sx={{
                width: { xs: "78%", sm: 340, md: 360, lg: 400 },
                maxWidth: 420,
                minWidth: 0,
              }}
            >
              <Avatar
                src={Portrait}
                variant="square"
                sx={{
                  width: "100%",
                  aspectRatio: { xs: "1 / 1", sm: "4 / 5" },
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: { xs: 3, sm: 0 },
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          {/* Text */}
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              order: { xs: 1, md: 0 },
              minWidth: 0, // IMPORTANT: prevents long text from forcing overflow
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                height: "100%",
                textAlign: "left",
                minWidth: 0,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.65rem", sm: "2.1rem" },
                  lineHeight: 1.2,
                  overflowWrap: "anywhere",
                }}
              >
                Felix (Tiankuan) Wang
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1.0rem", sm: "1.25rem" },
                  overflowWrap: "anywhere",
                }}
              >
                David Cheriton School of Computer Science, University of Waterloo
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1.0rem", sm: "1.25rem" },
                  overflowWrap: "anywhere",
                }}
              >
                <strong>Email:</strong> felix.wang[at]uwaterloo.ca
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: "1.0rem", sm: "1.25rem" },
                  overflowWrap: "anywhere",
                }}
              >
                <strong>Office:</strong> DC 2555 (SWAG Lab)
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  mb: 2,
                  fontSize: { xs: "0.98rem", sm: "1rem" },
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  "& a": {
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  },
                }}
              >
                Hi! I'm Felix Wang. I am a <strong>graduate researcher</strong> and{" "}
                <strong>software developer</strong> currently working on my Computer
                Science MMath degree at the{" "}
                <a href="https://cs.uwaterloo.ca/">University of Waterloo</a>,
                supervised by{" "}
                <a href="https://cs.uwaterloo.ca/~m2nagapp/">Dr. Mei Nagappan</a>.
                Before this, I received my Bachelor of Computing Science (with First
                Class Honor) degree from the{" "}
                <a href="https://www.ualberta.ca/en/computing-science/index.html">
                  University of Alberta
                </a>
                . I had the honor to work as a Research Assistant under the
                supervision of <a href="https://paulralph.name/">Dr. Paul Ralph</a>{" "}
                during my undergrad on an empirical software engineering project at
                Dalhousie University's Software Engineering Lab (DalSEL). I also
                participated in several traffic prediction projects under the
                guidance of Dr. Zesheng Cheng when I was an undergrad.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  mb: 2,
                  fontSize: { xs: "0.98rem", sm: "1rem" },
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                My research interests are primarily <strong>LLM for SE</strong>,{" "}
                <strong>Software Security</strong>, and{" "}
                <strong>Empirical Software Engineering</strong>. I'm not only
                interested in improving and evaluating LLM-based Code Generation
                Tools, but also exploring the practices surrounding their adoption in
                software development workflows in terms of functionality and
                security.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  mb: { xs: 3, sm: 4 },
                  fontSize: { xs: "0.98rem", sm: "1rem" },
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                I had experience using <strong>Python, Typescript</strong>, and modern
                web frameworks like <strong>React</strong> and <strong>NestJS</strong>{" "}
                for projects. My experience spans across both front-end and back-end
                development, utilizing tools such as Docker, PostgreSQL, etc. I also
                have a keen interest in Deep Neural Networks, utilizing Pytorch to
                solve complex problems.
              </Typography>

              {/* Social buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 1.25, sm: 2.5 },
                  minWidth: 0,
                }}
              >
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/U70-TK",
                    icon: <GitHubIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />,
                  },
                  {
                    label: "Google-Scholar",
                    href: "https://scholar.google.com/citations?user=Dy-4ApgAAAAJ&hl=en",
                    icon: (
                      <i
                        className="ai ai-google-scholar"
                        style={{ fontSize: "1.8rem" }}
                      />
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/felix-wang-75b0b824b/",
                    icon: <LinkedInIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />,
                  },
                  {
                    label: "Email",
                    href: "mailto:felix.wang@uwaterloo.ca",
                    icon: <EmailIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />,
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/felixwangggg",
                    icon: <InstagramIcon sx={{ fontSize: { xs: 24, sm: 32 } }} />,
                  },
                ].map((b) => (
                  <IconButton
                    key={b.label}
                    aria-label={b.label}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: { xs: "3.25rem", sm: "5rem" },
                      height: { xs: "3.25rem", sm: "5rem" },
                      borderRadius: 3,
                      color: "#24292e",
                      backgroundColor: "#f5f5f5",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {b.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 3 }}>
            News
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              gap: 2.25,
              minWidth: 0,
            }}
          >
            {[
              {
                date: "Sep 4th, 2025",
                text: "Joined SWAG Lab as a graduate researcher. Glad to start working with Dr. Mei Nagappan and the team!",
              },
              {
                date: "July 18th, 2025",
                text: "Concluded my work on the empirical software engineering project with DalSEL. Looking forward to future collaborations!",
              },
              {
                date: "June 27th, 2025",
                text: "Graduated from University of Alberta with First Class Honor in Bachelor of Computing Science.",
              },
            ].map((n) => (
              <Box
                key={n.date}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 0.75, sm: 3 },
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    minWidth: { sm: 140 },
                    color: "text.secondary",
                    fontSize: "1rem",
                    overflowWrap: "anywhere",
                  }}
                >
                  <strong>{n.date}</strong>
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "1rem",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  }}
                >
                  {n.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 3 }}>
            Awards
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              gap: 2.25,
              minWidth: 0,
            }}
          >
            {[
              { date: "Feb, 2025", text: "Graduate Research Studentship (GRS) - University of Waterloo" },
              { date: "Feb, 2025", text: "International Master's Award of Excellence (IMAE) - University of Waterloo" },
              { date: "June, 2024", text: "Dean's Honor Roll - University of Alberta" },
            ].map((a) => (
              <Box
                key={a.date + a.text}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 0.75, sm: 3 },
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    minWidth: { sm: 140 },
                    color: "text.secondary",
                    fontSize: "1rem",
                    overflowWrap: "anywhere",
                  }}
                >
                  <strong>{a.date}</strong>
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "1rem",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  }}
                >
                  {a.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ width: "100%", mt: 6, overflowX: "clip" }}>
        <CopyRightBar />
      </Box>
    </Box>
  );
};

export default AboutSrn;
