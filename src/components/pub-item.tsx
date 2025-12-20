import {
    Paper,
    Box,
    Typography,
    IconButton,
    Collapse,
} from "@mui/material";
import { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Thumbnail, { type ThumbnailItem } from "../components/thumbnail";

export type PubItem = {
    image: ThumbnailItem;
    title: string;
    authors: string;
    conference: string;
    year: string;
    abstract: string;
    pdfUrl?: string;
    websiteUrl?: string;
};

type PublicationItemProps = {
    item: PubItem;
};

const PublicationItem = ({ item }: PublicationItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Paper
            elevation={0}
            sx={{
                display: "flex",
                gap: 3,
                p: 2,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                transition: "background-color 0.2s ease",
                "&:hover": {
                    backgroundColor: "#f5f5f5",
                },
            }}
        >

            <Thumbnail item={item.image} />

            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 500 }}
                >
                    {item.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                >
                    {item.authors}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "text.secondary",
                        fontStyle: "italic",
                    }}
                >
                    {item.conference}, {item.year}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        mt: 1,
                    }}
                >
                    {item.pdfUrl && (
                        <IconButton
                            aria-label="PDF"
                            size="small"
                            href={item.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <PictureAsPdfIcon />
                        </IconButton>
                    )}

                    {item.websiteUrl && (
                        <IconButton
                            aria-label="Website"
                            size="small"
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LanguageIcon />
                        </IconButton>
                    )}

                    <IconButton
                        aria-label="Abstract"
                        size="small"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <ExpandMoreIcon
                            sx={{
                                transform: open
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                            }}
                        />
                    </IconButton>
                </Box>

                <Collapse in={open}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mt: 2,
                            lineHeight: 1.6,
                            textAlign: "left"
                        }}
                    >
                        {item.abstract}
                    </Typography>
                </Collapse>
            </Box>
        </Paper>
    );
};

export default PublicationItem;
