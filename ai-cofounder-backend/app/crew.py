from crewai import Crew, Process
from .agents import *
from .tasks import *

def run_crew(idea: str):
    try:
        crew = Crew(
            agents=[
                idea_analyst,
                market_agent,
                user_agent,
                competitor_agent,
                business_agent,
                mvp_agent,
                evaluation_agent
            ],
            tasks=[
                idea_task(idea_analyst, idea),
                market_task(market_agent, idea),
                user_task(user_agent, idea),
                competitor_task(competitor_agent, idea),
                business_task(business_agent, idea),
                mvp_task(mvp_agent, idea),
                evaluation_task(evaluation_agent, idea)
            ],
            process=Process.sequential
        )

        # Run synchronously for FastAPI
        return crew.kickoff()
    except Exception as e:
        return f"Error processing the idea: {str(e)}"
