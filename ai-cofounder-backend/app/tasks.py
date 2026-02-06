from crewai import Task

def idea_task(agent, idea):
    return Task(
        description=f"Summarize this startup idea simply:\n{idea}\nReturn JSON with: problem, solution, value_proposition",
        agent=agent,
        expected_output="JSON"
    )

def market_task(agent, idea):
    return Task(
        description=f"Analyze market demand and trends for:\n{idea}\nReturn JSON with: demand_level, trend_direction, trend_data",
        agent=agent,
        expected_output="JSON"
    )

def user_task(agent, idea):
    return Task(
        description=f"Identify primary and secondary target users for:\n{idea}\nReturn JSON with personas, pain_points, motivations",
        agent=agent,
        expected_output="JSON"
    )

def competitor_task(agent, idea):
    return Task(
        description=f"List major competitors and market gaps for:\n{idea}\nReturn JSON with competitors, market_share, opportunity_gap",
        agent=agent,
        expected_output="JSON"
    )

def business_task(agent, idea):
    return Task(
        description=f"Suggest monetization models for:\n{idea}\nReturn JSON with options and recommended_model",
        agent=agent,
        expected_output="JSON"
    )

def mvp_task(agent, idea):
    return Task(
        description=f"Suggest MVP type, must-have features, and validation steps for:\n{idea}\nReturn JSON",
        agent=agent,
        expected_output="JSON"
    )

def evaluation_task(agent, idea):
    return Task(
        description=f"Evaluate startup viability and give Go/No-Go decision for:\n{idea}\nReturn JSON with score_1_10 and verdict",
        agent=agent,
        expected_output="JSON"
    )
