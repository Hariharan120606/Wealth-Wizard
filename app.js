import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    try {
      // Replace the URL below with your actual backend endpoint (e.g., your Replit URL)
      const response = await fetch('https://replit.com/@bedop69758/WealthWizard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: 'sample data' })
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="container">
      <h1>FinSight AI</h1>
      <p>Get personalized financial insights powered by AI.</p>
      <button onClick={handlePredict}>Get Investment Insight</button>
      {result && (
        <div className="result">
          <h2>Insight:</h2>
          <p>{result.insight}</p>
          <p>Confidence: {result.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default App;
