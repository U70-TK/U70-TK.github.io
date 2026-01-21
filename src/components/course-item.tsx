import {
    Paper,
    Box,
    Typography,
} from "@mui/material";

type CourseItemProps = {
    item: CourseInfo;
};

export type CourseInfo = {
  courseNumber: string;
  courseTitle: string;
  term: string;
  year: string;
  course_link: string;
};

const CourseItem = ({ item }: CourseItemProps) => {

  return (
        <>
            <Paper
                elevation={0}
                onClick={() => { window.open(item.course_link, "_blank"); }}
                sx={{
                    display: "flex",
                    p: 2,
                    gap: 3,
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                        backgroundColor: "#f5f5f5",
                    },
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 500 }}
                    >
                        {item.courseNumber}: {item.courseTitle}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ color: "text.secondary" }}
                    >
                        {item.term} {item.year}
                    </Typography>
                </Box>
            </Paper>
        </>
    );
};

export default CourseItem;