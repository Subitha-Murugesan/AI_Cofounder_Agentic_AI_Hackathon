from crewai import Agent, LLM
from dotenv import load_dotenv
import os

load_dotenv()

# Initialize LLM
llm = LLM(
    model="google/gemini-2.0-flash",
    temperature=0.5,
    api_key=os.getenv("GOOGLE_API_KEY")
)

# ---------------------------
# Define Startup Agents
# ---------------------------

idea_analyst = Agent(
    role="Startup Idea Analyst",
    goal="Clearly explain the startup idea in simple terms",
    backstory="Expert at simplifying startup concepts for beginners",
    llm=llm,
    verbose=True,
    memory=True
)

market_agent = Agent(
    role="Market Intelligence Analyst",
    goal="Analyze market demand and trends",
    backstory="Expert in market trends and opportunity analysis",
    llm=llm,
    verbose=True,
    memory=True
)

user_agent = Agent(
    role="Customer Persona Expert",
    goal="Identify target users and their pain points",
    backstory="Specialist in user research and personas",
    llm=llm,
    verbose=True,
    memory=True
)

competitor_agent = Agent(
    role="Competitive Analyst",
    goal="Analyze competitors and market saturation",
    backstory="Startup market competition expert",
    llm=llm,
    verbose=True,
    memory=True
)

business_agent = Agent(
    role="Business Model Strategist",
    goal="Suggest realistic monetization models",
    backstory="Experienced SaaS monetization advisor",
    llm=llm,
    verbose=True,
    memory=True
)

mvp_agent = Agent(
    role="MVP Planner",
    goal="Design a fast MVP and validation plan",
    backstory="Lean startup and MVP specialist",
    llm=llm,
    verbose=True,
    memory=True
)

evaluation_agent = Agent(
    role="Startup Evaluator",
    goal="Score and evaluate startup viability",
    backstory="Investor-style startup evaluator",
    llm=llm,
    verbose=True,
    memory=True
)
