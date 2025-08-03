/**
 * Marketing Intelligence Platform - Professional App Logic
 * Simple, clean, and effective
 */

class MarketingPlatform {
    constructor() {
        this.currentState = 'form'; // form, analyzing, results
        this.initializeEventListeners();
        this.setupDemoData();
    }

    initializeEventListeners() {
        // Form submission
        document.getElementById('campaignForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.analyzeCampaign();
        });

        // Load demo data
        document.getElementById('loadDemo').addEventListener('click', () => {
            this.loadDemoData();
        });

        // Tab switching
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    }

    setupDemoData() {
        this.demoData = {
            campaign_name: "Summer Product Launch 2025",
            platform: "Meta Ads",
            budget: 150000,
            target_audience: "Millennials and Gen Z professionals in technology sector, aged 25-40, income $75K+",
            industry: "Technology"
        };

        this.analysisResults = {
            overall_score: 87,
            processing_time: "1.7s",
            key_recommendations: [
                "Prioritize tech-savvy professionals segment with 35% budget reallocation based on superior conversion metrics",
                "Implement A/B testing framework for headline variations emphasizing time-saving benefits",
                "Monitor competitive response to recent market entrant pricing strategy within 48-hour window",
                "Capitalize on micro-influencer partnerships within next 14-day optimal engagement period",
                "Optimize campaign scheduling for peak engagement windows (Tuesday-Thursday, 7-9 PM)"
            ],
            audience_insights: {
                primary_demographics: {
                    "Age Range": "25-40 years (core segment)",
                    "Income Level": "$75,000-$150,000 annually",
                    "Education": "Bachelor's degree or higher (89%)",
                    "Location": "Urban and suburban markets",
                    "Device Usage": "Mobile-first (78% of interactions)"
                },
                behavioral_patterns: [
                    "Peak mobile engagement during commute hours (7-9 AM, 5-7 PM) with 67% higher CTR",
                    "Weekday engagement outperforms weekends (73/27 split)",
                    "Video content generates 3.4x higher engagement vs static imagery",
                    "Multi-platform journey with average 4.2 touchpoints before conversion",
                    "Research-driven decisions - 72% consult reviews before action"
                ],
                engagement_trends: [
                    "37% increase in evening engagement rates during Q3 2024",
                    "Video completion rates 28% above industry benchmark (74% vs 58%)",
                    "Social proof elements increase click-through rates by 22%",
                    "Personalized messaging improves conversion rates by 31%"
                ],
                expansion_opportunities: [
                    "Similar audience on TikTok shows 48% overlap potential with 2.3x lower CPM",
                    "Lookalike modeling in adjacent metros (Atlanta, Denver, Austin)",
                    "Cross-platform retargeting could yield 67% efficiency gain",
                    "Strategic partnerships with productivity software brands"
                ]
            },
            creative_performance: {
                performance_predictions: [
                    "Predicted CTR: 3.1-3.7% (industry average: 2.4%, confidence: 94%)",
                    "Estimated conversion rate: 4.8-6.2% based on historical campaigns",
                    "Video completion rate forecast: 74-81% for 15-30 second format",
                    "Engagement rate projection: 6.8-8.1% across creative variations"
                ],
                optimization_recommendations: [
                    "Implement dynamic product ads with real-time inventory for 23% lift",
                    "Deploy urgency elements with countdown timers (18% CTR improvement)",
                    "Optimize creative refresh cycle to 21-day intervals",
                    "A/B test carousel vs single image (carousel +15% engagement)"
                ],
                emotional_resonance: {
                    excitement: 0.78,
                    trust: 0.85,
                    urgency: 0.62,
                    aspiration: 0.73,
                    security: 0.69
                },
                brand_consistency_score: 87
            },
            competitive_intelligence: {
                competitor_activities: [
                    "Competitor A increased ad spend by 40% in past 30 days",
                    "New market entrant launching aggressive pricing campaign",
                    "Major competitor shifting 60% budget from Google to Meta",
                    "Industry leader testing influencer partnerships with 50+ micro-influencers"
                ],
                market_threats: [
                    "Price war risk: 2 competitors reduced pricing by 15-20%",
                    "Market saturation in primary demographic (65% reached)",
                    "Economic headwinds affecting purchasing decisions",
                    "New regulatory requirements increasing compliance costs"
                ],
                response_strategies: [
                    "Emphasize unique value proposition and premium positioning",
                    "Diversify to underutilized platforms (TikTok, Pinterest)",
                    "Accelerate customer retention and loyalty programs",
                    "Focus on customer experience excellence as differentiator"
                ],
                market_opportunities: [
                    "Competitor gap in video marketing (only 20% using effectively)",
                    "Underserved 35-45 demographic with high purchasing power",
                    "Emerging platform opportunities with low competition",
                    "Geographic expansion in secondary markets"
                ]
            },
            trend_analysis: {
                emerging_trends: [
                    "Micro-influencer partnerships gaining 300% more engagement",
                    "Interactive content driving 45% higher engagement rates",
                    "Sustainability messaging resonating with 67% of audience",
                    "AI-powered personalization increasing relevance by 28%"
                ],
                seasonal_patterns: [
                    "Q4 budget allocation typically 35% higher than Q1-Q3",
                    "Back-to-school period shows 28% engagement spike",
                    "Holiday season requires 6-week advance setup",
                    "Summer months see 15% decline in B2B engagement"
                ],
                viral_potential: {
                    video_content: 0.73,
                    user_generated_content: 0.68,
                    trending_hashtags: 0.45,
                    influencer_collaboration: 0.62
                },
                timing_recommendations: [
                    "Launch primary campaign Tuesday-Thursday for maximum reach",
                    "Schedule posts 1-3 PM for optimal engagement",
                    "Avoid major sporting events for launch dates",
                    "Plan refresh every 3-4 weeks to combat ad fatigue"
                ]
            }
        };
    }

    loadDemoData() {
        // Populate form with demo data
        document.getElementById('campaignName').value = this.demoData.campaign_name;
        document.getElementById('platform').value = this.demoData.platform;
        document.getElementById('budget').value = this.demoData.budget;
        document.getElementById('targetAudience').value = this.demoData.target_audience;
        document.getElementById('industry').value = this.demoData.industry;

        // Check objectives
        document.querySelector('input[value="Brand Awareness"]').checked = true;
        document.querySelector('input[value="Lead Generation"]').checked = true;

        this.showNotification('Demo data loaded successfully!', 'success');
    }

    async analyzeCampaign() {
        const formData = this.collectFormData();

        if (!this.validateFormData(formData)) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Show analysis status and hide other sections
        this.showAnalysisStatus();

        try {
            // Simulate analysis with progress
            await this.simulateAnalysis();

            // Show results
            this.showResults();

        } catch (error) {
            this.hideAnalysisStatus();
            this.showNotification('Analysis failed. Please try again.', 'error');
        }
    }

    collectFormData() {
        const objectives = Array.from(document.querySelectorAll('input[name="objectives"]:checked'))
            .map(cb => cb.value);

        return {
            campaign_name: document.getElementById('campaignName').value,
            platform: document.getElementById('platform').value,
            budget: parseFloat(document.getElementById('budget').value),
            target_audience: document.getElementById('targetAudience').value,
            industry: document.getElementById('industry').value,
            campaign_objectives: objectives
        };
    }

    validateFormData(data) {
        return data.campaign_name &&
               data.platform &&
               data.budget &&
               data.target_audience &&
               data.industry &&
               data.campaign_objectives.length > 0;
    }

    showAnalysisStatus() {
        this.currentState = 'analyzing';

        // Hide form and results
        document.getElementById('campaignPanel').classList.add('hidden');
        document.getElementById('resultsSection').classList.add('hidden');

        // Show analysis status
        document.getElementById('analysisStatus').classList.remove('hidden');
    }

    hideAnalysisStatus() {
        document.getElementById('analysisStatus').classList.add('hidden');
    }

    async simulateAnalysis() {
        // Simulate realistic processing time
        return new Promise(resolve => {
            setTimeout(resolve, 3500);
        });
    }

    showResults() {
        this.currentState = 'results';

        // Hide analysis status
        this.hideAnalysisStatus();

        // Show results section
        document.getElementById('resultsSection').classList.remove('hidden');

        // Populate results
        this.displayResults();

        // Scroll to results
        setTimeout(() => {
            document.getElementById('resultsSection').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }

    displayResults() {
        const results = this.analysisResults;

        // Update scores
        document.getElementById('overallScore').textContent = results.overall_score;
        document.getElementById('processingTime').textContent = results.processing_time;
        document.getElementById('optimizationPotential').textContent = '+23%';
        document.getElementById('competitiveRank').textContent = '#3';

        // Update recommendations
        this.populateList('keyRecommendations', results.key_recommendations);

        // Update audience insights
        this.displayAudienceInsights(results.audience_insights);
        this.displayCreativePerformance(results.creative_performance);
        this.displayCompetitiveIntelligence(results.competitive_intelligence);
        this.displayTrendAnalysis(results.trend_analysis);
    }

    displayAudienceInsights(insights) {
        // Demographics
        const demographicsContent = document.getElementById('demographicsContent');
        demographicsContent.innerHTML = '';
        Object.entries(insights.primary_demographics).forEach(([key, value]) => {
            const div = document.createElement('div');
            div.style.cssText = 'margin-bottom: 8px; padding: 8px 0; border-bottom: 1px solid #e2e8f0;';
            div.innerHTML = `<strong>${key}:</strong> ${value}`;
            demographicsContent.appendChild(div);
        });

        this.populateList('behavioralPatterns', insights.behavioral_patterns);
        this.populateList('engagementTrends', insights.engagement_trends);
        this.populateList('expansionOpportunities', insights.expansion_opportunities);
    }

    displayCreativePerformance(creative) {
        this.populateList('performancePredictions', creative.performance_predictions);
        this.populateList('optimizationRecommendations', creative.optimization_recommendations);

        // Brand score
        document.getElementById('brandScore').textContent = creative.brand_consistency_score;

        // Emotional resonance
        const emotionalContainer = document.getElementById('emotionalResonance');
        emotionalContainer.innerHTML = '';
        Object.entries(creative.emotional_resonance).forEach(([emotion, score]) => {
            const div = document.createElement('div');
            div.style.marginBottom = '12px';
            div.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="font-weight: 600; text-transform: capitalize;">${emotion}</span>
                    <span style="font-weight: 700; color: #4f46e5;">${Math.round(score * 100)}%</span>
                </div>
                <div style="background: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                               height: 100%; width: ${score * 100}%; border-radius: 3px;
                               transition: width 0.8s ease;"></div>
                </div>
            `;
            emotionalContainer.appendChild(div);
        });
    }

    displayCompetitiveIntelligence(competitive) {
        this.populateList('competitorActivities', competitive.competitor_activities);
        this.populateList('marketThreats', competitive.market_threats);
        this.populateList('responseStrategies', competitive.response_strategies);
        this.populateList('marketOpportunities', competitive.market_opportunities);
    }

    displayTrendAnalysis(trend) {
        this.populateList('emergingTrends', trend.emerging_trends);
        this.populateList('seasonalPatterns', trend.seasonal_patterns);
        this.populateList('timingRecommendations', trend.timing_recommendations);

        // Viral potential
        const viralContainer = document.getElementById('viralPotential');
        viralContainer.innerHTML = '';
        Object.entries(trend.viral_potential).forEach(([type, score]) => {
            const div = document.createElement('div');
            div.style.marginBottom = '12px';
            div.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="font-weight: 600; text-transform: uppercase;">${type.replace('_', ' ')}</span>
                    <span style="font-weight: 700; color: #10b981;">${Math.round(score * 100)}%</span>
                </div>
                <div style="background: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                               height: 100%; width: ${score * 100}%; border-radius: 3px;
                               transition: width 0.8s ease;"></div>
                </div>
            `;
            viralContainer.appendChild(div);
        });
    }

    populateList(elementId, items) {
        const container = document.getElementById(elementId);
        container.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            container.appendChild(li);
        });
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 24px;
            right: 24px;
            padding: 16px 24px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            max-width: 400px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#dc2626' : '#4f46e5'};
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize the platform when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.marketingPlatform = new MarketingPlatform();
    console.log('🚀 Marketing Intelligence Platform initialized');
});
