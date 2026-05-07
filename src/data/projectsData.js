import dealedge1 from '../assets/png/dealedge1.png'
import dealedge2 from '../assets/png/dealedge2.png'
import dealedge3 from '../assets/png/dealedge3.png'
import trophy from '../assets/png/dealedge-trophy.jpg'
import capstone1 from '../assets/png/capstone1_ai.png'
import capstone2 from '../assets/png/capstone2_ai.png'
import capstone3 from '../assets/png/capstone3_ai.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'DealEdge: AI Negotiation War Room',
        projectDesc: 'An elite AI-powered platform that equips users with tactical negotiation battle plans. Built as a solo project over a weekend to assist professionals in high-stakes dealmaking.',
        tags: ['Next.js 14', 'React', 'TypeScript', 'OpenAI API', 'Speech-to-Text'],
        demo: 'https://github.com/saiteja-pro/dealedge',
        videoDemo: '', // Placeholder for youtube demo link
        images: [
            dealedge1,
            dealedge2,
            dealedge3,
            trophy
        ],
        features: [
            "AI Strategy Brief Generation (Power Score & Leverage Mapping)",
            "Interactive Practice Roleplay Simulator against Adaptive AI",
            "Voice-to-Voice Hands-Free Live Coaching Mode"
        ],
        achievement: '🏆 3rd Place - SAIF IT Hackathon 2026'
    },
    {
        id: 2,
        projectName: 'UTA Capstone: NLP Summarization Engine',
        projectDesc: 'An end-to-end data pipeline built for my Master\'s Capstone project at the University of Texas at Arlington. It automates the extraction of company data and utilizes a custom fine-tuned NLP model to generate concise business summaries.',
        tags: ['Python', 'HuggingFace', 'NLP', 'Selenium', 'Pandas'],
        demo: '', // No live demo for Jupyter notebooks
        videoDemo: '', 
        images: [
            capstone1,
            capstone2,
            capstone3
        ],
        features: [
            "Automated Headless Web Scraping (Selenium & BeautifulSoup)",
            "Custom Fine-Tuned NLP Summarization Model via HuggingFace",
            "Large-scale Data Processing & Feature Engineering (Pandas)",
            "Automated extraction of Healthcare Core Offerings & Solutions"
        ]
    }
]
