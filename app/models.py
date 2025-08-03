from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from datetime import datetime


class CampaignAnalysisRequest(BaseModel):
    campaign_name: str
    platform: str
    budget: float
    target_audience: str
    campaign_objectives: List[str]
    industry: str


class AudienceInsights(BaseModel):
    primary_demographics: Dict[str, Any]
    behavioral_patterns: List[str]
    engagement_trends: List[str]
    expansion_opportunities: List[str]
    retention_insights: List[str]


class CreativePerformance(BaseModel):
    creative_elements_analysis: List[str]
    performance_predictions: List[str]
    optimization_recommendations: List[str]
    emotional_resonance: Dict[str, float]
    brand_consistency_score: float


class CompetitiveIntelligence(BaseModel):
    competitor_activities: List[str]
    market_threats: List[str]
    response_strategies: List[str]
    market_opportunities: List[str]
    competitive_advantage: List[str]


class TrendAnalysis(BaseModel):
    emerging_trends: List[str]
    seasonal_patterns: List[str]
    viral_potential: Dict[str, float]
    timing_recommendations: List[str]
    cultural_insights: List[str]


class AnalysisResult(BaseModel):
    campaign_name: str
    audience_insights: AudienceInsights
    creative_performance: CreativePerformance
    competitive_intelligence: CompetitiveIntelligence
    trend_analysis: TrendAnalysis
    overall_score: float
    key_recommendations: List[str]
    metadata: Dict[str, Any] = {}
