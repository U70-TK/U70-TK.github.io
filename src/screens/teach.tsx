import { Box, Typography } from "@mui/material";
import type {TeachingInfo} from "../components/teach-item";
import TeachingItem from "../components/teach-item";
import CopyRightBar from "../components/copyright-bar";

const teachingItems: TeachingInfo[] = [
    {
        courseNumber: "CS 431",
        courseTitle: "Data-Intensive Distributed Analytics",
        term: "Winter",
        year: "2026",
        role: "Teaching Assistant",
        link: "https://uwflow.com/course/cs431"
    },
    {
        courseNumber: "CS 136",
        courseTitle: "Elementary Algorithm Design and Data Abstraction",
        term: "Fall",
        year: "2025",
        role: "Teaching Assistant",
        link: "https://uwflow.com/course/cs136"
    },
    
];

const TeachingSrn = () => {
    return (
        <>
        <Box
            sx={{
                width: "80%",
                mx: "auto",
                px: 3,
                py: 6,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minHeight: "100vh",
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
                Teaching
            </Typography>

            {teachingItems.map((item) => (
                <TeachingItem
                    key={`${item.courseNumber}-${item.term}-${item.year}`}
                    item={item}
                />
            ))}
        </Box>
        <CopyRightBar />
        </>
    );
};

export default TeachingSrn;
