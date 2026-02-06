# AI Co-Founder Backend

A sophisticated backend API built with FastAPI and CrewAI that analyzes and validates business ideas using multiple AI agents working collaboratively. Each agent specializes in different aspects of business analysis.

## 🎯 Project Overview

The AI Co-Founder backend provides intelligent business idea validation through a multi-agent AI system. The system consists of 7 specialized AI agents that work sequentially to provide comprehensive analysis on:

1. **Idea Analyst** - Analyzes the core business concept
2. **Market Agent** - Evaluates market opportunity and size
3. **User Agent** - Identifies user personas and target audience
4. **Competitor Agent** - Analyzes competitive landscape
5. **Business Agent** - Evaluates business model and financials
6. **MVP Agent** - Plans the minimum viable product
7. **Evaluation Agent** - Provides final assessment and recommendations

## 🛠️ Tech Stack

- **Framework:** FastAPI
- **Server:** Uvicorn
- **AI Framework:** CrewAI
- **Data Validation:** Pydantic
- **Environment Management:** python-dotenv
- **Language:** Python 3.8+

## 📦 Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- API key for your LLM provider (e.g., OpenAI, Anthropic, etc.)

## 🚀 Getting Started

### 1. Clone and Navigate

```bash
cd ai-cofounder-backend
```

### 2. Create Virtual Environment

```bash
# Create a virtual environment
python -m venv venv

# Activate it
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Create a `.env` file in the `ai-cofounder-backend` directory with your API keys:

```env
OPENAI_API_KEY=your_openai_api_key_here
# or use another LLM provider
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

### 5. Run the Server

```bash
python -m uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

### Access API Documentation

- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

## 📁 Project Structure

```
ai-cofounder-backend/
├── app/
│   ├── __init__.py
│   ├── main.py         # FastAPI app definition and endpoints
│   ├── agents.py       # AI agent definitions
│   ├── tasks.py        # Task definitions for each agent
│   ├── crew.py         # Crew orchestration and execution
│   └── __pycache__/
├── requirements.txt    # Python dependencies
├── test_crew.py        # Test script for crew
├── flowchart.html      # Visual flowchart of agent workflow
└── README.md          # This file
```

## 🔌 API Endpoints

### POST `/validate-idea`

Validates and analyzes a business idea using the AI agent crew.

**Request Body:**
```json
{
  "idea": "Your business idea description here"
}
```

**Example Request:**
```bash
curl -X POST "http://localhost:8000/validate-idea" \
  -H "Content-Type: application/json" \
  -d '{"idea": "An AI-powered platform for personalized learning"}'
```

**Response:**
```json
{
  "status": "success",
  "data": "{...detailed analysis from all agents...}"
}
```

## 📋 File Descriptions

### `main.py`
Defines the FastAPI application and the `/validate-idea` endpoint that accepts business ideas and returns analysis results from the CrewAI crew.

### `agents.py`
Defines all 7 AI agents with specific roles and responsibilities:
- Each agent has a defined role, goal, and backstory
- Agents are configured to use your specified LLM
- Allows agents to use tools and take actions

### `tasks.py`
Defines the specific tasks for each agent:
- Each task describes what the agent should analyze
- Tasks include expected output format and context
- Tasks are executed sequentially by the crew

### `crew.py`
Orchestrates the multi-agent system:
- Combines agents and tasks into a Crew
- Runs agents sequentially for logical workflow
- Handles error management and result aggregation

### `test_crew.py`
Test script for verifying the crew functionality without the API server.

## 🧪 Testing

### Test the Crew Directly

```bash
python test_crew.py
```

This will run the crew with a sample business idea and display the analysis results.

### Test the API

```bash
# With curl
curl -X POST "http://localhost:8000/validate-idea" \
  -H "Content-Type: application/json" \
  -d '{"idea": "A sustainable packaging solution for e-commerce"}'

# With Python requests
python -c "
import requests
response = requests.post('http://localhost:8000/validate-idea', 
  json={'idea': 'Your idea here'})
print(response.json())
"
```

## 🔄 Workflow

1. **User submits idea** via API endpoint
2. **FastAPI** validates the request and passes it to the crew
3. **Idea Analyst** examines the business concept
4. **Market Agent** analyzes market opportunity
5. **User Agent** identifies target users and personas
6. **Competitor Agent** evaluates competitive landscape
7. **Business Agent** designs business model and financials
8. **MVP Agent** plans the minimum viable product
9. **Evaluation Agent** synthesizes all findings and provides final assessment
10. **Results returned** as comprehensive analysis JSON

## 🎨 Features

- ✅ Multi-agent AI system for comprehensive analysis
- ✅ Sequential agent execution for logical workflow
- ✅ Specialized agents for different business aspects
- ✅ RESTful API with Swagger documentation
- ✅ Robust error handling
- ✅ Extensible architecture for adding new agents/tasks
- ✅ Support for multiple LLM providers

## 📊 Analysis Components

The system analyzes business ideas across these dimensions:

- **Idea Clarity** - Is the core concept clear and viable?
- **Market Potential** - Is there a market for this solution?
- **Target Audience** - Who are the users and customers?
- **Competition** - What's the competitive landscape?
- **Business Model** - How will revenue be generated?
- **MVP Strategy** - What's the initial product scope?
- **Overall Viability** - Should this idea be pursued?

## 🚀 Deployment

### Production Deployment

For production deployment, use a production ASGI server:

```bash
pip install gunicorn

# Run with Gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app
```

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:
```bash
docker build -t ai-cofounder-backend .
docker run -p 8000:8000 -e OPENAI_API_KEY=your_key ai-cofounder-backend
```

## 🔒 Security Considerations

- Never commit `.env` files with API keys
- Use environment variables for sensitive configuration
- Validate and sanitize all user input
- Implement rate limiting for production use
- Add authentication if needed
- Use HTTPS in production

## 📈 Performance Optimization

- Agent tasks can be modified for faster or more detailed analysis
- Consider caching for frequently analyzed ideas
- Implement request queuing for high-traffic scenarios
- Monitor LLM API usage and costs

## 🤝 Contributing

When extending the system:

1. **Adding new agents:**
   - Define agent in `agents.py`
   - Create corresponding task in `tasks.py`
   - Add to crew in `crew.py`

2. **Modifying analysis:**
   - Update task descriptions in `tasks.py`
   - Adjust agent goals in `agents.py`

3. **Testing:**
   - Update `test_crew.py` with new test cases
   - Test via API endpoints in `main.py`

## 📚 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [CrewAI Documentation](https://docs.crewai.com/)
- [Pydantic Documentation](https://docs.pydantic.dev/)

## 🐛 Troubleshooting

### API Key Errors
- Ensure `.env` file exists and contains valid API keys
- Check that `python-dotenv` is properly loading the environment

### Connection Errors
- Verify FastAPI server is running on the correct port
- Check firewall settings if accessing remotely
- Ensure frontend is configured to use correct API URL


