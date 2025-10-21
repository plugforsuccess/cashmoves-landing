// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import DisclaimerPage from './pages/DisclaimerPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/disclaimer" element={<DisclaimerPage />} />
<Route path="/terms" element={<TermsPage />} />
<Route path="/privacy" element={<PrivacyPage />} />
</Routes>
</Router>
);
}

export default App;