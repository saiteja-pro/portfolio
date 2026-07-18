import dealedge1 from '../assets/png/dealedge1.png'
import dealedge2 from '../assets/png/dealedge2.png'
import dealedge3 from '../assets/png/dealedge3.png'
import trophy from '../assets/png/dealedge_trophy.jpg'
import capstonePipeline from '../assets/png/capstone_pipeline.png'
import capstoneDashboard from '../assets/png/capstone_dashboard.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'DealEdge',
        projectSubtitle: 'AI Negotiation Intelligence Platform',
        context: 'SAIF IT Hackathon 2026. One-day build to create a usable product from scratch.',
        role: 'Designed and built the full application architecture. Made every technical decision: stack selection, API integration design, real-time audio pipeline, and deployment within the hackathon window.',
        outcome: '3rd place at the SAIF IT Hackathon 2026. Functional demo with voice analysis, strategy generation, and multi-stage roleplay working end-to-end.',
        tags: ['Next.js 14', 'TypeScript', 'OpenAI API', 'Speech-to-Text', 'React'],
        demo: 'https://github.com/saiteja-pro/dealedge',
        images: [
            dealedge1,
            dealedge2,
            dealedge3,
            trophy
        ],
        features: [
            'Strategy Brief Generator that scores deal leverage and maps counterparty position',
            'Practice Roleplay Simulator using LLMs to simulate adversarial negotiation',
            'Voice-to-Voice Live Coaching Mode with real-time transcription and feedback',
            'Cross-language support for international negotiation contexts'
        ],
        achievement: '3rd Place, SAIF IT Hackathon 2026'
    },
    {
        id: 2,
        projectName: 'NLP Summarization Pipeline',
        projectSubtitle: 'Healthcare Data Intelligence, UTA Capstone',
        context: 'Graduate capstone project at UT Arlington. The challenge: enterprise healthcare data is scattered across unstructured web sources with no automated way to extract and summarize it.',
        role: 'Architected the end-to-end system. Designed the scraping fleet, selected and fine-tuned the HuggingFace model, and built the ingestion pipeline that tied it together.',
        outcome: 'Delivered a working system that automatically extracted and summarized healthcare business intelligence from unstructured sources, replacing a manual research process.',
        tags: ['Python', 'HuggingFace Transformers', 'Selenium', 'BeautifulSoup', 'Pandas', 'NLP'],
        demo: '',
        images: [
            capstonePipeline,
            capstoneDashboard
        ],
        features: [
            'Headless web scraping fleet collecting healthcare data at scale',
            'Fine-tuned NLP summarization model adapted from a HuggingFace base checkpoint',
            'Data ingestion and feature engineering pipeline handling the full ETL flow',
            'Structured output layer organizing healthcare offerings for downstream analysis'
        ]
    }
]
