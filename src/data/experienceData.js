/*
 * Experience and education data, ordered chronologically descending.
 * Each entry includes role-specific bullets where real facts are known.
 * Bullets marked [CONFIRM] need metric/detail confirmation from the engineer.
 */
export const experienceData = [
    {
        id: 1,
        company: 'SAIF Corporation',
        location: 'Oregon, USA',
        jobtitle: 'Software Engineer',
        startYear: 'Nov 2022',
        endYear: 'Present',
        type: 'work',
        logo: 'saif',
        bullets: [
            'Architected Python-based automation frameworks that reduced manual operational overhead across enterprise workflows.',
            'Designed and maintained AWS cloud infrastructure using Terraform, managing provisioning and state for production environments.',
            'Built and hardened CI/CD quality gates, reducing deployment risk and improving release consistency across services.',
            'Developed internal pipelines to move and transform enterprise data between systems, improving data availability for business reporting.',
            'Created internal developer tooling that standardized deployment processes and accelerated onboarding for new services.'
        ]
    },
    {
        id: 2,
        company: 'University of Texas at Arlington',
        location: 'Arlington, USA',
        jobtitle: 'Graduate Research and Teaching Assistant',
        startYear: 'Apr 2022',
        endYear: 'Aug 2022',
        type: 'work',
        logo: 'uta',
        bullets: [
            'Assisted faculty in graduate-level Business Statistics coursework, holding office hours and grading quantitative assignments.',
            'Conducted research on analytics methodologies, contributing to work later published in the International Journal of Engineering Research and Technology.'
        ]
    },
    {
        id: 3,
        company: 'Amazon',
        location: 'Hyderabad, India',
        jobtitle: 'Kindle Direct Publishing Analyst',
        startYear: 'Feb 2021',
        endYear: 'Jul 2021',
        type: 'work',
        logo: 'amazon',
        bullets: [
            'Analyzed publishing metadata and content quality signals for the Kindle Direct Publishing platform.',
            'Identified process gaps in content review workflows and proposed operational improvements adopted by the team.'
        ]
    },
    {
        id: 4,
        company: 'Amazon',
        location: 'Hyderabad, India',
        jobtitle: 'Device, Digital, and Alexa Support Specialist',
        startYear: 'Aug 2019',
        endYear: 'Jan 2021',
        type: 'work',
        logo: 'amazon',
        bullets: [
            'Resolved complex technical escalations for Amazon device, digital content, and Alexa product lines.',
            'Maintained quality benchmarks across high-volume support queues for global Amazon customers.'
        ]
    },
    {
        id: 5,
        company: 'Mavensoft Technologies',
        location: 'Hyderabad, India',
        jobtitle: 'Business Analyst Intern',
        startYear: 'Aug 2018',
        endYear: 'Jul 2019',
        type: 'work',
        logo: 'mavensoft',
        bullets: [
            'Gathered and documented business requirements for software development projects.',
            'Produced data reports and process documentation that informed product decisions.'
        ]
    }
]

export const educationData = [
    {
        id: 1,
        institution: 'University of Texas at Arlington',
        course: 'M.S. Business Statistics',
        startYear: '2021',
        endYear: '2022',
        logo: 'uta',
        note: 'College of Business'
    },
    {
        id: 2,
        institution: 'Jawaharlal Nehru Technological University',
        course: 'B.Tech. Electrical and Electronics Engineering',
        startYear: '2015',
        endYear: '2019',
        logo: 'jntu',
        note: ''
    }
]