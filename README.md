# AI Co-Founder Agent - Complete Platform

An AI-powered Business Idea Validation Platform that analyzes and validates startup ideas using multi-agent AI analysis. This project won the AI Hackathon competition!

**Competition Winner** | **Multi-Agent AI** | **Business Intelligence** |  **Modern UI**

## LinkedIn Post

Check out the announcement and celebration of this winning project:
[LinkedIn Post](https://www.linkedin.com/posts/subitha-murugesan_adding-another-win-to-hackathon-season-activity-7419665208748687360-A4ut?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfyd_cBS1bNrbpRnQqT-q7rnRa85rIznUs)

## Celebrating the Win

This project successfully competed in the AI Hackathon and emerged as the winner! The combination of practical business intelligence, beautiful user interface, and powerful Agentic AI analysis impressed the judges.

Prototype Link : https://aicofounder-c1cea.web.app/

<img width="887" height="826" alt="1" src="https://github.com/user-attachments/assets/1de18f75-e474-403a-9e21-5269ae37b151" />
<img width="1438" height="807" alt="2" src="https://github.com/user-attachments/assets/f34e923a-6f21-47f9-ba52-c69b27cd55ad" />
<img width="1435" height="847" alt="3" src="https://github.com/user-attachments/assets/405f90e9-509e-49af-9e3e-b33bcc63586f" />
<img width="1432" height="856" alt="4" src="https://github.com/user-attachments/assets/04c0925e-6643-4792-900c-24227af21002" />
<img width="1440" height="854" alt="5" src="https://github.com/user-attachments/assets/b41a331c-9dc3-45de-b7c3-1c9924b97388" />
![AI_cofounder_flowchart](https://github.com/user-attachments/assets/4fbdc59a-fd33-4168-a59d-ecb6312f7bef)

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
1. Interactive idea input interface
2. Real-time analysis display
3. Multi-step analysis workflow
4. Beautiful data visualizations
5. Responsive design for all devices
6. Dark/Light theme toggle
7. Toast notifications
8.  Drag-and-drop components

### Backend Features
1. Multi-agent AI system
2. Sequential agent execution
3. Comprehensive business analysis
4. RESTful API with Swagger documentation
5.  Robust error handling
6.  Extensible architecture

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


