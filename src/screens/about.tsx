import {
    Box,
    Typography,
    Divider,
    Avatar,
    Grid,
} from "@mui/material";

import CopyRightBar from "../components/copyright-bar";

import IconButton from '@mui/material/IconButton';
import Portrait from "../assets/portrait.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const AboutSrn = () => {
    return (
        <div>
        <Box
            sx={{
                maxWidth: "70%",
                mx: "auto",
                px: 3,
                py: 6,
                display: "flex",
                flexDirection: "column",
                gap: 6,
            }}
        >
            <Grid
                container
                columnSpacing={6}
                alignItems="stretch"
                wrap="nowrap"
            >
                <Grid size={{ xs: 7, md: 7 }} >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 0,
                            height: "100%",
                            textAlign: "left",
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>
                            Felix (Tiankuan) Wang
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                            David Cheriton School of Computer Science, University of Waterloo
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                            <strong>Email:</strong> felix.wang[at]uwaterloo.ca
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 3 }}>
                            <strong>Office:</strong> DC 2555 (SWAG Lab)
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                lineHeight: 1.7,
                                mb: 2
                            }}
                        >
                            Hi! I'm Felix Wang. I am a <strong>graduate researcher</strong> and <strong>software developer</strong> currently working on my Computer Science MMath degree
                            at the <a href="https://cs.uwaterloo.ca/">University of Waterloo</a>, supervised by <a href="https://cs.uwaterloo.ca/~m2nagapp/">Dr. Mei Nagappan</a>.
                            Before this, I received my Bachelor of Computing Science (with First Class Honor) degree from the <a href="https://www.ualberta.ca/en/computing-science/index.html">University of Alberta</a>. I had the honor to work as 
                            a Research Assistant under the supervision of <a href="https://paulralph.name/">Dr. Paul Ralph</a> during my undergrad on an empirical software engineering project at Dalhousie University's Software Engineering Lab (DalSEL). 
                            I also participated in several traffic prediction projects under the guidance of Dr. Zesheng Cheng when I was an undergrad. 

                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                lineHeight: 1.7,
                                mb:2
                            }}
                        >
                            My research interests are primarily <strong>LLM for SE</strong>, <strong>Software Security</strong>, and <strong>Empirical Software Engineering</strong>. I'm not only interested in improving and evaluating LLM-based Code Generation Tools, but also exploring the 
                            practices surrounding their adoption in software development workflows in terms of functionality and security. 

                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                lineHeight: 1.7,
                                mb:4
                            }}
                        >
                            I had experience using <strong>Python, Typescript</strong>, and modern web frameworks like <strong>React</strong> and <strong>NestJS</strong> for projects. My experience spans across both front-end and back-end development, utilizing tools such as Docker, 
                            PostgreSQL, etc. I also have a keen interest in Deep Neural Networks, utilizing Pytorch to solve complex problems.

                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 5,
                            }}
                        >
                            <IconButton
                                aria-label="GitHub"
                                href="https://github.com/U70-TK"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: 5,
                                    color: "#24292e",
                                    backgroundColor: "#f5f5f5",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "#e0e0e0",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <GitHubIcon
                                    sx={{
                                        fontSize: 32,
                                    }}
                                />
                            </IconButton>

                            <IconButton
                                aria-label="Google-Scholar"
                                href="https://scholar.google.com/citations?user=Dy-4ApgAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: 5,
                                    color: "#24292e",
                                    backgroundColor: "#f5f5f5",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "#e0e0e0",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <i
                                    className="ai ai-google-scholar"
                                    style={{
                                        fontSize: "2.2rem",
                                    }}
                                />
                            </IconButton>

                            <IconButton
                                aria-label="LinkedIn"
                                href="https://www.linkedin.com/in/felix-wang-75b0b824b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: 5,
                                    color: "#24292e",
                                    backgroundColor: "#f5f5f5",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "#e0e0e0",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <LinkedInIcon 
                                    sx={{
                                        fontSize: 32,
                                    }}
                                    />
                            </IconButton>

                            <IconButton
                                aria-label="Email"
                                href="mailto:felix.wang@uwaterloo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: 5,
                                    color: "#24292e",
                                    backgroundColor: "#f5f5f5",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "#e0e0e0",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <EmailIcon 
                                    sx={{
                                        fontSize: 32,
                                    }}
                                    />
                            </IconButton>

                            <IconButton
                                aria-label="Instagram"
                                href="https://www.instagram.com/felixwangggg"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: 5,
                                    color: "#24292e",
                                    backgroundColor: "#f5f5f5",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        backgroundColor: "#e0e0e0",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <InstagramIcon
                                    sx={{
                                        fontSize: 32,
                                    }}
                                />
                            </IconButton>

                        </Box>
                    </Box>
                </Grid>

                <Grid
                    size={{ xs: 5, md: 5 }}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        minWidth: { xs: 260, sm: 320, md: 360, lg: 400 }
                    }}
                >
                    <Avatar
                        src={Portrait}
                        variant="square"
                        sx={{
                            width: "100%",
                            minWidth: { xs: 260, sm: 320, md: 360, lg: 400 },
                            aspectRatio: "4 / 5",
                            height: "auto",
                            objectFit: "cover",
                        }}
                    />
                </Grid>
            </Grid>

            <Divider />

            <Box>
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 3 }}>
                    News
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            <strong>Sep 4th, 2025</strong>
                        </Typography>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            Joined SWAG Lab as a graduate researcher. Glad to start working with Dr. Mei Nagappan and the team!
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            <strong>July 18th, 2025</strong>
                        </Typography>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            Concluded my work on the empirical software engineering project with DalSEL. Looking forward to future collaborations!
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            <strong>June 27th, 2025</strong>
                        </Typography>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            Graduated from University of Alberta with First Class Honor in Bachelor of Computing Science.
                        </Typography>
                    </Box>
                    
                </Box>
            </Box>

            <Divider />

            <Box>
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 3 }}>
                    Awards
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            <strong>Feb, 2025</strong>
                        </Typography>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            Graduate Research Studentship (GRS) - University of Waterloo
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            <strong>Feb, 2025</strong>
                        </Typography>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            International Master's Award of Excellence (IMAE) - University of Waterloo
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            <strong>June, 2024</strong>
                        </Typography>
                        <Typography sx={{ minWidth: 110, color: "text.secondary", fontSize: "1rem" }}>
                            Dean's Honor Roll - University of Alberta
                        </Typography>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
        
        <CopyRightBar />
    </div>
    );
};

export default AboutSrn;
