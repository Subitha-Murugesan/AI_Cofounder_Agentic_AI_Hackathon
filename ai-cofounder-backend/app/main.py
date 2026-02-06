from fastapi import FastAPI
from pydantic import BaseModel
from .crew import run_crew
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="AI Co-Founder Backend")

class IdeaRequest(BaseModel):
    idea: str

@app.post("/validate-idea")
def validate_idea(request: IdeaRequest):
    result = run_crew(request.idea)
    return {
        "status": "success",
        "data": str(result)  # raw JSON output from agents
    }
