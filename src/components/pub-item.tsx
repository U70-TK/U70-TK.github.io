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
        // KEY: stack on phones, row on larger screens
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 3 },
        p: 2,
        borderRadius: 2,
        border: "1px solid #e0e0e0",
        transition: "background-color 0.2s ease",
        "&:hover": { backgroundColor: "#f5f5f5" },

        // Safety: prevent any child from creating horizontal overflow
        width: "100%",
        minWidth: 0,
        overflowX: "clip",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: "100%", sm: 160, md: 180 },
          maxWidth: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          mr: { xs: 10, sm: 10}
        }}
      >
        <Box sx={{ width: "100%", maxWidth: { xs: 280, sm: "100%" }}}>
          <Thumbnail item={item.image} />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            textAlign: "left",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textAlign: "left",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {item.authors}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            textAlign: "left",
            overflowWrap: "anywhere",
          }}
        >
          {item.conference}, {item.year}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            flexWrap: "wrap",
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
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
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
              textAlign: "left",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
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
