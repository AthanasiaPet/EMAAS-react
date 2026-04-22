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

function App() {
    return (
        <BrowserRouter>
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
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App