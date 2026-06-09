import dealedge1 from '../assets/png/dealedge1.png'
import dealedge2 from '../assets/png/dealedge2.png'
import dealedge3 from '../assets/png/dealedge3.png'
import trophy from '../assets/png/dealedge_trophy.jpg'
import capstonePipeline from '../assets/png/capstone_pipeline.png'
import capstoneDashboard from '../assets/png/capstone_dashboard.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'DealEdge: AI Negotiation War Room',
        projectDesc: 'Engineered a highly-scalable AI negotiation assistant during a single-day hackathon. The platform equips enterprise dealmakers with tactical battle plans and real-time voice analysis to optimize high-stakes negotiation outcomes.',
        tags: ['Next.js 14', 'React', 'TypeScript', 'OpenAI API', 'Speech-to-Text'],
        demo: 'https://github.com/saiteja-pro/dealedge',
        videoDemo: '',
        images: [
            dealedge1,
            dealedge2,
            dealedge3,
            trophy
        ],
        features: [
            "Architected an AI Strategy Brief Generator (Power Score & Leverage Mapping)",
            "Engineered an adaptive Practice Roleplay Simulator using LLMs",
            "Implemented a Voice-to-Voice Hands-Free Live Coaching Mode",
            "Designed a real-time analytics feedback loop across negotiation stages",
            "Deployed cross-language support for global scalability"
        ],
        achievement: '3rd Place - SAIF IT Hackathon 2026'
    },
    {
        id: 2,
        projectName: 'UTA Capstone: NLP Summarization Pipeline',
        projectDesc: 'Architected an end-to-end data pipeline for automated extraction and summarization of enterprise healthcare data. Integrated a fine-tuned HuggingFace NLP model to transform unstructured web data into concise, actionable business intelligence.',
        tags: ['Python', 'HuggingFace', 'NLP', 'Selenium', 'Pandas'],
        demo: '',
        videoDemo: '',
        images: [
            capstonePipeline,
            capstoneDashboard
        ],
        features: [
            "Developed an automated headless web scraping fleet (Selenium, BeautifulSoup)",
            "Fine-Tuned a custom NLP Summarization Model via HuggingFace transformers",
            "Engineered large-scale data ingestion and feature processing pipelines (Pandas)",
            "Automated the extraction and structuring of Healthcare Core Offerings"
        ]
    }
]
