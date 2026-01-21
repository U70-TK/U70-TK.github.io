import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { Toolbar } from '@mui/material'

import AboutSrn from './screens/about'
import TeachingSrn from './screens/teach'
import CVSrn from './screens/cv'
import PubsSrn from './screens/pubs'
import NavBar from './components/navBar'
import './App.css'
import CourseSrc from './screens/courses'

function App() {
  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Publications', path: '/pubs' },
    { label: 'Courses', path: '/course' },
    { label: 'Blogs', path: '', external_link: "https://chiseled-zucchini-78c.notion.site/Felix-s-Blog-2efd1e25bc2380c388f0c6ceb163378b" },
    { label: 'Teaching', path: '/teach' },
    { label: 'CV', path: '/cv' },
  ];

  return (
    <BrowserRouter>
      <NavBar navItems={navItems} />
      <Toolbar />

      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutSrn />} />
        <Route path="/teach" element={<TeachingSrn />} />
        <Route path="/course" element={<CourseSrc />} />
        <Route path="/cv" element={<CVSrn />} />
        <Route path="/pubs" element={<PubsSrn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
