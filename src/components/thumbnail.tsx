import { Box } from "@mui/material";

export type ThumbnailItem = {
    path: string;
    title: string;
};

type ThumbnailProps = {
    item: ThumbnailItem;
};

const Thumbnail = ({ item }: ThumbnailProps) => (
    <Box
        sx={{
            width: "15rem",
            height: "10rem",
            flexShrink: 0,
            overflow: "hidden",
            borderRadius: 1,
        }}
    >
        <Box
            component="img"
            src={item.path}
            alt={item.title}
            sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scale(1.1)",
            }}
        />
    </Box>
);

export default Thumbnail;
