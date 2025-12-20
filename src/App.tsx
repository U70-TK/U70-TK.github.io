import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toolbar } from '@mui/material'

import AboutSrn from './screens/about'
import TeachingSrn from './screens/teach'
import CVSrn from './screens/cv'
import PubsSrn from './screens/pubs'
import NavBar from './components/navBar'
import './App.css'

function App() {
  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Publications', path: '/pubs' },
    { label: 'Teaching', path: '/teach' },
    { label: 'CV', path: '/cv' },
  ];

  return (
    <HashRouter>
      <NavBar navItems={navItems} />
      <Toolbar />

      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutSrn />} />
        <Route path="/teach" element={<TeachingSrn />} />
        <Route path="/cv" element={<CVSrn />} />
        <Route path="/pubs" element={<PubsSrn />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
