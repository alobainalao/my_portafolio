import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Developer from './pages/Developer';
import DataScience from './pages/DataScience';
import './i18n';
import './global.css'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/developer" element={<Developer />} />
                <Route path="/datascience" element={<DataScience />} />
            </Routes>
        </Router>
    );
}

export default App;

