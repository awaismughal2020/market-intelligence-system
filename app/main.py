from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import asyncio
import time
from typing import Dict, Any
import uvicorn

from models import CampaignAnalysisRequest, AnalysisResult
from chains import MarketingChainOrchestrator
from dummy_data import get_dummy_campaign_data

app = FastAPI(title="Marketing Intelligence Platform MVP", version="1.0.0")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Initialize the chain orchestrator
orchestrator = MarketingChainOrchestrator()


@app.get("/", response_class=HTMLResponse)
async def dashboard():
    """Serve the main dashboard"""
    with open("static/index.html", "r") as f:
        return HTMLResponse(content=f.read())


@app.post("/api/analyze-campaign")
async def analyze_campaign(request: CampaignAnalysisRequest):
    """Main analysis endpoint - runs 4 AI chains in parallel"""
    try:
        start_time = time.time()

        # Run parallel analysis
        result = await orchestrator.analyze_campaign(request)

        processing_time = time.time() - start_time
        result.metadata["processing_time"] = f"{processing_time:.2f} seconds"

        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/demo-data")
async def get_demo_data():
    """Get dummy campaign data for demo"""
    return get_dummy_campaign_data()


@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "version": "1.0.0"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
