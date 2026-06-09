import certificate from '../assets/publications/ijert_certificate.png';
import certificate1 from '../assets/publications/ijert_certificate1.png';
import certificate2 from '../assets/publications/aiesec_certificate.png';

export const achievementData = {
    bio1: "During my academic studies, I published research on Business Analytics trends in the International Journal of Engineering Research and Technology (IJERT). That academic work in data-driven decision-making still influences how I think about building software.",
    bio2: "Beyond academics, representing as a youth delegate at AIESEC's global forum taught me how to lead cross-functional initiatives and communicate across teams, skills I apply daily in my engineering work.",

    achievements: [
        {
            id: 1,
            title: 'International Journal Of Engineering Research and Technology - A Comprehensive Study on Business Analytics',
            details: 'An in-depth analysis of modern Business Analytics practices, tools, and trends, examining their influence on data-driven decision-making.',
            date: 'September 2020',
            field: 'Business Analytics',
            url: 'https://www.ijert.org/a-comprehensive-study-on-business-analytics',
            videoUrl: 'https://www.youtube.com/watch?v=zcfEZRuyj14',
            image: certificate
        },
        {
            id: 2,
            title: 'International Journal Of Engineering Research and Technology - Consequences and Determinants Towards Business Analytics Success',
            details: 'A detailed examination of the critical factors for success and the obstacles organizations face when implementing analytics strategies.',
            date: 'September 2020',
            field: 'Business Intelligence',
            url: 'https://www.ijert.org/consequences-and-determinants-towards-business-analytics-success',
            videoUrl: 'https://www.youtube.com/watch?v=oAw70pUEk-w',
            image: certificate1
        },
        {
            id: 3,
            title: 'Delegate - AIESEC Youth Speak Forum',
            details: 'Represented as a delegate at AIESECs Youth Speak Forum 2018, engaging in leadership sessions, SDG-focused workshops with global youth and industry leaders.',
            date: 'BITS Pilani - September 2018',
            field: 'Youth Leadership',
            url: 'https://aiesec.org/',
            image: certificate2
        }
    ]
};