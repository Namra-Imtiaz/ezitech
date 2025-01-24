import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Internships from './pages/Internships.jsx'
import Courses from './pages/Courses.jsx'
import Careers from './pages/Careers.jsx'
import Blogs from './pages/Blogs.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="internships" element={<Internships />} />
      <Route path="courses" element={<Courses />} />
      <Route path="careers" element={<Careers />} />
      <Route path="blogs" element={<Blogs />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
