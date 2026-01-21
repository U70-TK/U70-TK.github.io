import { Box, Typography } from "@mui/material";
import type {CourseInfo} from "../components/course-item";
import CourseItem from "../components/course-item";
import CopyRightBar from "../components/copyright-bar";

const courseItems: CourseInfo[] = [
    {
        courseNumber: "CS 846",
        courseTitle: "Empirical Software Evolution",
        term: "Fall",
        year: "2025",
        course_link: "https://plg.uwaterloo.ca/~migod/846/current/"
    },
    {
        courseNumber: "CS 858",
        courseTitle: "Trustworthy Machine Learning: A systems-security approach",
        term: "Fall",
        year: "2025",
        course_link: "https://uwflow.com/course/cs858"
    },
    {
        courseNumber: "CS 846",
        courseTitle: "LLMs for Software Engineering",
        term: "Winter",
        year: "2026",
        course_link: "https://cs.uwaterloo.ca/~m2nagapp/courses/CS846/1261/"
    },
    {
        courseNumber: "CS 747",
        courseTitle: "Formal Reasoning with Proof Assistants",
        term: "Winter",
        year: "2026",
        course_link: "https://cs.uwaterloo.ca/~yizhou/courses/cs747-2026wi/"
    }
];

const CourseSrc = () => {
    return (
        <>
        <Box
            sx={{
                maxWidth: "80%",
                minHeight: "100vh",
                mx: "auto",
                py: 6,
                display: "flex",
                flexDirection: "column",
                gap: 4,
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
                Courses
            </Typography>

            {courseItems.map((item) => (
                <CourseItem
                    key={`${item.courseNumber}-${item.term}-${item.year}`}
                    item={item}
                />
            ))}
        </Box>
        <CopyRightBar />
        </>
    );
};

export default CourseSrc;
