/* eslint-disable */
// import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
// import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaChalkboardTeacher, FaCameraRetro, FaVideo, FaRegNewspaper, FaTableTennis} from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
 

export const hobbiesData = {
    description: 'Passions Beyond Programming',
    hobbies: [
        {
            id: 1,
            title: 'Video Editing',
            icon: <FaVideo/>
        },
        {
            id: 2,
            title: 'Cooking',
            icon: <SiCodechef /> 
        },
        {
            id: 3,
            title: 'UI/UX Experimentation',
            icon: <BsCodeSlash />
        },
        {
            id: 4,
            title: 'Photography',
            icon: <FaCameraRetro />
        },
        {
            id: 5,
            title: 'Tutoring',
            icon: <FaChalkboardTeacher />
        },
    
        {
            id: 6,
            title: 'Blogging',
            icon: <FaRegNewspaper />
        },
        {
            id: 7,
            title: 'Pickleball',
            icon: <FaTableTennis />
        },
    ]
}

// Uncomment your required hobby.
// Couldn't find the required hobbies? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
// You can also add on your own 😉.