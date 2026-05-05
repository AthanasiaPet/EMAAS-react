import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Members from './pages/Members'
import Structure from './pages/Structure'
import Presidium from './pages/Presidium'
import AdvisoryCouncil from './pages/AdvisoryCouncil'
import Membership from './pages/Membership'
import GrandPhd from './pages/GrandPhd'
import Contact from './pages/Contact'
import Activities from './pages/Activities'
import Nous from './pages/Nous'
import Projects from './pages/Projects'
import PhotoGallery from './pages/PhotoGallery'
import LatestPublications from './pages/LatestPublications'
import NotFound from './pages/NotFound'
import History from './pages/History'
import News from './pages/News'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/members" element={<Members />} />
                <Route path="/structure" element={<Structure />} />
                <Route path="/presidium" element={<Presidium />} />
                <Route path="/advisory-council" element={<AdvisoryCouncil />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/grand-phd" element={<GrandPhd />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/nous" element={<Nous />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/photo-gallery" element={<PhotoGallery />} />
                <Route path="/latest-publications" element={<LatestPublications />} />
                <Route path="/history" element={<History />} />
                <Route path="/news" element={<News />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App