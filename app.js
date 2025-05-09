function App() {
    try {
        const data = getRandomData();

        return (
            <div data-name="app" className="min-h-screen bg-gray-100">
                <Header />
                <Sidebar />
                <main data-name="main-content" className="ml-64 pt-16">
                    <div data-name="dashboard-grid" className="dashboard-grid">
                        <div data-name="stats-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <StatCard 
                                icon="fa-car-crash"
                                title="Total Accidents"
                                value={formatNumber(data.accidents.current)}
                                change={calculateChange(data.accidents.current, data.accidents.previous)}
                            />
                            <StatCard 
                                icon="fa-user-injured"
                                title="Injuries"
                                value={formatNumber(data.injuries.current)}
                                change={calculateChange(data.injuries.current, data.injuries.previous)}
                            />
                            <StatCard 
                                icon="fa-skull"
                                title="Fatalities"
                                value={formatNumber(data.fatalities.current)}
                                change={calculateChange(data.fatalities.current, data.fatalities.previous)}
                            />
                            <StatCard 
                                icon="fa-dollar-sign"
                                title="Economic Impact"
                                value={`$${formatNumber(data.costs.current)}`}
                                change={calculateChange(data.costs.current, data.costs.previous)}
                            />
                        </div>
                        
                        <div data-name="map-section" className="mt-6">
                            <AccidentMap />
                        </div>
                        
                        <div data-name="analysis-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            <TrendChart />
                            <RiskFactors />
                        </div>
                        
                        <div data-name="safety-section" className="mt-6">
                            <SafetyTips />
                        </div>
                    </div>
                </main>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
