import { BsCodeSlash } from "react-icons/bs";
import { FaChalkboardTeacher, FaCameraRetro, FaVideo, FaRegNewspaper, FaGolfBall, FaLightbulb } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

export const hobbiesData = {
    description: 'What I do outside of work. I bring the same energy I put into code into everything else.',
    hobbies: [
        {
            id: 1,
            title: 'Smart Home Design',
            icon: <FaLightbulb />
        },
        {
            id: 2,
            title: 'Interior Space Planning',
            icon: <MdDesignServices />
        },
        {
            id: 3,
            title: 'Video Editing',
            icon: <FaVideo />
        },
        {
            id: 4,
            title: 'Cooking',
            icon: <SiCodechef />
        },
        {
            id: 5,
            title: 'UI/UX Design',
            icon: <BsCodeSlash />
        },
        {
            id: 6,
            title: 'Visual Storytelling',
            icon: <FaCameraRetro />
        },
        {
            id: 7,
            title: 'Tutoring',
            icon: <FaChalkboardTeacher />
        },
        {
            id: 8,
            title: 'Blogging',
            icon: <FaRegNewspaper />
        },
        {
            id: 9,
            title: 'Golf',
            icon: <FaGolfBall />
        },
    ]
}