// Import icons or representative images for each paper
import researchPaper from '../assets/publications/publishing.png';
import certificate from '../assets/publications/certificate.png';
import certificate1 from '../assets/publications/certificate1.png';
import certificate2 from '../assets/publications/certificate2.png';

/**
 * Publication Data
 * Contains a short bio and a list of published papers.
 * Each entry includes:
 * - id: Unique identifier
 * - title: Title of the paper
 * - details: Summary of the research or its domain
 * - date: Publication date
 * - field: Research domain
 * - url: Link to the paper or journal entry
 * - videoUrl: (optional) YouTube video link for video presentations
 * - image: Representative icon/image
 */

export const achievementData = {
    bio1: "During my Bachelor's, I explored emerging trends in Business Analytics and contributed to academic literature, with research papers published in the International Journal of Engineering Research & Technology (IJERT). I also took part in leadership and global engagement initiatives, notably representing as a delegate at AIESEC's Youth Speak Forum at BITS Pilani, Hyderabad.",

    bio2: "Beyond academics, my global forum experiences sparked a strong interest in sustainable development, while collaborative projects sharpened my skills in cross-functional problem-solving and analytics innovation.",

    achievements: [
        {
            id: 1,
            title: 'International Journal Of Engineering Research & Technology - A Comprehensive Study on Business Analytics',
            details: 'An in-depth analysis of modern Business Analytics practices, tools, and trends, examining their influence on data-driven decision-making.',
            date: 'September 2020',
            field: 'Business Analytics',
            url: 'https://www.ijert.org/a-comprehensive-study-on-business-analytics',
            videoUrl: 'https://www.youtube.com/watch?v=zcfEZRuyj14',
            image: certificate
        },
        {
            id: 2,
            title: 'International Journal Of Engineering Research & Technology - Consequences and Determinants Towards Business Analytics Success',
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