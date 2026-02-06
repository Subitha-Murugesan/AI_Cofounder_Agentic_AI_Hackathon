# AI Co-Founder Agent - Complete Platform

An AI-powered Business Idea Validation Platform that analyzes and validates startup ideas using multi-agent AI analysis. This project won the AI Hackathon competition!

**Competition Winner** | **Multi-Agent AI** | **Business Intelligence** |  **Modern UI**

## 📰 LinkedIn Post

Check out the announcement and celebration of this winning project:
[LinkedIn Post](https://www.linkedin.com/posts/subitha-murugesan_adding-another-win-to-hackathon-season-activity-7419665208748687360-A4ut?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfyd_cBS1bNrbpRnQqT-q7rnRa85rIznUs)


## Celebrating the Win

This project successfully competed in the AI Hackathon and emerged as the winner! The combination of practical business intelligence, beautiful user interface, and powerful Agentic AI analysis impressed the judges.

## Project Overview

AI Co-Founder is a comprehensive platform that combines a modern React frontend with a sophisticated CrewAI backend to provide entrepreneurs with intelligent business idea validation. The system analyzes ideas across multiple dimensions using specialized AI agents that collaborate to deliver comprehensive insights.

### Key Features

- **Multi-Agent AI Analysis** - 7 specialized AI agents analyzing different business aspects
- **Comprehensive Idea Validation** - Market, users, competition, revenue, and MVP analysis
- **Beautiful UI** - Modern, responsive interface built with React and Tailwind CSS
- **Business Insights** - Detailed reports on market opportunity and viability
- **Real-time Analysis** - Get results in minutes, not days
- **Dark/Light Theme Support** - Comfortable viewing in any environment

## Project Structure

```
AI Co-Founder/
├── AI Co-Founder UI Design/        # Frontend - React + TypeScript + Vite
│   ├── src/
│   ├── package.json
│   ├── README.md                   # Frontend documentation
│   └── .gitignore
│
├── ai-cofounder-backend/           # Backend - FastAPI + CrewAI
│   ├── app/
│   ├── requirements.txt
│   ├── README.md                   # Backend documentation
│   └── .gitignore
│
└── README.md                       # This file
```

## Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Python 3.8+
- API key for an LLM provider (OpenAI, Anthropic, etc.)

### Frontend Setup

```bash
cd "AI Co-Founder UI Design"
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

### Backend Setup

```bash
cd ai-cofounder-backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Create .env file with your API keys
echo "OPENAI_API_KEY=your_key_here" > .env

python -m uvicorn app.main:app --reload
```

Backend runs at: `http://localhost:8000`

API Documentation: `http://localhost:8000/docs`

## Tech Stack

### Frontend
- React 18+ with TypeScript
- Vite (Lightning-fast build tool)
- Tailwind CSS for styling
- Radix UI components
- React Hook Form for form management
- Recharts for data visualization

### Backend
- FastAPI (Modern Python web framework)
- CrewAI (Multi-agent AI framework)
- Pydantic for data validation
- Uvicorn ASGI server
- Python 3.8+

## AI Agents System

The backend uses 7 specialized AI agents working in sequence:

1. **Idea Analyst** - Analyzes the core business concept and feasibility
2. **Market Agent** - Evaluates market size, opportunity, and trends
3. **User Agent** - Identifies target users and creates user personas
4. **Competitor Agent** - Analyzes competitive landscape and differentiation
5. **Business Agent** - Designs business model and financial projections
6. **MVP Agent** - Plans minimum viable product and roadmap
7. **Evaluation Agent** - Synthesizes findings and provides final assessment

## Analysis Workflow

```
User Input
    ↓
FastAPI Endpoint
    ↓
Idea Analyst Agent
    ↓
Market Analysis Agent
    ↓
User Persona Agent
    ↓
Competition Agent
    ↓
Business Model Agent
    ↓
MVP Planning Agent
    ↓
Evaluation Agent
    ↓
Comprehensive Report
```

## API Endpoints

### POST `/validate-idea`

Analyzes a business idea and returns comprehensive assessment.

**Request:**
```json
{
  "idea": "A sustainable packaging solution for e-commerce businesses"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "overview": "...",
    "market_analysis": "...",
    "user_personas": "...",
    "competitive_analysis": "...",
    "business_model": "...",
    "mvp_strategy": "...",
    "final_assessment": "..."
  }
}
```

## Detailed Documentation

For detailed setup and development information, see:

- [Frontend README](./AI Co-Founder UI Design/README.md) - React UI documentation
- [Backend README](./ai-cofounder-backend/README.md) - FastAPI & CrewAI documentation

## Features

### Frontend Features
✅ Interactive idea input interface
✅ Real-time analysis display
✅ Multi-step analysis workflow
✅ Beautiful data visualizations
✅ Responsive design for all devices
✅ Dark/Light theme toggle
✅ Toast notifications
✅ Drag-and-drop components

### Backend Features
✅ Multi-agent AI system
✅ Sequential agent execution
✅ Comprehensive business analysis
✅ RESTful API with Swagger documentation
✅ Robust error handling
✅ Extensible architecture

## Deployment

### Frontend Deployment

```bash
cd "AI Co-Founder UI Design"
npm run build
# Deploy dist/ folder to Vercel, Netlify, or any static host
```

### Backend Deployment

```bash
# Using Docker
docker build -t ai-cofounder-backend .
docker run -p 8000:8000 -e OPENAI_API_KEY=your_key ai-cofounder-backend

# Using Gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app
```

## Resources

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [CrewAI Docs](https://docs.crewai.com/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/)


