class MarketingAIDemo {
    constructor() {
        this.initializeEventListeners();
        this.currentAnalysis = null;
    }

    initializeEventListeners() {
        // Form submission
        document.getElementById('campaignForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.analyzeCampaign();
        });

        // Load demo data button
        document.getElementById('loadDemo').addEventListener('click', () => {
            this.loadDemoData();
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    }

    async loadDemoData() {
        try {
            const response = await fetch('/api/demo-data');
            const data = await response.json();

            // Load first sample campaign
            const sample = data.sample_campaigns[0];

            document.getElementById('campaignName').value = sample.campaign_name;
            document.getElementById('platform').value = sample.platform;
            document.getElementById('budget').value = sample.budget;
            document.getElementById('targetAudience').value = sample.target_audience;
            document.getElementById('industry').value = sample.industry;

            // Check objectives
            document.querySelectorAll('input[name="objectives"]').forEach(checkbox => {
                checkbox.checked = sample.campaign_objectives.includes(checkbox.value);
            });

            this.showNotification('Demo data loaded successfully!', 'success');
        } catch (error) {
            this.showNotification('Error loading demo data', 'error');
        }
    }

    async analyzeCampaign() {
        // Collect form data
        const formData = this.collectFormData();

        if (!this.validateFormData(formData)) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Show analysis status
        this.showAnalysisStatus();

        // Simulate chain processing
        this.simulateChainProcessing();

        try {
            const response = await fetch('/api/analyze-campaign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Analysis failed');
            }

            const result = await response.json();
            this.currentAnalysis = result;

            // Hide status and show results
            setTimeout(() => {
                this.hideAnalysisStatus();
                this.displayResults(result);
            }, 3000); // Give time for demo effect

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
        return data.campaign_name && data.platform && data.budget &&
               data.target_audience && data.industry &&
               data.campaign_objectives.length > 0;
    }

    showAnalysisStatus() {
        document.getElementById('analysisStatus').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'none';

        // Reset chain status
        document.querySelectorAll('.chain-item').forEach(item => {
            item.classList.remove('completed');
            item.querySelector('.status').textContent = 'Processing...';
        });
    }

    simulateChainProcessing() {
        const chains = ['chain1', 'chain2', 'chain3', 'chain4'];

        chains.forEach((chainId, index) => {
            setTimeout(() => {
                const chainElement = document.getElementById(chainId);
                chainElement.classList.add('completed');
                chainElement.querySelector('.status').textContent = 'Completed';
            }, (index + 1) * 700);
        });
    }

    hideAnalysisStatus() {
        document.getElementById('analysisStatus').style.display = 'none';
    }

    displayResults(result) {
        document.getElementById('resultsSection').style.display = 'block';

        // Overall score
        document.getElementById('overallScore').textContent =
            Math.round(result.overall_score * 100);

        // Processing time
        document.getElementById('processingTime').textContent =
            result.metadata.processing_time || '2.3s';

        // Key recommendations
        this.displayRecommendations(result.key_recommendations);

        // Tab content
        this.displayAudienceInsights(result.audience_insights);
        this.displayCreativePerformance(result.creative_performance);
        this.displayCompetitiveIntelligence(result.competitive_intelligence);
        this.displayTrendAnalysis(result.trend_analysis);

        // Scroll to results
        document.getElementById('resultsSection').scrollIntoView({
            behavior: 'smooth'
        });
    }

    displayRecommendations(recommendations) {
        const container = document.getElementById('keyRecommendations');
        container.innerHTML = '';

        recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.textContent = rec;
            container.appendChild(li);
        });
    }

    displayAudienceInsights(insights) {
        // Demographics
        const demographicsContent = document.getElementById('demographicsContent');
        demographicsContent.innerHTML = '';
        Object.entries(insights.primary_demographics).forEach(([key, value]) => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${key.replace('_', ' ')}:</strong> ${value}`;
            demographicsContent.appendChild(div);
        });

        // Lists
        this.populateList('behavioralPatterns', insights.behavioral_patterns);
        this.populateList('engagementTrends', insights.engagement_trends);
        this.populateList('expansionOpportunities', insights.expansion_opportunities);
    }

    displayCreativePerformance(creative) {
        this.populateList('performancePredictions', creative.performance_predictions);
        this.populateList('optimizationRecommendations', creative.optimization_recommendations);

        // Brand consistency score
        document.getElementById('brandScore').textContent =
            Math.round(creative.brand_consistency_score * 100);

        // Emotional resonance
        const emotionalContainer = document.getElementById('emotionalResonance');
        emotionalContainer.innerHTML = '';
        Object.entries(creative.emotional_resonance).forEach(([emotion, score]) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>${emotion.charAt(0).toUpperCase() + emotion.slice(1)}</span>
                    <span>${Math.round(score * 100)}%</span>
                </div>
                <div style="background: #e0e0e0; height: 8px; border-radius: 4px;">
                    <div style="background: linear-gradient(135deg, #3498db, #2980b9);
                               height: 100%; width: ${score * 100}%; border-radius: 4px;"></div>
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
            div.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>${type.replace('_', ' ').toUpperCase()}</span>
                    <span>${Math.round(score * 100)}%</span>
                </div>
                <div style="background: #e0e0e0; height: 8px; border-radius: 4px;">
                    <div style="background: linear-gradient(135deg, #e74c3c, #c0392b);
                               height: 100%; width: ${score * 100}%; border-radius: 4px;"></div>
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
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }

    showNotification(message, type) {
        // Simple notification system
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize the demo when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MarketingAIDemo();
});
