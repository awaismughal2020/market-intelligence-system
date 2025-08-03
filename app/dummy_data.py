import random
from datetime import datetime
from models import AudienceInsights, CreativePerformance, CompetitiveIntelligence, TrendAnalysis


def get_dummy_campaign_data():
    """Generate dummy campaign data for demo"""
    campaigns = [
        {
            "campaign_name": "Summer Product Launch",
            "platform": "Meta Ads",
            "budget": 150000,
            "target_audience": "Millennials and Gen Z professionals",
            "campaign_objectives": ["Brand Awareness", "Lead Generation"],
            "industry": "Technology"
        },
        {
            "campaign_name": "Holiday Sales Campaign",
            "platform": "Google Ads",
            "budget": 250000,
            "target_audience": "Families with children aged 5-15",
            "campaign_objectives": ["Sales", "Customer Acquisition"],
            "industry": "E-commerce"
        },
        {
            "campaign_name": "B2B SaaS Demo Campaign",
            "platform": "LinkedIn Ads",
            "budget": 75000,
            "target_audience": "C-suite executives and decision makers",
            "campaign_objectives": ["Lead Generation", "Demo Requests"],
            "industry": "Software"
        }
    ]
    return {"sample_campaigns": campaigns}


def generate_realistic_response(chain_type, request):
    """Generate realistic responses for each chain type"""

    if chain_type == "audience":
        return AudienceInsights(
            primary_demographics={
                "age_range": "25-45",
                "top_segment": "Tech-savvy professionals",
                "income_level": "$75k-$150k",
                "education": "College-educated",
                "location": "Urban and suburban areas"
            },
            behavioral_patterns=[
                "High mobile usage during commute hours (7-9 AM, 5-7 PM)",
                "Peak engagement on weekdays vs weekends (60/40 split)",
                "Prefers video content over static images (3x higher engagement)",
                "Active on multiple platforms simultaneously",
                "Research-driven purchase behavior with 3-4 touchpoints"
            ],
            engagement_trends=[
                "37% increase in evening engagement (7-10 PM)",
                "Video completion rates 25% higher than industry average",
                "Social proof elements increase CTR by 18%",
                "Personalized messaging improves conversion by 23%"
            ],
            expansion_opportunities=[
                "Similar audience on TikTok shows 45% overlap potential",
                "Lookalike audiences in adjacent metros",
                "Cross-platform retargeting opportunities",
                "Partner brand collaboration potential"
            ],
            retention_insights=[
                "Email engagement drops 15% after 3 months without purchase",
                "Loyalty program members have 2.3x higher LTV",
                "Push notification opt-in rate: 34% (above industry average)",
                "Social media followers convert 40% more than cold traffic"
            ]
        )

    elif chain_type == "creative":
        return CreativePerformance(
            creative_elements_analysis=[
                "Bold, contrasting colors increase attention by 23%",
                "User-generated content performs 3x better than stock photos",
                "Clear, benefit-focused headlines outperform feature-based by 31%",
                "Videos under 15 seconds have highest completion rates",
                "Social proof elements (reviews, testimonials) boost trust by 28%"
            ],
            performance_predictions=[
                "Predicted CTR: 2.8-3.4% (industry avg: 2.1%)",
                "Estimated conversion rate: 4.2-5.8%",
                "Video completion rate forecast: 72-78%",
                "Engagement rate projection: 6.1-7.3%",
                "Cost per acquisition estimate: $45-$62"
            ],
            optimization_recommendations=[
                "A/B test headline variations emphasizing time-saving benefits",
                "Implement dynamic product ads with real-time inventory",
                "Add urgency elements (limited time offers) to increase conversions",
                "Test carousel ads vs single image for product showcases",
                "Optimize for mobile-first viewing (90% traffic mobile)"
            ],
            emotional_resonance={
                "excitement": 0.78,
                "trust": 0.85,
                "urgency": 0.62,
                "aspiration": 0.73,
                "security": 0.69
            },
            brand_consistency_score=0.87
        )

    elif chain_type == "competitive":
        return CompetitiveIntelligence(
            competitor_activities=[
                "Competitor A increased ad spend by 40% in past 30 days",
                "New market entrant launching aggressive pricing campaign",
                "Major competitor shifting from Google to Meta advertising",
                "Industry leader testing influencer partnership strategy",
                "Competitor B expanding into adjacent product categories"
            ],
            market_threats=[
                "Price war risk: 2 competitors reduced pricing by 15-20%",
                "Market saturation in primary demographic (65% reached)",
                "Economic downturn affecting luxury purchase decisions",
                "New regulatory requirements increasing compliance costs",
                "Supply chain disruptions affecting product availability"
            ],
            response_strategies=[
                "Emphasize unique value proposition and premium quality",
                "Pivot budget to underutilized platforms (TikTok, Pinterest)",
                "Accelerate customer retention programs",
                "Develop exclusive partnerships to differentiate offering",
                "Focus on customer experience and service excellence"
            ],
            market_opportunities=[
                "Competitor gap in video marketing (only 20% using video)",
                "Underserved market segment: 35-45 age demographic",
                "Emerging platform opportunity (BeReal, Clubhouse)",
                "Partnership opportunity with complementary brands",
                "Geographic expansion potential in secondary markets"
            ],
            competitive_advantage=[
                "Superior customer service ratings (4.8/5 vs industry 4.1/5)",
                "Faster product delivery (24hrs vs industry 3-5 days)",
                "More flexible pricing and payment options",
                "Stronger brand recognition in target demographic",
                "Better integration capabilities with existing tools"
            ]
        )

    elif chain_type == "trend":
        return TrendAnalysis(
            emerging_trends=[
                "Micro-influencer partnerships gaining 300% more engagement",
                "Interactive content (polls, quizzes) driving 45% higher engagement",
                "Sustainability messaging resonating with 67% of target audience",
                "AI-powered personalization increasing relevance scores",
                "Short-form vertical video content dominating mobile feeds"
            ],
            seasonal_patterns=[
                "Q4 budget allocation typically 35% higher than Q1-Q3",
                "Back-to-school period (Aug-Sep) shows 28% engagement spike",
                "Holiday season requires 6-week advance campaign setup",
                "Summer months see 15% decline in B2B engagement",
                "Tax season (Feb-Apr) affects financial services campaigns"
            ],
            viral_potential={
                "video_content": 0.73,
                "user_generated_content": 0.68,
                "trending_hashtags": 0.45,
                "influencer_collaboration": 0.62,
                "timely_cultural_reference": 0.56
            },
            timing_recommendations=[
                "Launch primary campaign Tuesday-Thursday for maximum reach",
                "Schedule social posts between 1-3 PM for optimal engagement",
                "Avoid major sporting events and holidays for launch dates",
                "Plan campaign refresh every 3-4 weeks to combat ad fatigue",
                "Front-load budget in first 2 weeks for momentum building"
            ],
            cultural_insights=[
                "Remote work culture driving increased online purchasing",
                "Health and wellness focus creating premium product opportunities",
                "Environmental consciousness influencing brand choice (73% factor)",
                "Digital fatigue leading to preference for authentic, unpolished content",
                "Community-building and belonging themes resonating strongly post-pandemic"
            ]
        )
