import './App.css'
import AboutPage from './pages/about/AboutPage'
import HomePage from './pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './pages/projects/ProjectsPage'
import ContactPage from './pages/contact/ContactPage'

function App() {

  return (

    <Routes>
      <Route element={<HomePage />} path='/' />
      <Route element={<AboutPage />} path='/about' />
      <Route element={<ProjectsPage />} path='/projects' />
      <Route element={<ContactPage />} path='/contact' />
    </Routes>

  )
}

export default App
