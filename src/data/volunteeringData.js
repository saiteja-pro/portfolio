import streetcause from '../assets/volunteering/streetcause.png';
import aasya from '../assets/volunteering/aasya.jpg';
import rudhira from '../assets/volunteering/rudhira.jpeg';
import triatlon from '../assets/volunteering/triatlon.avif';
import mgit from '../assets/volunteering/mgit.jpeg';

export const volunteeringData = {
    bio: "I've actively contributed to various social causes, from organizing health awareness campaigns and blood donation drives to supporting underprivileged communities. These experiences shaped my perspective on community impact and teamwork.",

    experiences: [
        {
            id: 1,
            role: 'Coordinator',
            organization: 'Street Cause',
            duration: 'Aug 2016 - Aug 2017 · 1 yr 1 mo',
            cause: 'Human Rights',
            description: 'Helped the underprivileged such as orphans, the elderly, the unemployed and the specially-abled, to live their lives in the best way possible.',
            image: streetcause
        },
        {
            id: 2,
            role: 'Program Event Coordinator',
            organization: 'Aasya Foundation',
            duration: 'Apr 2018 - Jul 2018 · 4 mos',
            cause: 'Health',
            description: 'Organized Stride against Cancer walkathon on July 15, 2018, in Hyderabad, India.',
            image: aasya
        },
        {
            id: 3,
            role: 'Campaign Volunteer',
            organization: 'Rudhira Diagnostics',
            duration: 'Aug 2017 - Dec 2017 · 5 mos',
            cause: 'Health',
            description: 'Organized the blood donation drive in Mahatma Gandhi Institute of Technology (MGIT), INDIA.',
            image: rudhira
        },
        {
            id: 4,
            role: 'Event Planner',
            organization: 'Great Hyderabad Adventure Club - GHAC',
            duration: 'Oct 2017 · 1 mo',
            cause: 'Social Services',
            description: 'Organized Hyderabad Triathlon, 2017 in Hyderabad, INDIA.',
            image: triatlon
        },
        {
            id: 5,
            role: 'Fundraiser',
            organization: 'Mahatma Gandhi Institute of Technology',
            duration: 'Feb 2017 - Apr 2017 · 3 mos',
            cause: 'Arts and Culture',
            description: 'Raised funds for Potenzia 2017 event.',
            image: mgit
        }
    ]
};
